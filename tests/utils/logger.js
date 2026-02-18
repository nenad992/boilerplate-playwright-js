/**
 * Logger - Utility for logging test execution
 * Provides colored console output for better visibility
 */

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

class Logger {
  /**
   * Log info message
   * @param {string} message
   */
  static info(message) {
    console.log(`${colors.blue}ℹ INFO${colors.reset} ${message}`);
  }

  /**
   * Log success message
   * @param {string} message
   */
  static success(message) {
    console.log(`${colors.green}✓ SUCCESS${colors.reset} ${message}`);
  }

  /**
   * Log warning message
   * @param {string} message
   */
  static warn(message) {
    console.log(`${colors.yellow}⚠ WARNING${colors.reset} ${message}`);
  }

  /**
   * Log error message
   * @param {string} message
   */
  static error(message) {
    console.log(`${colors.red}✗ ERROR${colors.reset} ${message}`);
  }

  /**
   * Log debug message
   * @param {string} message
   */
  static debug(message) {
    console.log(`${colors.cyan}◆ DEBUG${colors.reset} ${message}`);
  }

  /**
   * Log step message
   * @param {string} message
   */
  static step(message) {
    console.log(`${colors.bright}→ STEP${colors.reset} ${message}`);
  }
}

module.exports = Logger;
