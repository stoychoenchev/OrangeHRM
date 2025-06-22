# OrangeHRM Test Automation Framework

## Overview

This project is a robust, maintainable, and scalable end-to-end test automation framework for OrangeHRM, built using JavaScript and Playwright.

## Features

- **Page Object Model (POM):** All page interactions are encapsulated in page classes for maintainability and reusability.
- **Robust Selectors:** Uses role-based and text-based selectors for stability against UI changes.
- **Comprehensive Test Coverage:** Includes UI, functional, and data validation tests for Admin, PIM, and other modules.
- **Unique Test Data:** Generates unique data for each run to avoid conflicts and ensure test independence.
- **Parallel Execution:** Supports parallel test runs for faster feedback.
- **CI/CD Ready:** Easily integrates with GitHub Actions or other CI tools.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```sh
npm install
```

### Running Tests

Run all tests:

```sh
npx playwright test
```

Run a specific test file:

```sh
npx playwright test tests/adminPage.spec.js
```

### Project Structure

- `pages/` — Page Object Model classes (e.g., `AdminPage.js`, `PimPage.js`)
- `tests/` — Playwright test files
- `.github/workflows/` — CI/CD configuration (GitHub Actions)
- `README.md` — Project documentation

## Best Practices

- Use async/await for all Playwright actions.
- Keep selectors robust and descriptive.
- Encapsulate all page logic in POM classes.
- Use unique data for user creation and updates.
- Assert both UI state and business logic (e.g., record counts).
- Review and update selectors if UI changes.

## Advanced Usage

- **Parallelization:** Playwright runs tests in parallel by default. Configure in `playwright.config.js`.
- **Reporting:** Generate HTML reports with `npx playwright show-report` after a run.
- **Screenshots & Videos on Failure:**
  - Configure in `playwright.config.js`:
    ```js
    use: {
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
      trace: 'retain-on-failure',
    }
    ```
  - Artifacts are saved in the test results folder and viewable in the HTML report.
- **Debugging:** Use `npx playwright test --debug` for interactive debugging.
- **Custom Utilities:** Add helpers in a `utils/` folder for reusable logic (e.g., pagination, data generation).

## Contributing

1. Fork the repo and create your feature branch (`git checkout -b feature/your-feature`)
2. Commit your changes (`git commit -am 'Add new feature'`)
3. Push to the branch (`git push origin feature/your-feature`)
4. Open a Pull Request
