const { test, expect } = require('@playwright/test')
const { LoginPage } = require ('../pages/LoginPage');
const { AdminPage } = require('../pages/AdminPage');


test.beforeEach(async ({ page }) => {
    const Login = new LoginPage(page)
    await Login.navigateToPage();
    await Login.enterUsername();
    await Login.enterPassword();
    await Login.clickLoginButton();
    await expect(page).toHaveTitle('OrangeHRM')
})


test('Nav to Admin Page and Create New User', async ({ page }) => {
    
    const Admin = new AdminPage(page)
    await Admin.navigateToAdminPageAndAddUser();
    const successMessage = page.getByText('Success', { exact: true }); // Example success message locator
    await expect(successMessage).toBeVisible({ timeout: 100000});

})