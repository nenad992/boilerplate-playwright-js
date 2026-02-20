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
    const loginPageTitle = await loginPage.getLoginPageTitle();
    expect(loginPageTitle).toBeTruthy();

    Logger.step('2. Enter valid credentials');
    const credentials = TestDataHelper.getValidCredentials();
    await loginPage.login(credentials.username, credentials.password);

    Logger.step('3. Wait for inventory page redirect (Saucedemo)');
    await page.waitForSelector('.inventory_list', { timeout: 10000 });

    Logger.step('4. Verify dashboard is loaded');
    const isDashboardLoaded = await homePage.isPageLoaded();
    expect(isDashboardLoaded).toBe(true);

    Logger.step('5. Verify user greeting (Products Available for Saucedemo)');
    const greeting = await homePage.getUserGreeting();
    expect(greeting).toBeTruthy();
    expect(greeting.length).toBeGreaterThan(0);

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

    Logger.step('3. Verify inventory page loaded');
    await page.waitForSelector('.inventory_list', { timeout: 10000 });
    expect(page.url()).toContain('inventory');

    Logger.step('4. Verify user information');
    const isGreetingVisible = await homePage.isUserGreetingVisible();
    expect(isGreetingVisible).toBe(true);

    Logger.step('5. Logout');
    await homePage.logout();

    Logger.step('6. Verify redirected to login (Saucedemo root page)');
    await page.waitForTimeout(1000);
    const currentUrl = page.url();
    expect(currentUrl).toMatch(/saucedemo\.com\/?$/);

    Logger.success('Complete login-logout workflow executed successfully');
  });
});
