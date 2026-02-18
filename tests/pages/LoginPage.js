/**
 * LoginPage - Page Object Model for Login Page
 * Handles all interactions and assertions for the login page
 */
const BasePage = require('./BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);

    // Define selectors for the login page
    this.usernameInput = '#name';
    this.passwordInput = '#password';
    this.rememberMeCheckbox = '#chkbxTwo';
    this.signInButton = 'button[type="submit"]';
    this.pageTitle = 'h1';
    this.errorMessage = '.alert.alert-danger';
  }

  /**
   * Navigate to login page
   */
  async goto() {
    await this.navigateTo('/login');
    await this.waitForPageLoad();
  }

  /**
   * Perform login with username and password
   * @param {string} username
   * @param {string} password
   * @param {boolean} rememberMe
   */
  async login(username, password, rememberMe = false) {
    await this.fillText(this.usernameInput, username);
    await this.fillText(this.passwordInput, password);

    if (rememberMe) {
      await this.checkCheckbox(this.rememberMeCheckbox);
    }

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
   * Get page title
   * @returns {Promise<string>}
   */
  async getPageTitle() {
    return await this.getText(this.pageTitle);
  }
}

module.exports = LoginPage;
