/**
 * Example Lambda Function - Authentication Handler
 * ==================================================
 *
 * This shows how to integrate AWS Secrets Manager into your
 * existing auth Lambda functions. Copy the relevant patterns
 * into your actual Lambda code.
 *
 * Required packages (add to Lambda layer or include in deployment):
 *   - @aws-sdk/client-secrets-manager
 *   - jsonwebtoken
 *   - bcryptjs
 *
 * IAM Policy Required: See aws-lambda-secrets-policy.json
 */

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { getJwtSecret, getSecurityConfig, getAdminCredentials, getDbConfig } = require('./lambda-secrets-helper');

// =============================================================================
// LOGIN HANDLER - Replace your existing login Lambda code
// =============================================================================

/**
 * Login handler that uses Secrets Manager for JWT signing
 * Includes account lockout protection
 */
exports.loginHandler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const { email, password } = body;

    // Input validation
    if (!email || !password) {
      return response(400, { error: 'Email and password are required' });
    }

    // Get security configuration from Secrets Manager
    const securityConfig = await getSecurityConfig();
    const dbConfig = await getDbConfig();

    // Get user from DynamoDB
    const user = await getUserByEmail(email, dbConfig.users_table);

    if (!user) {
      // Generic message to prevent email enumeration
      return response(401, { error: 'Invalid email or password' });
    }

    // Check account lockout
    if (user.accountLockedUntil && user.accountLockedUntil > Date.now()) {
      const remainingSeconds = Math.ceil((user.accountLockedUntil - Date.now()) / 1000);
      return response(423, {
        error: `Account temporarily locked. Try again in ${remainingSeconds} seconds.`,
        locked: true,
        retryAfter: remainingSeconds
      });
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.passwordHash);

    if (!isValidPassword) {
      // Increment failed login attempts
      const failedAttempts = (user.failedLoginAttempts || 0) + 1;

      const updateData = {
        failedLoginAttempts: failedAttempts,
        lastFailedLogin: Date.now()
      };

      // Lock account if too many failed attempts
      if (failedAttempts >= securityConfig.max_login_attempts) {
        updateData.accountLockedUntil = Date.now() + (securityConfig.lockout_duration_seconds * 1000);
        console.warn(`Account locked for user: ${email} after ${failedAttempts} failed attempts`);
      }

      await updateUser(user.user_id, updateData, dbConfig.users_table);

      return response(401, { error: 'Invalid email or password' });
    }

    // Successful login - reset failed attempts
    await updateUser(user.user_id, {
      failedLoginAttempts: 0,
      accountLockedUntil: null,
      lastSuccessfulLogin: Date.now()
    }, dbConfig.users_table);

    // Get JWT secret from Secrets Manager
    const jwtConfig = await getJwtSecret();

    // Generate tokens
    const idToken = jwt.sign(
      {
        user_id: user.user_id,
        email: user.email,
        name: user.name,
        is_admin: user.is_admin || false
      },
      jwtConfig.jwt_secret,
      { expiresIn: jwtConfig.jwt_expiration } // 30 minutes
    );

    const refreshToken = jwt.sign(
      {
        user_id: user.user_id,
        type: 'refresh'
      },
      jwtConfig.jwt_secret,
      { expiresIn: jwtConfig.jwt_refresh_expiration } // 7 days
    );

    const accessToken = jwt.sign(
      {
        user_id: user.user_id,
        type: 'access'
      },
      jwtConfig.jwt_secret,
      { expiresIn: jwtConfig.jwt_expiration } // 30 minutes
    );

    return response(200, {
      idToken,
      accessToken,
      refreshToken,
      userData: {
        user_id: user.user_id,
        name: user.name,
        email: user.email,
        permissions: user.permissions
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    return response(500, { error: 'Internal server error' });
  }
};

// =============================================================================
// REGISTER HANDLER - Replace your existing register Lambda code
// =============================================================================

/**
 * Registration handler with strong password validation
 * Uses Secrets Manager for security config
 */
exports.registerHandler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const { name, email, password, birthDate, birthTime, birthLocation, birthLat, birthLon, timezone, natalPositions } = body;

    // Get security configuration
    const securityConfig = await getSecurityConfig();
    const dbConfig = await getDbConfig();

    // Validate required fields
    if (!name || !email || !password) {
      return response(400, { error: 'Name, email, and password are required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return response(400, { error: 'Invalid email format' });
    }

    // SERVER-SIDE password validation (matches frontend rules)
    const passwordErrors = validatePasswordServer(password, securityConfig);
    if (passwordErrors.length > 0) {
      return response(400, { error: `Password requirements not met: ${passwordErrors.join(', ')}` });
    }

    // Check if user already exists
    const existingUser = await getUserByEmail(email, dbConfig.users_table);
    if (existingUser) {
      return response(409, { error: 'An account with this email already exists' });
    }

    // Hash password with bcrypt (cost factor 12)
    const passwordHash = await bcrypt.hash(password, 12);

    // Create user in DynamoDB
    const userId = generateUserId();
    const userData = {
      user_id: userId,
      email: email.toLowerCase().trim(),
      name: sanitizeInput(name),
      passwordHash,
      birth_date: birthDate,
      birth_time: birthTime,
      birth_location: sanitizeInput(birthLocation),
      birth_lat: birthLat,
      birth_lon: birthLon,
      timezone,
      natal_positions: natalPositions,
      permissions: {
        year_2026: {
          ntt_daily: true, // Free tier
          ntt_weekly: false,
          ntt_monthly: false,
          ntt_annual: false,
          tth_monthly: false,
          tth_annual: false,
          nt_weekly: false,   // Natal to Transit Calendar
          nt_monthly: false,
          nt_annual: false
        }
      },
      is_admin: false,
      failedLoginAttempts: 0,
      accountLockedUntil: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    await createUser(userData, dbConfig.users_table);

    return response(201, {
      userId,
      email: userData.email,
      message: 'Registration successful'
    });

  } catch (error) {
    console.error('Registration error:', error);
    return response(500, { error: 'Internal server error' });
  }
};

// =============================================================================
// TOKEN REFRESH HANDLER
// =============================================================================

/**
 * Refresh token handler - issues new access token
 * Uses Secrets Manager for JWT secret
 */
exports.refreshTokenHandler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const { refreshToken } = body;

    if (!refreshToken) {
      return response(400, { error: 'Refresh token is required' });
    }

    // Get JWT secret from Secrets Manager
    const jwtConfig = await getJwtSecret();

    // Verify refresh token
    let decoded;
    try {
      decoded = jwt.verify(refreshToken, jwtConfig.jwt_secret);
    } catch (err) {
      if (err.name === 'TokenExpiredError') {
        return response(401, { error: 'Refresh token expired. Please log in again.' });
      }
      return response(401, { error: 'Invalid refresh token' });
    }

    if (decoded.type !== 'refresh') {
      return response(401, { error: 'Invalid token type' });
    }

    // Get user data for new token
    const dbConfig = await getDbConfig();
    const user = await getUserById(decoded.user_id, dbConfig.users_table);

    if (!user) {
      return response(401, { error: 'User not found' });
    }

    // Issue new access token
    const newAccessToken = jwt.sign(
      {
        user_id: user.user_id,
        email: user.email,
        name: user.name,
        is_admin: user.is_admin || false
      },
      jwtConfig.jwt_secret,
      { expiresIn: jwtConfig.jwt_expiration }
    );

    // Issue new ID token
    const newIdToken = jwt.sign(
      {
        user_id: user.user_id,
        email: user.email,
        name: user.name,
        is_admin: user.is_admin || false
      },
      jwtConfig.jwt_secret,
      { expiresIn: jwtConfig.jwt_expiration }
    );

    return response(200, {
      idToken: newIdToken,
      accessToken: newAccessToken
    });

  } catch (error) {
    console.error('Token refresh error:', error);
    return response(500, { error: 'Internal server error' });
  }
};

