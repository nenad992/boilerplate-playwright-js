#!/bin/bash

# Generate Allure Report
# Usage: ./scripts/generate-allure-report.sh

set -e

echo "========================================="
echo "Generating Allure Report"
echo "========================================="

# Check if allure-results directory exists
if [ ! -d "allure-results" ]; then
  echo "No test results found. Please run tests first."
  exit 1
fi

echo "Generating Allure report..."
npx allure generate allure-results --clean -o allure-report

echo "========================================="
echo "Allure report generated successfully!"
echo "Open report: ./allure-report/index.html"
echo "========================================="
