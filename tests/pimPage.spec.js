const { test, expect } = require('@playwright/test');
const { LoginPage } = require ('../pages/LoginPage');
const { PimPage } = require('../pages/PimPage');

test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page)
    await login.navigateToPage();
    await expect(page).toHaveTitle('OrangeHRM');
    await login.login();
})


test('Verify that we are navigated to pim page and successfully adding an employee', async ({ page }) => {
    const pim = new PimPage(page)
    await pim.navigateToPimPage();
    await expect(pim.pimTextAssertion).toHaveText("PIM");
    await pim.PimPageAddEmployee();
    const successMessage = page.getByText('Success', { exact: true }); // Example success message locator
    await expect(successMessage).toBeVisible({ timeout: 100000});
})

test('Verify that the search functionality in PimPage is working as expected', async ({ page }) => {
    const pim = new PimPage(page)
    const assertionOfSearch = await pim.searchForUserRole();
})