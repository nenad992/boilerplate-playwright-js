/**
 * Production Environment Configuration
 */
module.exports = {
  baseUrl: 'https://www.saucedemo.com',
  apiUrl: '',
  extraHTTPHeaders: {
    'Accept-Language': 'en-US,en;q=0.9',
  },
  webServer: undefined,
  testTimeout: 50000,
  navigationWaitUntil: 'networkidle',
};
