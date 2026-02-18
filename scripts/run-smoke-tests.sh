#!/bin/bash

# Run Smoke Tests
# Usage: ./scripts/run-smoke-tests.sh

set -e

echo "========================================="
echo "Running Smoke Tests"
echo "========================================="

# Install browsers if not already installed
echo "Checking Playwright browsers..."
npx playwright install

# Get environment from argument or default to dev
ENV=${1:-dev}

echo "Environment: $ENV"
echo "Starting smoke tests..."

cross-env ENV=$ENV npx playwright test --grep @smoke --reporter=html,allure-playwright

echo "========================================="
echo "Smoke tests completed!"
echo "Test results: test-results/html/index.html"
echo "Allure results: ./allure-results"
echo "========================================="
