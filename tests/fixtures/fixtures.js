/**
 * Fixtures - Custom Playwright fixtures for test setup
 * Provides reusable test resources like page objects, API clients, etc.
 */
const { test: baseTest } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const HomePage = require('../pages/HomePage');

/**
 * Custom test fixture that provides page objects
 */
const test = baseTest.extend({
  /**
   * Login page fixture
   * Usage in test: async ({ loginPage }) => { ... }
   */
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  /**
   * Home page fixture
   * Usage in test: async ({ homePage }) => { ... }
   */
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  /**
   * Authenticated user fixture
   * Logs in a user before each test
   * Usage in test: async ({ authenticatedPage }) => { ... }
   */
  authenticatedPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('practice', 'SuperSecurePassword!');

    // Wait for redirect to home page
    await page.waitForURL('**/dashboard');

    await use(page);
  },
});

// Export test with custom fixtures
module.exports = { test };
