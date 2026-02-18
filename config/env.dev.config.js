/**
 * Development Environment Configuration
 */
module.exports = {
  baseUrl: 'https://practice.expandtesting.com',
  apiUrl: 'https://practice.expandtesting.com/api',
  extraHTTPHeaders: {
    'Accept-Language': 'en-US,en;q=0.9',
  },
  webServer: undefined,
  testTimeout: 30000,
  navigationWaitUntil: 'domcontentloaded',
};
