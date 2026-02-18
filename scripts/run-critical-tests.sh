#!/bin/bash

# Run Critical Tests
# Usage: ./scripts/run-critical-tests.sh

set -e

echo "========================================="
echo "Running Critical Tests"
echo "========================================="

# Install browsers if not already installed
echo "Checking Playwright browsers..."
npx playwright install

# Get environment from argument or default to dev
ENV=${1:-dev}

echo "Environment: $ENV"
echo "Starting critical tests..."

cross-env ENV=$ENV npx playwright test --grep @critical --reporter=html,allure-playwright

echo "========================================="
echo "Critical tests completed!"
echo "Test results: test-results/html/index.html"
echo "Allure results: ./allure-results"
echo "========================================="
