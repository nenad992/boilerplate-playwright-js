/**
 * API Helper - Utility for making API requests
 * Used for setting up test data, authentication, etc.
 */
const { request } = require('@playwright/test');

class APIHelper {
  /**
   * Create API request context
   * @param {string} baseURL
   * @returns {Promise<object>}
   */
  static async createContext(baseURL = '') {
    const apiContext = await request.newContext({
      baseURL,
      extraHTTPHeaders: {
        'Content-Type': 'application/json',
      },
    });
    return apiContext;
  }

  /**
   * Make GET request
   * @param {object} context - API context
   * @param {string} endpoint
   * @param {object} options - Request options
   * @returns {Promise<object>}
   */
  static async get(context, endpoint, options = {}) {
    const response = await context.get(endpoint, options);
    return await response.json();
  }

  /**
   * Make POST request
   * @param {object} context - API context
   * @param {string} endpoint
   * @param {object} data - Request body
   * @param {object} options - Request options
   * @returns {Promise<object>}
   */
  static async post(context, endpoint, data = {}, options = {}) {
    const response = await context.post(endpoint, {
      data,
      ...options,
    });
    return await response.json();
  }

  /**
   * Make PUT request
   * @param {object} context - API context
   * @param {string} endpoint
   * @param {object} data - Request body
   * @param {object} options - Request options
   * @returns {Promise<object>}
   */
  static async put(context, endpoint, data = {}, options = {}) {
    const response = await context.put(endpoint, {
      data,
      ...options,
    });
    return await response.json();
  }

  /**
   * Make DELETE request
   * @param {object} context - API context
   * @param {string} endpoint
   * @param {object} options - Request options
   * @returns {Promise<object>}
   */
  static async delete(context, endpoint, options = {}) {
    const response = await context.delete(endpoint, options);
    return await response.json();
  }
}

module.exports = APIHelper;
