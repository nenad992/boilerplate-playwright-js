/**
 * Regression Tests - Dashboard Functionality
 * These tests verify dashboard and home page functionality
 * Tags: @regression, @critical
 */
const { test } = require('../fixtures/fixtures');
const { expect } = require('@playwright/test');
const Logger = require('../utils/logger');

test.describe('Dashboard - Regression Tests', () => {
  test.beforeEach(async ({ authenticatedPage }) => {
    Logger.info('User is already authenticated');
  });

  test('@regression @critical - User dashboard is loaded after login', async ({
    authenticatedPage,
    homePage,
  }) => {
    Logger.step('Verify dashboard is loaded');
    const isDashboardLoaded = await homePage.isDashboardLoaded();
    expect(isDashboardLoaded).toBeTruthy();
    Logger.success('Dashboard loaded successfully');
  });

  test('@regression - Verify user greeting is visible on dashboard', async ({
    authenticatedPage,
    homePage,
  }) => {
    Logger.step('Verify user greeting message');
    const greeting = await homePage.getUserGreeting();
    expect(greeting).toBeTruthy();
    expect(greeting.length).toBeGreaterThan(0);
    Logger.success('User greeting is visible on dashboard');
  });

  test('@regression - Logout functionality works correctly', async ({
    page,
    authenticatedPage,
    homePage,
  }) => {
    Logger.step('Click logout button');
    await homePage.logout();

    Logger.step('Verify user is redirected to login page (Saucedemo root)');
    // Saucedemo redirects to root page after logout
    await page.waitForTimeout(1000);
    const currentUrl = page.url();
    expect(currentUrl).toMatch(/saucedemo\.com\/?$/);
    Logger.success('User successfully logged out');
  });

  test('@regression - Profile menu can be opened', async ({ authenticatedPage, homePage }) => {
    Logger.step('Open profile menu (hamburger menu for Saucedemo)');
    await homePage.openProfileMenu();

    Logger.step('Verify menu opened (resilient check)');
    const menuVisible = await homePage.isProfileMenuOpen();
    expect(menuVisible).toBeTruthy();
    Logger.success('Profile menu opened successfully');
  });

  test('@regression - Page navigation works correctly', async ({ authenticatedPage, homePage }) => {
    Logger.step('Verify page is loaded');
    const isLoaded = await homePage.isPageLoaded();
    expect(isLoaded).toBe(true);
    Logger.success('Page navigation verified');
  });
});
