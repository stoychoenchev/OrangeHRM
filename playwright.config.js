// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['html', { open: 'never' }],
    ['allure-playwright'],
  ],

  use: {
    trace: 'retain-on-failure', // Collect trace only for failed tests
    screenshot: 'only-on-failure', // Take screenshots only when a test fails
    video: 'retain-on-failure',    // Record video only for failed tests
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        locale: 'en-US',
      },
    }
    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //     locale: 'en-US',
    //     firefoxUserPrefs: {
    //       'intl.accept_languages': 'en-US,en', // Set content language preference
    //     },
    //     launchOptions: {
    //       args: ['-lang', 'en-US'], // Force UI language
    //     },
    //   },
    // },
    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //     locale: 'en-US',
    //   },
    // },
  ],
});
