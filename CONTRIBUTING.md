# Contributing Guide

Thank you for your interest in contributing to this Playwright E2E Testing Boilerplate!

## Getting Started

1. **Fork** the repository
2. **Clone** your fork: `git clone <your-fork-url>`
3. **Create** a feature branch: `git checkout -b feature/your-feature-name`
4. **Install** dependencies: `npm install`
5. **Install** Playwright browsers: `npx playwright install`

## Development Workflow

### Running Tests Locally

```bash
# Run all tests
npm test

# Run tests in headed mode
npm run test:headed

# Run tests in debug mode
npm run test:debug

# Run specific test suite
npm test tests/e2e/login.spec.js

# Run tests by tag
npm run test:smoke
npm run test:regression
npm run test:critical
```

### Code Quality

```bash
# Lint code
npm run lint

# Format code
npm run format
```

### Adding New Tests

1. Create test file in `tests/e2e/` directory
2. Follow naming convention: `*.spec.js`
3. Use provided fixtures for page objects
4. Add appropriate tags: `@smoke`, `@regression`, `@critical`, etc.
5. Use the Logger utility for step logging

Example:

```javascript
const { test } = require('../fixtures/fixtures');
const { expect } = require('@playwright/test');
const Logger = require('../utils/logger');

test.describe('Feature Tests', () => {
  test('@smoke - Test description', async ({ loginPage }) => {
    Logger.step('Step description');
    // Your test code here
    expect(true).toBe(true);
  });
});
```

### Adding New Page Objects

1. Create file in `tests/pages/` directory
2. Extend `BasePage` class
3. Define selectors as class properties
4. Create methods for page interactions
5. Use existing BasePage methods where applicable

Example:

```javascript
const BasePage = require('./BasePage');

class MyPage extends BasePage {
  constructor(page) {
    super(page);
    this.myElement = '#myElement';
  }

  async myMethod() {
    await this.click(this.myElement);
  }
}

module.exports = MyPage;
```

### Docker Development

```bash
# Build Docker image
docker build -t playwright-boilerplate .

# Run tests in Docker
docker run --rm playwright-boilerplate

# Run specific environment
docker run --rm -e ENV=staging playwright-boilerplate
```

## Commit Guidelines

Follow conventional commit format:

- `feat: Add new feature`
- `fix: Fix a bug`
- `docs: Update documentation`
- `test: Add or update tests`
- `refactor: Refactor code`
- `style: Code style changes`

## Pull Request Process

1. Update README if needed
2. Add tests for new functionality
3. Ensure all tests pass: `npm test`
4. Format code: `npm run format`
5. Lint code: `npm run lint`
6. Create clear PR description with details about changes

## Testing Best Practices

1. **Use Page Object Model**: Keep page logic separate from test logic
2. **Use Fixtures**: Leverage custom fixtures for common setup
3. **Add Tags**: Use tags for organizing and executing tests
4. **Log Steps**: Use Logger for clear test execution visibility
5. **Avoid Hard Waits**: Use explicit waits instead of `page.waitForTimeout()`
6. **Clean Data**: Clean up test data after tests when needed
7. **Isolate Tests**: Each test should be independent and runnable in any order

## Reporting Issues

When reporting a bug, please include:

- Test environment (OS, Node version)
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots/Videos if applicable
- Relevant logs

## Questions?

Feel free to open an issue or create a discussion for questions.

Thank you for contributing! 🎉
