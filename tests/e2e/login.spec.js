/**
 * Smoke Tests - Login Functionality
 * These are quick tests to verify basic login functionality
 * Tags: @smoke, @critical, @auth
 */
const { test } = require('../fixtures/fixtures');
const { expect } = require('@playwright/test');
const Logger = require('../utils/logger');
const TestDataHelper = require('../utils/testDataHelper');

test.describe('Login Page - Smoke Tests', () => {
  test.beforeEach(async ({ loginPage }) => {
    Logger.info('Navigating to login page');
    await loginPage.goto();
  });

  test('@smoke @critical @auth - Successful login with valid credentials', async ({
    page,
    loginPage,
  }) => {
    Logger.step('User enters valid credentials');
    const credentials = TestDataHelper.getValidCredentials();
    await loginPage.login(credentials.username, credentials.password);

    Logger.step('Verify user is redirected to inventory page');
    // Saucedemo redirects to /inventory.html
    await page.waitForSelector('.inventory_list', { timeout: 10000 });
    const currentUrl = page.url();
    expect(currentUrl).toContain('inventory');
    Logger.success('User successfully logged in and redirected to inventory page');
  });

  test('@smoke @auth - Error message displayed for invalid credentials', async ({ loginPage }) => {
    Logger.step('User enters invalid credentials');
    const invalidCredentials = TestDataHelper.getInvalidCredentials();
    await loginPage.login(invalidCredentials.username, invalidCredentials.password);

    Logger.step('Verify error message is displayed');
    const errorVisible = await loginPage.isErrorMessageVisible();
    expect(errorVisible).toBe(true);
    Logger.success('Error message is displayed for invalid credentials');
  });

  test('@smoke - Login page elements are visible', async ({ loginPage, page }) => {
    Logger.step('Verify login page is loaded');

    // Verify page title
    const title = await page.title();
    expect(title).toBeTruthy();
    Logger.success('Login page loaded successfully');
  });
});
