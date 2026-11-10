
import { defineConfig, devices } from '@playwright/test';

/**
 * ==========================================
 * ORIGINAL PLAYWRIGHT CONFIGURATION
 * ==========================================
 *
 * Original dotenv setup preserved:
 *
 * import dotenv from 'dotenv';
 * import path from 'path';
 * dotenv.config({ path: path.resolve(__dirname, '.env') });
 *
 * We'll enable this when we introduce environment
 * variables such as application URLs and credentials.
 *
 */

export default defineConfig({

  // ==========================================
  // TEST DIRECTORY
  // ==========================================

  // Original: testDir: './test',
  // Updated: We use the conventional "tests" folder.
  testDir: './test',

  // ==========================================
  // EXECUTION SETTINGS
  // ==========================================

  /* Original: Run tests in files in parallel */
  fullyParallel: true,

  /* Original: Fail the build on CI if test.only is present */
  forbidOnly: !!process.env.CI,

  /* Original: Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Original: Opt out of parallel tests on CI */
  workers: process.env.CI ? 1 : undefined,

  // ==========================================
  // REPORTING
  // ==========================================

  /* Original: reporter: 'html' */
  reporter: 'html',

  // ==========================================
  // SHARED BROWSER SETTINGS
  // ==========================================

  use: {
    /*
     * Original:
     * trace: 'on-first-retry'
     *
     * Updated:
     * Retain traces when a test fails.
     */
    trace: 'retain-on-failure',

    // Added: Save screenshots only when a test fails.
    screenshot: 'only-on-failure',

    /*
     * Original baseURL setting preserved:
     *
     * baseURL: 'http://localhost:3000',
     *
     * We'll configure this when connecting Mifos.
     */
  },

  // ==========================================
  // BROWSER PROJECTS
  // ==========================================

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    /*
     * Original Firefox configuration preserved:
     *
     * {
     *   name: 'firefox',
     *   use: { ...devices['Desktop Firefox'] },
     * },
     *
     * We'll enable it when we expand cross-browser coverage.
     */

    /*
     * Original WebKit configuration preserved:
     *
     * {
     *   name: 'webkit',
     *   use: { ...devices['Desktop Safari'] },
     * },
     */

    /*
     * Original mobile configurations preserved:
     *
     * {
     *   name: 'Mobile Chrome',
     *   use: { ...devices['Pixel 5'] },
     * },
     *
     * {
     *   name: 'Mobile Safari',
     *   use: { ...devices['iPhone 12'] },
     * },
     */

    /*
     * Original branded browser configurations preserved:
     *
     * Microsoft Edge:
     * { ...devices['Desktop Edge'], channel: 'msedge' }
     *
     * Google Chrome:
     * { ...devices['Desktop Chrome'], channel: 'chrome' }
     */
  ],

  // ==========================================
  // WEB SERVER
  // ==========================================

  /*
   * Original webServer configuration preserved:
   *
   * webServer: {
   *   command: 'npm run start',
   *   url: 'http://localhost:3000',
   *   reuseExistingServer: !process.env.CI,
   * },
   *
   * Not needed while testing an externally hosted application.
   */

});