// =============================================================================
// ADMIN VERIFICATION MIDDLEWARE
// =============================================================================

/**
 * Verify admin access using Secrets Manager credentials
 */
async function verifyAdminAccess(token) {
  const jwtConfig = await getJwtSecret();

  try {
    const decoded = jwt.verify(token, jwtConfig.jwt_secret);

    if (!decoded.is_admin) {
      return { isAdmin: false, error: 'Not an admin user' };
    }

    return { isAdmin: true, userId: decoded.user_id, email: decoded.email };
  } catch (err) {
    return { isAdmin: false, error: 'Invalid or expired token' };
  }
}

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Server-side password validation (mirrors frontend validation)
 */
function validatePasswordServer(password, securityConfig) {
  const errors = [];

  if (password.length < securityConfig.password_min_length) {
    errors.push(`Must be at least ${securityConfig.password_min_length} characters`);
  }

  if (securityConfig.require_uppercase && !/[A-Z]/.test(password)) {
    errors.push('Must contain an uppercase letter');
  }

  if (securityConfig.require_lowercase && !/[a-z]/.test(password)) {
    errors.push('Must contain a lowercase letter');
  }

  if (securityConfig.require_numbers && !/[0-9]/.test(password)) {
    errors.push('Must contain a number');
  }

  if (securityConfig.require_special_chars && !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    errors.push('Must contain a special character');
  }

  // Check common passwords
  const COMMON_PASSWORDS = [
    'password', 'password123', '123456', 'qwerty', 'admin',
    'admin123', 'letmein', 'welcome', 'monkey', 'dragon'
  ];
  if (COMMON_PASSWORDS.includes(password.toLowerCase())) {
    errors.push('Password is too common');
  }

  return errors;
}

/**
 * Sanitize user input
 */
function sanitizeInput(input) {
  if (typeof input !== 'string') return input;
  return input.replace(/<[^>]*>/g, '').trim();
}

/**
 * Generate unique user ID
 */
function generateUserId() {
  return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Standard API response helper
 */
function response(statusCode, body) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type,Authorization',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS'
    },
    body: JSON.stringify(body)
  };
}

// =============================================================================
// PLACEHOLDER DynamoDB functions - Replace with your actual implementation
// =============================================================================

async function getUserByEmail(email, tableName) {
  // TODO: Implement DynamoDB query by email (GSI)
  // const params = { TableName: tableName, IndexName: 'email-index', ... };
  throw new Error('Implement getUserByEmail with DynamoDB');
}

async function getUserById(userId, tableName) {
  // TODO: Implement DynamoDB get by user_id
  throw new Error('Implement getUserById with DynamoDB');
}

async function createUser(userData, tableName) {
  // TODO: Implement DynamoDB put item
  throw new Error('Implement createUser with DynamoDB');
}

async function updateUser(userId, updateData, tableName) {
  // TODO: Implement DynamoDB update item
  throw new Error('Implement updateUser with DynamoDB');
}
