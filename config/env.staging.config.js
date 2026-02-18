/**
 * Staging Environment Configuration
 */
module.exports = {
  baseUrl: 'https://staging.example.com',
  apiUrl: 'https://staging.example.com/api',
  extraHTTPHeaders: {
    'Accept-Language': 'en-US,en;q=0.9',
  },
  webServer: undefined,
  testTimeout: 40000,
  navigationWaitUntil: 'networkidle',
};
