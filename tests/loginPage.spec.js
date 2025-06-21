const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');

// Successful login test

test('Login with valid credentials should succeed', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigateToPage();
    await expect(page).toHaveTitle('OrangeHRM');
    await login.login(); // Assumes default valid credentials in login method
    // Assert that the Admin button is visible after login (user is on dashboard)
    const home = new HomePage(page);
    await expect(home.adminButton).toBeVisible();
});

// Negative/edge cases

test('Login with invalid username should fail', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigateToPage();
    await login.login('invalidUser', 'admin123');
    await expect(page.getByText('Invalid Credentials')).toBeVisible();
});

test('Login with invalid password should fail', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigateToPage();
    await login.login('Admin', 'wrongPassword');
    await expect(page.getByText('Invalid Credentials')).toBeVisible();
});

test('Login with empty username and password should fail', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigateToPage();
    await login.login('', '');
    await expect(page.locator('text=Required').first()).toBeVisible();
    await expect(page.locator('text=Required').last()).toBeVisible();
});

test('Login with empty username should fail', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigateToPage();
    await login.login('', 'admin123');
    await expect(page.getByText('Required')).toBeVisible();
});

test('Login with empty password should fail', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigateToPage();
    await login.login('Admin', '');
    await expect(page.getByText('Required')).toBeVisible();
});
