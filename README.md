# Playwright E2E Testing Boilerplate 🎭

A comprehensive, production-ready boilerplate for end-to-end testing using **Playwright** with **JavaScript**. This boilerplate implements industry best practices including Page Object Model architecture, multi-environment configuration, Docker support, GitHub Actions CI/CD, and Allure reporting.

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Page Object Model](#page-object-model)
- [Fixtures](#fixtures)
- [Test Tags](#test-tags)
- [Parallel Execution](#parallel-execution)
- [Retry Strategy](#retry-strategy)
- [Report Generation](#report-generation)
- [Docker Setup](#docker-setup)
- [GitHub Actions CI/CD](#github-actions-cicd)
- [Project Structure Details](#project-structure-details)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## ✨ Features

### Core Features

- ✅ **Page Object Model (POM)** - Clean architecture for maintainable tests
- ✅ **Custom Fixtures** - Reusable test setup and teardown
- ✅ **Multi-Environment Config** - Dev, Staging, and Production configurations
- ✅ **Multi-Browser Testing** - Chrome, Firefox, Safari, Edge, and mobile browsers
- ✅ **Tag-Based Execution** - Run tests using @smoke, @regression, @critical tags
- ✅ **Parallel Execution** - Fast test execution with configurable workers
- ✅ **Retry Strategy** - Automatic retry on CI with configurable attempts
- ✅ **HTML Reports** - Built-in HTML test reports
- ✅ **Allure Reporting** - Advanced test reporting with history tracking
- ✅ **Docker Support** - Containerized testing environment
- ✅ **GitHub Actions** - Automated CI/CD workflows
- ✅ **Logging & Debugging** - Comprehensive logging with color-coded output
- ✅ **Screenshots & Videos** - Auto-capture on failures

## 📁 Project Structure

```
boilerplate-playwright-js/
├── tests/
│   ├── e2e/                          # Test files
│   │   ├── login.spec.js             # Login tests
│   │   ├── dashboard.spec.js         # Dashboard tests
│   │   └── workflows.spec.js         # Workflow tests
│   ├── pages/                        # Page Object Model
│   │   ├── BasePage.js               # Base page class
│   │   ├── LoginPage.js              # Login page object
│   │   └── HomePage.js               # Home page object
│   ├── fixtures/                     # Test fixtures
│   │   └── fixtures.js               # Custom fixtures
│   └── utils/                        # Utility functions
│       ├── logger.js                 # Logging utility
│       ├── apiHelper.js              # API helper functions
│       └── testDataHelper.js         # Test data helpers
├── config/                           # Configuration files
│   ├── env.dev.config.js             # Dev environment config
│   ├── env.staging.config.js         # Staging environment config
│   └── env.prod.config.js            # Production environment config
├── data/                             # Test data
│   └── testData.json                 # Test data JSON
├── scripts/                          # Utility scripts
│   ├── run-smoke-tests.sh            # Run smoke tests
│   ├── run-regression-tests.sh       # Run regression tests
│   ├── run-critical-tests.sh         # Run critical tests
│   ├── generate-allure-report.sh     # Generate Allure report
│   ├── install-browsers.sh           # Install browsers
│   └── clean.sh                      # Clean artifacts
├── .github/workflows/                # GitHub Actions workflows
│   ├── tests.yml                     # Main test workflow
│   └── docker-tests.yml              # Docker test workflow
├── playwright.config.js              # Playwright configuration
├── Dockerfile                        # Docker image definition
├── docker-compose.yml                # Docker Compose configuration
├── package.json                      # npm dependencies
├── .eslintrc.json                    # ESLint configuration
├── .prettierrc                       # Prettier configuration
├── .gitignore                        # Git ignore rules
├── .env.example                      # Environment variables example
├── README.md                         # This file
└── CONTRIBUTING.md                   # Contributing guide
```

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 18.0.0 ([Download](https://nodejs.org/))
- **npm** >= 9.0.0 (comes with Node.js)
- **Git** for version control
- **Docker** (optional, for containerized testing)

### Verify Installation

```bash
node --version    # Should be v18.0.0 or higher
npm --version     # Should be v9.0.0 or higher
git --version     # Should be installed
docker --version  # Optional, for Docker support
```

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/boilerplate-playwright-js.git
cd boilerplate-playwright-js
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Playwright Browsers

```bash
npx playwright install

# Or use the provided script
./scripts/install-browsers.sh
```

### 4. Run Your First Test

```bash
# Run all tests
npm test

# Run in headed mode (see browser)
npm run test:headed

# Run specific test file
npm test tests/e2e/login.spec.js

# Run smoke tests
npm run test:smoke
```

### 5. View Results

```bash
# HTML report
open test-results/html/index.html

# Or generate Allure report
npm run report:allure
npm run report:open
```

## ⚙️ Configuration

### Environment Configuration

The boilerplate supports multiple environments. Configure them in the `config/` directory:

#### Development Environment (`config/env.dev.config.js`)

```javascript
module.exports = {
  baseUrl: 'https://practice.expandtesting.com',
  apiUrl: 'https://practice.expandtesting.com/api',
  testTimeout: 30000,
  navigationWaitUntil: 'domcontentloaded',
};
```

#### Staging & Production

Similar configurations exist for staging and production environments.

### Environment Variables

Copy `.env.example` to `.env` and customize:

```bash
cp .env.example .env
```

```env
BASE_URL=https://practice.expandtesting.com
ENV=dev
HEADLESS=true
WORKERS=4
```

### Playwright Configuration

Edit `playwright.config.js` to customize:

- **Test Timeout**: Default 30 seconds per test
- **Expect Timeout**: Default 5 seconds for assertions
- **Retry Strategy**: 2 retries on CI, 0 on local
- **Workers**: 4 parallel workers (configurable)
- **Screenshots**: On failure
- **Videos**: On failure
- **Test Directory**: `tests/e2e/`

## 🧪 Running Tests

### Run All Tests

```bash
npm test
```

### Run Tests in Headed Mode

```bash
npm run test:headed
```

Watch the browser as tests execute (useful for debugging).

### Run Tests in Debug Mode

```bash
npm run test:debug
```

Step through tests with Playwright Inspector.

### Run Tests in UI Mode

```bash
npm run test:ui
```

Interactive test runner with time travel debugging.

### Run Tests by Environment

```bash
# Development environment
npm run test:dev

# Staging environment
npm run test:staging

# Production environment
npm run test:prod
```

### Run Tests by Tag

Run specific tests using tags:

```bash
# Smoke tests (quick sanity checks)
npm run test:smoke

# Regression tests (comprehensive)
npm run test:regression

# Critical path tests
npm run test:critical
```

### Run Tests in Parallel

```bash
npm run test:parallel    # Run with 4 workers

# Or specify custom workers
npx playwright test --workers=8
```

### Run Tests Serially

```bash
npm run test:serial     # Run with 1 worker (sequential)
```

### Run Specific Test File

```bash
npm test tests/e2e/login.spec.js
```

### Run Tests Matching Pattern

```bash
npx playwright test -g "login"    # Run tests with "login" in name
```

## 📄 Page Object Model

The Page Object Model (POM) pattern separates test logic from page interaction logic, making tests more maintainable and reusable.

### BasePage Class

All page objects inherit from `BasePage` which provides common methods:

```javascript
const BasePage = require('./BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = '#username';
    this.passwordInput = '#password';
    this.submitButton = 'button[type="submit"]';
  }

  async login(username, password) {
    await this.fillText(this.usernameInput, username);
    await this.fillText(this.passwordInput, password);
    await this.click(this.submitButton);
  }

  async getErrorMessage() {
    return await this.getText('.error-message');
  }
}

module.exports = LoginPage;
```

### Available BasePage Methods

| Method                              | Description                 |
| ----------------------------------- | --------------------------- |
| `navigateTo(path)`                  | Navigate to URL path        |
| `waitForPageLoad()`                 | Wait for page to load       |
| `click(selector)`                   | Click element               |
| `fillText(selector, text)`          | Fill input field            |
| `getText(selector)`                 | Get element text            |
| `isVisible(selector)`               | Check if element is visible |
| `waitForElement(selector, timeout)` | Wait for element            |
| `getAllTexts(selector)`             | Get all matching texts      |
| `selectOption(selector, value)`     | Select dropdown             |
| `checkCheckbox(selector)`           | Check checkbox              |
| `uncheckCheckbox(selector)`         | Uncheck checkbox            |
| `getPageTitle()`                    | Get page title              |
| `getCurrentUrl()`                   | Get current URL             |
| `takeScreenshot(name)`              | Take screenshot             |

## 🔧 Fixtures

Fixtures provide test setup and teardown, reducing code duplication.

### Using Built-in Fixtures

```javascript
const { test } = require('../fixtures/fixtures');

test('Login test', async ({ loginPage, homePage }) => {
  await loginPage.goto();
  await loginPage.login('user', 'pass');

  const greeting = await homePage.getUserGreeting();
  expect(greeting).toBeTruthy();
});
```

### Available Fixtures

| Fixture             | Purpose                  |
| ------------------- | ------------------------ |
| `loginPage`         | LoginPage instance       |
| `homePage`          | HomePage instance        |
| `authenticatedPage` | Page with logged-in user |

### Creating Custom Fixtures

Edit `tests/fixtures/fixtures.js`:

```javascript
const { test: baseTest } = require('@playwright/test');
const MyPage = require('../pages/MyPage');

const test = baseTest.extend({
  myPage: async ({ page }, use) => {
    const myPage = new MyPage(page);
    await use(myPage);
  },
});

module.exports = { test };
```

## 🏷️ Test Tags

Tests can be tagged for organization and selective execution.

### Available Tags

| Tag           | Purpose              |
| ------------- | -------------------- |
| `@smoke`      | Quick sanity checks  |
| `@regression` | Comprehensive tests  |
| `@critical`   | Critical path tests  |
| `@auth`       | Authentication tests |
| `@workflow`   | Complex workflows    |

### Using Tags

```javascript
test('@smoke @critical @auth - User can login', async ({ loginPage }) => {
  // Test code
});
```

### Running Tests by Tags

```bash
# Run only smoke tests
npx playwright test --grep @smoke

# Run tests excluding a tag
npx playwright test --grep-invert @slow

# Multiple tags (AND condition)
npx playwright test --grep "@critical.*@auth"
```

## ⚡ Parallel Execution

Run multiple tests simultaneously for faster execution.

### Configure Workers

In `playwright.config.js`:

```javascript
module.exports = defineConfig({
  fullyParallel: true,
  workers: process.env.CI ? 1 : 4, // 1 on CI, 4 locally
});
```

### Run with Custom Worker Count

```bash
npx playwright test --workers=8

# Full parallelism (1 worker per test)
npx playwright test --workers=unlimited
```

### Disable Parallelism

```bash
npx playwright test --workers=1
```

## 🔄 Retry Strategy

Automatically retry failed tests on CI environments.

### Configuration

In `playwright.config.js`:

```javascript
module.exports = defineConfig({
  retries: process.env.CI ? 2 : 0, // 2 retries on CI, 0 locally
});
```

### Per-Test Configuration

```javascript
test('Flaky test', async ({ page }) => {
  // Test code
});

test.describe.configure({ retries: 2 });
```

### Timeout Configuration

```javascript
test.setTimeout(60000); // 60 second timeout for this test

test('Long running test', async ({ page }) => {
  // Test code
});
```

## 📊 Report Generation

### HTML Reports

Built-in Playwright HTML reports:

```bash
npm test
open test-results/html/index.html
```

### Allure Reporting

Advanced reporting with history and trends:

```bash
# Generate Allure report
npm run report:allure

# Open Allure report
npm run report:open

# Using script
./scripts/generate-allure-report.sh
```

### View Test Results

The HTML report includes:

- ✅ Test execution status
- ⏱️ Execution time
- 📸 Screenshots
- 📹 Videos
- 📋 Full logs

### Report Artifacts

Reports are generated in:

- **HTML**: `test-results/html/`
- **Allure Results**: `allure-results/`
- **Allure Report**: `allure-report/`
- **JSON**: `test-results/results.json`

## 🐳 Docker Setup

### Build Docker Image

```bash
docker build -t playwright-boilerplate .
```

### Run Tests in Docker

```bash
# Run with default settings
docker run --rm playwright-boilerplate

# Run with specific environment
docker run --rm -e ENV=staging playwright-boilerplate

# Run specific tag
docker run --rm playwright-boilerplate npm run test:smoke

# Mount volumes for results
docker run --rm \
  -v $(pwd)/test-results:/app/test-results \
  -v $(pwd)/allure-results:/app/allure-results \
  playwright-boilerplate
```

### Docker Compose

Run with Allure reporting service:

```bash
# Start services
docker-compose up --build

# Run in background
docker-compose up -d

# View logs
docker-compose logs -f playwright

# Stop services
docker-compose down

# Clean up
docker-compose down -v
```

### Docker Environment Variables

In `docker-compose.yml`:

```yaml
environment:
  - ENV=dev
  - CI=true
  - HEADLESS=true
```

## 🔄 GitHub Actions CI/CD

### Workflows Included

1. **tests.yml** - Main test workflow with matrix testing
2. **docker-tests.yml** - Docker-based test execution

### Main Test Workflow

```yaml
- Runs on: push to main/develop, PRs, schedule (nightly)
- Tests: Multiple browsers (Chrome, Firefox, Safari)
- Environments: Dev, Staging
- Reports: Uploads test results and Allure artifacts
```

### Running Workflows Locally

```bash
# Install act (GitHub Actions local runner)
brew install act

# Run workflow locally
act push
```

### Viewing Results

GitHub Actions automatically:

- ✅ Runs tests on every push
- ✅ Comments on PRs with results
- ✅ Stores artifacts (reports, screenshots)
- ⏱️ Nightly regression runs

### Configure Workflows

Edit `.github/workflows/tests.yml` to customize:

- Trigger events
- Matrix configurations
- Timeout values
- Artifact retention

## 📚 Project Structure Details

### Tests Directory

```
tests/
├── e2e/                    # End-to-end test files
│   ├── login.spec.js       # Login functionality tests
│   ├── dashboard.spec.js   # Dashboard tests
│   └── workflows.spec.js   # Complete workflow tests
├── pages/                  # Page Object Models
│   ├── BasePage.js         # Base class with common methods
│   ├── LoginPage.js        # Login page object
│   └── HomePage.js         # Home page object
├── fixtures/               # Test fixtures
│   └── fixtures.js         # Custom fixtures for setup/teardown
└── utils/                  # Utility modules
    ├── logger.js           # Logging utility with colors
    ├── apiHelper.js        # API request helpers
    └── testDataHelper.js   # Test data generators
```

### Config Directory

```
config/
├── env.dev.config.js       # Development environment
├── env.staging.config.js   # Staging environment
└── env.prod.config.js      # Production environment
```

Each config includes:

- `baseUrl`: Application base URL
- `apiUrl`: API endpoint
- `testTimeout`: Test execution timeout
- `navigationWaitUntil`: Page load strategy

### Data Directory

```
data/
└── testData.json           # Test data, credentials, expected messages
```

## ✅ Best Practices

### Test Writing

1. **Use Page Objects**: Keep page interactions in page objects, logic in fixtures
2. **Single Responsibility**: Each test should verify one thing
3. **Clear Names**: Use descriptive test names
4. **Proper Waits**: Use explicit waits, avoid `waitForTimeout()`
5. **Clean Data**: Clean up after tests
6. **Logging**: Log key steps for debugging

### Page Objects

1. **Extend BasePage**: Inherit common functionality
2. **Define Selectors**: Class properties, not in methods
3. **Meaningful Methods**: Method names reflect user actions
4. **Avoid Logic**: Keep complex logic in tests/fixtures
5. **Encapsulation**: Hide page implementation details

### Fixtures

1. **Reusable Setup**: Use for common test setup
2. **Clear Naming**: Name fixtures after what they provide
3. **Cleanup**: Always cleanup resources
4. **Type Hints**: Add JSDoc for IDE support

### Test Structure

```javascript
const { test } = require('../fixtures/fixtures');
const { expect } = require('@playwright/test');
const Logger = require('../utils/logger');

test.describe('Feature Name', () => {
  test.beforeEach(async ({ page }) => {
    Logger.info('Setting up test');
    // Setup code
  });

  test('@tag - Clear test description', async ({ fixture }) => {
    Logger.step('Step 1');
    // Test action

    Logger.step('Step 2');
    // Another action

    // Assertion
    expect(result).toBe(expected);
  });
});
```

## 🐛 Troubleshooting

### Tests Fail Locally But Pass on CI

**Causes**:

- Different environment configuration
- Race conditions (timing issues)
- Browser cache differences

**Solutions**:

```bash
# Match CI environment
cross-env ENV=dev npm test

# Run serially to avoid race conditions
npm run test:serial

# Clear cache
rm -rf .playwright
```

### Playwright Browsers Not Installed

```bash
# Install all browsers
npx playwright install

# Or use script
./scripts/install-browsers.sh

# Install specific browser
npx playwright install chromium
```

### Tests Timeout

**Solutions**:

```javascript
// Increase timeout for specific test
test.setTimeout(60000);

test('Long test', async ({ page }) => {
  // Test code
});
```

Or increase globally in `playwright.config.js`:

```javascript
timeout: 60 * 1000,  // 60 seconds
```

### Screenshots/Videos Not Generated

Ensure configuration in `playwright.config.js`:

```javascript
use: {
  screenshot: 'only-on-failure',  // or 'on' for all tests
  video: 'retain-on-failure',     // or 'on' for all tests
}
```

### Port Already in Use

```bash
# Find process using port
lsof -i :3000

# Kill process
kill -9 <PID>
```

### Docker Build Fails

```bash
# Clean Docker build cache
docker system prune -a

# Rebuild
docker build -t playwright-boilerplate --no-cache .
```

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for:

- Development setup
- Code style guidelines
- Test writing standards
- Pull request process

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 🎓 Learning Resources

- [Playwright Documentation](https://playwright.dev)
- [Page Object Model Guide](https://www.selenium.dev/documentation/en/guidelines_and_recommendations/encouraged_practices/page_object_models/)
- [Allure Report](https://docs.qameta.io/allure/)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Docker Documentation](https://docs.docker.com/)

## 🚀 Next Steps

1. **Customize Configuration**: Update `config/` files with your application URLs
2. **Create Page Objects**: Add page objects for your application pages
3. **Write Tests**: Create test files for your features
4. **Configure CI/CD**: Set up GitHub Actions workflows
5. **Setup Docker**: Configure Docker for your environment

## ❓ FAQ

**Q: Can I use this boilerplate with TypeScript?**  
A: Yes! The structure supports both JavaScript and TypeScript. Add `tsconfig.json` and rename files to `.ts`.

**Q: How do I integrate with other tools?**  
A: The boilerplate is designed to be extensible. Add tools to `package.json` and integrate in `playwright.config.js`.

**Q: How do I handle authentication?**  
A: Use the `authenticatedPage` fixture or create API-based authentication in test setup.

**Q: Can I run tests against multiple environments?**  
A: Yes! Use the `ENV` variable: `cross-env ENV=staging npm test`

**Q: How do I generate reports in CI?**  
A: GitHub Actions workflows automatically generate and upload reports. View in Actions artifacts.

**Q: Can I use this for performance testing?**  
A: Playwright isn't designed for load testing, but you can measure performance metrics in tests.

---

**Happy Testing! 🎉**

For issues, questions, or suggestions, please open an issue on GitHub.
