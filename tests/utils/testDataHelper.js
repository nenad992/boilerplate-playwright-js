/**
 * Test Data Helper - Utility for managing test data
 * Provides common test data and data generators
 */

class TestDataHelper {
  /**
   * Get valid login credentials
   * @returns {object}
   */
  static getValidCredentials() {
    return {
      username: 'practice',
      password: 'SuperSecurePassword!',
    };
  }

  /**
   * Get invalid login credentials
   * @returns {object}
   */
  static getInvalidCredentials() {
    return {
      username: 'invalid_user',
      password: 'wrong_password',
    };
  }

  /**
   * Get empty credentials
   * @returns {object}
   */
  static getEmptyCredentials() {
    return {
      username: '',
      password: '',
    };
  }

  /**
   * Generate random email
   * @returns {string}
   */
  static generateRandomEmail() {
    const timestamp = Date.now();
    return `test_${timestamp}@example.com`;
  }

  /**
   * Generate random username
   * @returns {string}
   */
  static generateRandomUsername() {
    const timestamp = Date.now();
    return `user_${timestamp}`;
  }

  /**
   * Generate random string
   * @param {number} length
   * @returns {string}
   */
  static generateRandomString(length = 10) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  /**
   * Get test timeout
   * @returns {number}
   */
  static getTestTimeout() {
    return 30000;
  }

  /**
   * Get test data
   * @param {string} key
   * @returns {any}
   */
  static getTestData(key) {
    const testData = {
      validUser: {
        username: 'practice',
        password: 'SuperSecurePassword!',
        firstName: 'Practice',
        lastName: 'User',
      },
      testEmail: this.generateRandomEmail(),
      testUsername: this.generateRandomUsername(),
    };
    return testData[key];
  }
}

module.exports = TestDataHelper;
