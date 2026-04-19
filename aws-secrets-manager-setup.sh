#!/bin/bash
# =============================================================================
# AWS Secrets Manager Setup for Ivy Astrology
# =============================================================================
# This script creates and manages secrets in AWS Secrets Manager
# All secrets are prefixed with IVY_ to distinguish from other secrets
#
# Usage: bash aws-secrets-manager-setup.sh [create|update|list|delete]
#
# IMPORTANT: Run this from a terminal with AWS CLI configured
# Region: eu-west-1
# =============================================================================

REGION="eu-west-1"
PREFIX="IVY_"

echo "============================================="
echo "  Ivy Astrology - AWS Secrets Manager Setup"
echo "  Region: $REGION"
echo "  Prefix: $PREFIX"
echo "============================================="

# =============================================================================
# 1. IVY_JWT_SECRET - JWT Token Signing Key
# =============================================================================
# Used by Lambda functions to sign and verify JWT authentication tokens
# CRITICAL: If this changes, all existing user sessions will be invalidated

create_jwt_secret() {
    echo ""
    echo "[1/6] Creating IVY_JWT_SECRET..."

    # Generate a random 64-character hex string for JWT signing
    JWT_SECRET=$(openssl rand -hex 32)

    aws secretsmanager create-secret \
        --name "${PREFIX}JWT_SECRET" \
        --description "JWT signing key for Ivy Astrology user authentication. Used by auth Lambda functions to sign/verify tokens." \
        --secret-string "{\"jwt_secret\":\"$JWT_SECRET\",\"jwt_expiration\":1800,\"jwt_refresh_expiration\":604800}" \
        --region $REGION \
        --tags Key=Project,Value=IvyAstrology Key=Environment,Value=production Key=ManagedBy,Value=aws-cli

    echo "  -> IVY_JWT_SECRET created successfully"
    echo "  -> Expiration: 30 min (access), 7 days (refresh)"
}

# =============================================================================
# 2. IVY_STRIPE_KEYS - Stripe Payment API Keys
# =============================================================================
# Used by payment Lambda functions to process payments
# Contains both publishable key (frontend) and secret key (backend)

create_stripe_secret() {
    echo ""
    echo "[2/6] Creating IVY_STRIPE_KEYS..."

    # IMPORTANT: Replace these placeholder values with your real Stripe keys
    read -p "  Enter Stripe Publishable Key (pk_live_...): " STRIPE_PK
    read -sp "  Enter Stripe Secret Key (sk_live_...): " STRIPE_SK
    echo ""

    aws secretsmanager create-secret \
        --name "${PREFIX}STRIPE_KEYS" \
        --description "Stripe API keys for Ivy Astrology payment processing. Used by payment Lambda functions." \
        --secret-string "{\"stripe_publishable_key\":\"$STRIPE_PK\",\"stripe_secret_key\":\"$STRIPE_SK\",\"stripe_webhook_secret\":\"\"}" \
        --region $REGION \
        --tags Key=Project,Value=IvyAstrology Key=Environment,Value=production Key=ManagedBy,Value=aws-cli

    echo "  -> IVY_STRIPE_KEYS created successfully"
}

# =============================================================================
# 3. IVY_ADMIN_CREDENTIALS - Admin Account Credentials
# =============================================================================
# Admin password for the Ivy Astrology admin panel
# Used to verify admin access in Lambda functions

create_admin_secret() {
    echo ""
    echo "[3/6] Creating IVY_ADMIN_CREDENTIALS..."

    read -p "  Enter Admin Email: " ADMIN_EMAIL
    read -sp "  Enter Admin Password: " ADMIN_PASSWORD
    echo ""

    aws secretsmanager create-secret \
        --name "${PREFIX}ADMIN_CREDENTIALS" \
        --description "Admin account credentials for Ivy Astrology admin panel. Used to verify admin access." \
        --secret-string "{\"admin_email\":\"$ADMIN_EMAIL\",\"admin_password_hash\":\"TO_BE_HASHED_BY_LAMBDA\",\"admin_raw\":\"$ADMIN_PASSWORD\",\"mfa_enabled\":false}" \
        --region $REGION \
        --tags Key=Project,Value=IvyAstrology Key=Environment,Value=production Key=ManagedBy,Value=aws-cli

    echo "  -> IVY_ADMIN_CREDENTIALS created successfully"
    echo "  -> IMPORTANT: Update Lambda to hash password on first use"
}

# =============================================================================
# 4. IVY_DB_CONFIG - DynamoDB Configuration
# =============================================================================
# DynamoDB table names and configuration
# Allows changing table names without redeploying Lambda functions

create_db_config_secret() {
    echo ""
    echo "[4/6] Creating IVY_DB_CONFIG..."

    aws secretsmanager create-secret \
        --name "${PREFIX}DB_CONFIG" \
        --description "DynamoDB table names and configuration for Ivy Astrology. Used by all Lambda functions." \
        --secret-string "{\"users_table\":\"TransitCalendarUsers\",\"sessions_table\":\"TransitCalendarSessions\",\"payments_table\":\"TransitCalendarPayments\",\"region\":\"eu-west-1\"}" \
        --region $REGION \
        --tags Key=Project,Value=IvyAstrology Key=Environment,Value=production Key=ManagedBy,Value=aws-cli

    echo "  -> IVY_DB_CONFIG created successfully"
}

# =============================================================================
# 5. IVY_API_GATEWAY_CONFIG - API Gateway Configuration
# =============================================================================
# API Gateway endpoints and configuration
# Used for CORS configuration and inter-service communication

