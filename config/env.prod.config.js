/**
 * Production Environment Configuration
 */
module.exports = {
  baseUrl: 'https://example.com',
  apiUrl: 'https://example.com/api',
  extraHTTPHeaders: {
    'Accept-Language': 'en-US,en;q=0.9',
  },
  webServer: undefined,
  testTimeout: 50000,
  navigationWaitUntil: 'networkidle',
};
