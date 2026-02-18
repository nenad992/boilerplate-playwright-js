/**
 * BasePage - Base class for Page Object Model
 * Contains common methods that all page objects can inherit
 */
class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  /**
   * Navigate to a specific URL path
   * @param {string} path - URL path to navigate to
   */
  async navigateTo(path = '/') {
    await this.page.goto(path);
  }

  /**
   * Wait for page to load completely
   */
  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Click on an element
   * @param {string} selector - CSS selector
   */
  async click(selector) {
    await this.page.click(selector);
  }

  /**
   * Fill input field
   * @param {string} selector - CSS selector
   * @param {string} text - Text to enter
   */
  async fillText(selector, text) {
    await this.page.fill(selector, text);
  }

  /**
   * Get text content of element
   * @param {string} selector - CSS selector
   * @returns {Promise<string>}
   */
  async getText(selector) {
    return await this.page.textContent(selector);
  }

  /**
   * Check if element is visible
   * @param {string} selector - CSS selector
   * @returns {Promise<boolean>}
   */
  async isVisible(selector) {
    return await this.page.isVisible(selector);
  }

  /**
   * Wait for element to be visible
   * @param {string} selector - CSS selector
   * @param {number} timeout - Timeout in milliseconds
   */
  async waitForElement(selector, timeout = 5000) {
    await this.page.waitForSelector(selector, { timeout });
  }

  /**
   * Get all text content of elements matching selector
   * @param {string} selector - CSS selector
   * @returns {Promise<string[]>}
   */
  async getAllTexts(selector) {
    return await this.page.locator(selector).allTextContents();
  }

  /**
   * Select dropdown option
   * @param {string} selector - CSS selector of select element
   * @param {string} value - Option value to select
   */
  async selectOption(selector, value) {
    await this.page.selectOption(selector, value);
  }

  /**
   * Check checkbox
   * @param {string} selector - CSS selector of checkbox
   */
  async checkCheckbox(selector) {
    await this.page.check(selector);
  }

  /**
   * Uncheck checkbox
   * @param {string} selector - CSS selector of checkbox
   */
  async uncheckCheckbox(selector) {
    await this.page.uncheck(selector);
  }

  /**
   * Get page title
   * @returns {Promise<string>}
   */
  async getPageTitle() {
    return await this.page.title();
  }

  /**
   * Get current URL
   * @returns {string}
   */
  getCurrentUrl() {
    return this.page.url();
  }

  /**
   * Take screenshot
   * @param {string} name - Screenshot name
   */
  async takeScreenshot(name) {
    await this.page.screenshot({ path: `test-results/screenshots/${name}.png` });
  }

  /**
   * Close page
   */
  async close() {
    await this.page.close();
  }
}

module.exports = BasePage;
