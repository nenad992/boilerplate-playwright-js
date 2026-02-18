/**
 * Critical Path Tests - Core User Workflows
 * These tests cover critical user journeys
 * Tags: @critical, @workflow
 */
const { test } = require('../fixtures/fixtures');
const { expect } = require('@playwright/test');
const Logger = require('../utils/logger');
const TestDataHelper = require('../utils/testDataHelper');

test.describe('Critical User Workflows', () => {
  test('@critical @workflow - Complete login and navigate to dashboard workflow', async ({
    page,
    loginPage,
    homePage,
  }) => {
    Logger.step('1. Navigate to login page');
    await loginPage.goto();
    const loginPageTitle = await loginPage.getPageTitle();
    expect(loginPageTitle).toBeTruthy();

    Logger.step('2. Enter valid credentials');
    const credentials = TestDataHelper.getValidCredentials();
    await loginPage.login(credentials.username, credentials.password);

    Logger.step('3. Wait for dashboard redirect');
    await page.waitForURL('**/dashboard');

    Logger.step('4. Verify dashboard is loaded');
    const isDashboardLoaded = await homePage.isPageLoaded();
    expect(isDashboardLoaded).toBe(true);

    Logger.step('5. Verify user greeting');
    const greeting = await homePage.getUserGreeting();
    expect(greeting).toContain('practice');

    Logger.success('Complete workflow executed successfully');
  });

  test('@critical @workflow - Login, verify user data, and logout', async ({
    page,
    loginPage,
    homePage,
  }) => {
    Logger.step('1. Navigate to login page');
    await loginPage.goto();

    Logger.step('2. Perform login');
    const credentials = TestDataHelper.getValidCredentials();
    await loginPage.login(credentials.username, credentials.password);

    Logger.step('3. Verify dashboard loaded');
    await page.waitForURL('**/dashboard');
    expect(page.url()).toContain('dashboard');

    Logger.step('4. Verify user information');
    const isLoggedIn = await homePage.isUserLoggedIn();
    expect(isLoggedIn).toBe(true);

    Logger.step('5. Logout');
    await homePage.logout();

    Logger.step('6. Verify redirected to login');
    await page.waitForURL('**/login');
    expect(page.url()).toContain('login');

    Logger.success('Complete login-logout workflow executed successfully');
  });
});
