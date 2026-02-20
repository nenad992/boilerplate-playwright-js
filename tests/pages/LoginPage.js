/**
 * LoginPage - Page Object Model for Login Page
 * Handles all interactions and assertions for the login page
 * Adapted for Saucedemo
 */
const BasePage = require('./BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);

    // Define selectors for the login page (Saucedemo)
    this.usernameInput = '#user-name';
    this.passwordInput = '#password';
    this.signInButton = '#login-button';
    this.errorMessage = '[data-test="error"]';
  }

  /**
   * Navigate to login page
   */
  async goto() {
    await this.navigateTo('/');
    await this.waitForPageLoad();
  }

  /**
   * Perform login with username and password
   * @param {string} username
   * @param {string} password
   */
  async login(username, password) {
    await this.fillText(this.usernameInput, username);
    await this.fillText(this.passwordInput, password);
    await this.click(this.signInButton);
  }

  /**
   * Get error message text
   * @returns {Promise<string>}
   */
  async getErrorMessage() {
    await this.waitForElement(this.errorMessage);
    return await this.getText(this.errorMessage);
  }

  /**
   * Check if error message is visible
   * @returns {Promise<boolean>}
   */
  async isErrorMessageVisible() {
    return await this.isVisible(this.errorMessage);
  }

  /**
   * Get login page title (Saucedemo specific)
   * @returns {Promise<string>}
   */
  async getLoginPageTitle() {
    return 'Swag Labs';
  }
}

module.exports = LoginPage;
