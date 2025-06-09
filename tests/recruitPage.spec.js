const { test, expect } = require('@playwright/test');
const { LoginPage } = require ('../pages/LoginPage');
const { AdminPage } = require('../pages/AdminPage');
const { HomePage } = require('../pages/HomePage');
const { RecruitPage } = require('../pages/RecruitPage');
const { PimPage } = require('../pages/PimPage');

test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page)
    await login.navigateToPage();
   // await page.waitForTimeout(5000); //Wait for all elements to load.
   // await expect(login.login_button, "Check if login button is visible").toBeVisible({ timeout: 5000 });
    await expect(page).toHaveTitle('OrangeHRM');
    await login.login();
})
test('Navigate to Recruitment Page', async ({ page }) => {
    const recruitment = new RecruitPage(page);
    await recruitment.navigateToRecruitmentPage();
    await expect(page.getByRole('heading', { name: 'Recruitment' })).toBeVisible();
})
test('Verify that we are able to add new Recruit', async ({ page }) => {
    const recruitment = new RecruitPage(page);
    await recruitment.navigateToRecruitmentPage();
    await recruitment.addRecruitment();
    const successMessage = page.getByText('Success', { exact: true }); // Example success message locator
    await expect(successMessage).toBeVisible({ timeout: 100000});
})