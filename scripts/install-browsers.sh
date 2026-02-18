#!/bin/bash

# Install Playwright Browsers
# Usage: ./scripts/install-browsers.sh

set -e

echo "========================================="
echo "Installing Playwright Browsers"
echo "========================================="

echo "Installing Chromium..."
npx playwright install chromium

echo "Installing Firefox..."
npx playwright install firefox

echo "Installing WebKit..."
npx playwright install webkit

echo "========================================="
echo "All browsers installed successfully!"
echo "========================================="
