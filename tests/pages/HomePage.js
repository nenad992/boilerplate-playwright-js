/**
 * HomePage - Page Object Model for Home Page
 * Handles all interactions and assertions for the home page
 */
const BasePage = require('./BasePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);

    // Define selectors for the home page
    this.userGreeting = '.login-label';
    this.logoutButton = 'a[href*="logout"]';
    this.dashboardTitle = 'h1';
    this.welcomeMessage = '.welcome-message';
  }

  /**
   * Navigate to home page
   */
  async goto() {
    await this.navigateTo('/');
    await this.waitForPageLoad();
  }

  /**
   * Get user greeting text
   * @returns {Promise<string>}
   */
  async getUserGreeting() {
    await this.waitForElement(this.userGreeting);
    return await this.getText(this.userGreeting);
  }

  /**
   * Check if user is logged in (based on greeting visible)
   * @returns {Promise<boolean>}
   */
  async isUserLoggedIn() {
    return await this.isVisible(this.userGreeting);
  }

  /**
   * Logout by clicking logout button
   */
  async logout() {
    await this.click(this.logoutButton);
  }

  /**
   * Get dashboard title
   * @returns {Promise<string>}
   */
  async getDashboardTitle() {
    await this.waitForElement(this.dashboardTitle);
    return await this.getText(this.dashboardTitle);
  }

  /**
   * Check if page has loaded
   * @returns {Promise<boolean>}
   */
  async isPageLoaded() {
    return await this.isVisible(this.dashboardTitle);
  }
}

module.exports = HomePage;