create_api_config_secret() {
    echo ""
    echo "[5/6] Creating IVY_API_GATEWAY_CONFIG..."

    aws secretsmanager create-secret \
        --name "${PREFIX}API_GATEWAY_CONFIG" \
        --description "API Gateway configuration for Ivy Astrology. Contains endpoints and CORS settings." \
        --secret-string "{\"transit_calendar_api\":\"https://pxq7fyhjsf.execute-api.eu-west-1.amazonaws.com/prod\",\"payment_api\":\"https://5hhjpfa808.execute-api.eu-west-1.amazonaws.com/prod\",\"allowed_origins\":[\"https://ivyastrology.com\",\"https://www.ivyastrology.com\"],\"cors_max_age\":86400}" \
        --region $REGION \
        --tags Key=Project,Value=IvyAstrology Key=Environment,Value=production Key=ManagedBy,Value=aws-cli

    echo "  -> IVY_API_GATEWAY_CONFIG created successfully"
}

# =============================================================================
# 6. IVY_SECURITY_CONFIG - Security Configuration
# =============================================================================
# Security parameters including lockout settings, password policy, rate limits

create_security_config_secret() {
    echo ""
    echo "[6/6] Creating IVY_SECURITY_CONFIG..."

    aws secretsmanager create-secret \
        --name "${PREFIX}SECURITY_CONFIG" \
        --description "Security configuration for Ivy Astrology. Contains lockout, password policy, and rate limit settings." \
        --secret-string "{\"max_login_attempts\":5,\"lockout_duration_seconds\":900,\"password_min_length\":12,\"require_uppercase\":true,\"require_lowercase\":true,\"require_numbers\":true,\"require_special_chars\":true,\"rate_limit_requests_per_minute\":30,\"session_timeout_seconds\":1800}" \
        --region $REGION \
        --tags Key=Project,Value=IvyAstrology Key=Environment,Value=production Key=ManagedBy,Value=aws-cli

    echo "  -> IVY_SECURITY_CONFIG created successfully"
}

# =============================================================================
# Helper Functions
# =============================================================================

list_secrets() {
    echo ""
    echo "Listing all IVY_ prefixed secrets..."
    echo ""
    aws secretsmanager list-secrets \
        --region $REGION \
        --filters Key=name,Values="${PREFIX}" \
        --query "SecretList[].{Name:Name,Description:Description,LastChanged:LastChangedDate}" \
        --output table
}

delete_all_secrets() {
    echo ""
    echo "WARNING: This will schedule deletion of ALL IVY_ prefixed secrets!"
    read -p "Are you sure? (type 'yes' to confirm): " CONFIRM

    if [ "$CONFIRM" != "yes" ]; then
        echo "Cancelled."
        return
    fi

    for SECRET_NAME in "${PREFIX}JWT_SECRET" "${PREFIX}STRIPE_KEYS" "${PREFIX}ADMIN_CREDENTIALS" "${PREFIX}DB_CONFIG" "${PREFIX}API_GATEWAY_CONFIG" "${PREFIX}SECURITY_CONFIG"; do
        echo "  Deleting $SECRET_NAME..."
        aws secretsmanager delete-secret \
            --secret-id "$SECRET_NAME" \
            --recovery-window-in-days 7 \
            --region $REGION 2>/dev/null || echo "  -> $SECRET_NAME not found (skipped)"
    done

    echo "Secrets scheduled for deletion (7-day recovery window)"
}

update_secret() {
    SECRET_NAME=$1
    SECRET_VALUE=$2

    echo "Updating $SECRET_NAME..."
    aws secretsmanager update-secret \
        --secret-id "$SECRET_NAME" \
        --secret-string "$SECRET_VALUE" \
        --region $REGION
    echo "  -> $SECRET_NAME updated successfully"
}

rotate_jwt_secret() {
    echo ""
    echo "Rotating IVY_JWT_SECRET..."
    echo "WARNING: This will invalidate ALL existing user sessions!"
    read -p "Are you sure? (type 'yes' to confirm): " CONFIRM

    if [ "$CONFIRM" != "yes" ]; then
        echo "Cancelled."
        return
    fi

    NEW_JWT_SECRET=$(openssl rand -hex 32)

    aws secretsmanager update-secret \
        --secret-id "${PREFIX}JWT_SECRET" \
        --secret-string "{\"jwt_secret\":\"$NEW_JWT_SECRET\",\"jwt_expiration\":1800,\"jwt_refresh_expiration\":604800}" \
        --region $REGION

    echo "  -> JWT secret rotated successfully"
    echo "  -> All existing sessions are now invalid"
}

# =============================================================================
# Main Command Handler
# =============================================================================

case "${1:-create}" in
    create)
        echo ""
        echo "Creating all IVY_ secrets in AWS Secrets Manager..."
        create_jwt_secret
        create_stripe_secret
        create_admin_secret
        create_db_config_secret
        create_api_config_secret
        create_security_config_secret
        echo ""
        echo "============================================="
        echo "  All secrets created successfully!"
        echo "  Run 'bash $0 list' to verify"
        echo "============================================="
        ;;
    list)
        list_secrets
        ;;
    delete)
        delete_all_secrets
        ;;
    rotate-jwt)
        rotate_jwt_secret
        ;;
    help)
        echo ""
        echo "Usage: bash $0 [command]"
        echo ""
        echo "Commands:"
        echo "  create      - Create all IVY_ secrets (default)"
        echo "  list        - List all IVY_ secrets"
        echo "  delete      - Delete all IVY_ secrets (7-day recovery)"
        echo "  rotate-jwt  - Rotate JWT signing key (invalidates sessions)"
        echo "  help        - Show this help message"
        echo ""
        ;;
    *)
        echo "Unknown command: $1"
        echo "Run 'bash $0 help' for usage"
        ;;
esac
