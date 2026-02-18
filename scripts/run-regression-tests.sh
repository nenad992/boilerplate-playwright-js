#!/bin/bash

# Run Regression Tests
# Usage: ./scripts/run-regression-tests.sh

set -e

echo "========================================="
echo "Running Regression Tests"
echo "========================================="

# Install browsers if not already installed
echo "Checking Playwright browsers..."
npx playwright install

# Get environment from argument or default to dev
ENV=${1:-dev}

echo "Environment: $ENV"
echo "Starting regression tests..."

cross-env ENV=$ENV npx playwright test --grep @regression --reporter=html,allure-playwright

echo "========================================="
echo "Regression tests completed!"
echo "Test results: test-results/html/index.html"
echo "Allure results: ./allure-results"
echo "========================================="
