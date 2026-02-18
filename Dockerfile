# Use official Playwright image as base
FROM mcr.microsoft.com/playwright:v1.48.0-jammy

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy test files and configuration
COPY tests ./tests
COPY playwright.config.js ./
COPY config ./config

# Install Playwright browsers
RUN npx playwright install

# Set environment variable for CI
ENV CI=true

# Default command to run tests
CMD ["npm", "run", "test"]
