// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: 2,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['json', { outputFile: 'test-results/results.json' }],
    ['html', { open: 'never' }]
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  // use: {
  //   /* Base URL to use in actions like `await page.goto('/')`. */
  //   baseURL: 'https://orchestrator.id',
  //   extraHTTPHeaders: {
  //     // We set this header per GitHub guidelines.
  //     // 'Accept': 'application/vnd.github.v3+json',
  //     // Add authorization token to all requests.
  //     // Assuming personal access token available in the environment.
  //     'Authorization': `Bearer ${process.env.API_TOKEN}`,
  //     'X-Request-Id': '780a6751-97e2-4372-accb-bb3c60623bb8'
  //   },

  //   /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  //   trace: 'on-first-retry',
  // },

  use: {
    // All requests we send go to this API endpoint.
    baseURL: '',
    // headless: true,
    viewport: { width: 1366, height: 728 },
    actionTimeout: 15000,
    // disable for website
    // extraHTTPHeaders: {
    //   'Authorization': `token ${process.env.API_TOKEN}`,
    // },
    trace: 'on-first-retry',
    // video:'on',
    screenshot: 'on',
    testIdAttribute: 'autocomplete',
    // testIdAttribute: 'data-pw',
 },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

