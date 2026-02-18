#!/bin/bash

# Clean Test Artifacts
# Usage: ./scripts/clean.sh

set -e

echo "========================================="
echo "Cleaning Test Artifacts"
echo "========================================="

echo "Removing test results..."
rm -rf test-results

echo "Removing allure results..."
rm -rf allure-results

echo "Removing allure report..."
rm -rf allure-report

echo "Removing auth files..."
rm -rf .auth

echo "========================================="
echo "Cleanup completed successfully!"
echo "========================================="
