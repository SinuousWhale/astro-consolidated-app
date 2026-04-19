/**
 * AWS Secrets Manager Helper for Ivy Astrology Lambda Functions
 * =============================================================
 *
 * Copy this file into your Lambda function code to retrieve secrets
 * from AWS Secrets Manager with caching support.
 *
 * All secrets are prefixed with IVY_ to distinguish from other secrets.
 *
 * Usage in Lambda handlers:
 *
 *   const { getSecret, getJwtSecret, getStripeKeys, getSecurityConfig } = require('./secrets-helper');
 *
 *   exports.handler = async (event) => {
 *     const jwtConfig = await getJwtSecret();
 *     const token = jwt.sign(payload, jwtConfig.jwt_secret, { expiresIn: jwtConfig.jwt_expiration });
 *     ...
 *   };
 *
 * IMPORTANT: Ensure your Lambda execution role has the following IAM permission:
 *
 *   {
 *     "Effect": "Allow",
 *     "Action": [
 *       "secretsmanager:GetSecretValue"
 *     ],
 *     "Resource": "arn:aws:secretsmanager:eu-west-1:*:secret:IVY_*"
 *   }
 */

const { SecretsManagerClient, GetSecretValueCommand } = require('@aws-sdk/client-secrets-manager');

const REGION = 'eu-west-1';
const PREFIX = 'IVY_';

// Secret name constants
const SECRET_NAMES = {
  JWT_SECRET: `${PREFIX}JWT_SECRET`,
  STRIPE_KEYS: `${PREFIX}STRIPE_KEYS`,
  ADMIN_CREDENTIALS: `${PREFIX}ADMIN_CREDENTIALS`,
  DB_CONFIG: `${PREFIX}DB_CONFIG`,
  API_GATEWAY_CONFIG: `${PREFIX}API_GATEWAY_CONFIG`,
  SECURITY_CONFIG: `${PREFIX}SECURITY_CONFIG`
};

// In-memory cache for secrets (persists across warm Lambda invocations)
const secretsCache = new Map();
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes cache

/**
 * Get a secret from AWS Secrets Manager with caching
 * @param {string} secretName - The full secret name (e.g., 'IVY_JWT_SECRET')
 * @returns {Promise<Object>} - Parsed secret JSON value
 */
async function getSecret(secretName) {
  // Check cache first
  const cached = secretsCache.get(secretName);
  if (cached && (Date.now() - cached.timestamp) < CACHE_TTL_MS) {
    return cached.value;
  }

  // Fetch from Secrets Manager
  const client = new SecretsManagerClient({ region: REGION });

  try {
    const command = new GetSecretValueCommand({ SecretId: secretName });
    const response = await client.send(command);

    let secretValue;
    if (response.SecretString) {
      secretValue = JSON.parse(response.SecretString);
    } else {
      // Binary secret (unlikely for our use case)
      const buff = Buffer.from(response.SecretBinary, 'base64');
      secretValue = JSON.parse(buff.toString('ascii'));
    }

    // Cache the result
    secretsCache.set(secretName, {
      value: secretValue,
      timestamp: Date.now()
    });

    return secretValue;
  } catch (error) {
    console.error(`Failed to retrieve secret ${secretName}:`, error.message);
    throw new Error(`Secret retrieval failed: ${secretName}`);
  }
}

/**
 * Clear the secrets cache (useful for testing or forced refresh)
 */
function clearSecretsCache() {
  secretsCache.clear();
}

// =============================================================================
// Convenience functions for specific secrets
// =============================================================================

/**
 * Get JWT configuration
 * @returns {Promise<{jwt_secret: string, jwt_expiration: number, jwt_refresh_expiration: number}>}
 */
async function getJwtSecret() {
  return getSecret(SECRET_NAMES.JWT_SECRET);
}

/**
 * Get Stripe API keys
 * @returns {Promise<{stripe_publishable_key: string, stripe_secret_key: string, stripe_webhook_secret: string}>}
 */
async function getStripeKeys() {
  return getSecret(SECRET_NAMES.STRIPE_KEYS);
}

/**
 * Get admin credentials
 * @returns {Promise<{admin_email: string, admin_password_hash: string, mfa_enabled: boolean}>}
 */
async function getAdminCredentials() {
  return getSecret(SECRET_NAMES.ADMIN_CREDENTIALS);
}

/**
 * Get DynamoDB configuration
 * @returns {Promise<{users_table: string, sessions_table: string, payments_table: string, region: string}>}
 */
async function getDbConfig() {
  return getSecret(SECRET_NAMES.DB_CONFIG);
}

/**
 * Get API Gateway configuration
 * @returns {Promise<{transit_calendar_api: string, payment_api: string, allowed_origins: string[], cors_max_age: number}>}
 */
async function getApiGatewayConfig() {
  return getSecret(SECRET_NAMES.API_GATEWAY_CONFIG);
}

/**
 * Get security configuration
 * @returns {Promise<{max_login_attempts: number, lockout_duration_seconds: number, password_min_length: number, ...}>}
 */
async function getSecurityConfig() {
  return getSecret(SECRET_NAMES.SECURITY_CONFIG);
}

// =============================================================================
// Export all functions
// =============================================================================

module.exports = {
  // Core functions
  getSecret,
  clearSecretsCache,
  SECRET_NAMES,

  // Convenience functions
  getJwtSecret,
  getStripeKeys,
  getAdminCredentials,
  getDbConfig,
  getApiGatewayConfig,
  getSecurityConfig
};
