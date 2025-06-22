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
test('Verify that the profile picture is visible', async ({ page }) => {
    const home = new HomePage(page)
    await expect(home.profilePicture, "Check the visibility of the profile picture").toBeVisible();
})
test('Verify that the upgrade button is visible', async ({ page }) => {
    const home = new HomePage(page)
    await expect(home.upgradeButton, "Check the visibility of the upgrade button").toBeVisible();
})
test('Verify that the hide navigation button is visible', async ({ page }) => {
    const home = new HomePage(page)
    await expect(home.hideNavigationButton, "Check the visibility of the hide navigation button").toBeVisible();
})
test('Verify that the hide navigation button is clickable', async ({ page }) => {
    const home = new HomePage(page)
    await expect(home.hideNavigationButton, "Verify that hide navigation button is clickable").toBeEnabled();
})
test('Verify that the admin button is visible', async ({ page }) => {
    const home = new HomePage(page)
    await expect(home.adminButton, "Check the visibility of the admin button").toBeVisible();
})
test('Verify that the admin button is clickable', async ({ page }) => {
    const home = new HomePage(page)
    await expect(home.adminButton, "Verify that the admin button is clickable").toBeEnabled();
})
test('Verify that the pim button is visible', async ({ page }) => {
    const home = new HomePage(page)
    await expect(home.pimButton, "Check the visibility of the pim button").toBeVisible();
})
test('Verify that the pim button is clickable', async ({ page }) => {
    const home = new HomePage(page)
    await expect(home.pimButton, "Verify that the pim button is clickable").toBeEnabled();
})
test('Verify that the leave button is visible', async ({ page }) => {
    const home = new HomePage(page)
    await expect(home.leaveButton, "Check the visibility of the leave button").toBeVisible();
})
test('Verify that the leave button is clickable', async ({ page }) => {
    const home = new HomePage(page)
    await expect(home.leaveButton, "Verify that the leave button is clickable").toBeEnabled();
})
test('Verify that the time button is visible', async ({ page }) => {
    const home = new HomePage(page)
    await expect(home.timeButton, "Check the visibility of the time button").toBeVisible();
})
test('Verify that the time button is clickable', async ({ page }) => {
    const home = new HomePage(page)
    await expect(home.timeButton, "Verify that the time button is clickable").toBeEnabled();
})
test('Verify that the recruitment button is visible', async ({ page }) => {
    const home = new HomePage(page)
    await expect(home.recruitmentButton, "Check the visibility of the recruitment button").toBeVisible();
})
test('Verify that the recruitment button is clickable', async ({ page }) => {
    const home = new HomePage(page)
    await expect(home.recruitmentButton, "Verify that the recruitment button is clickable").toBeEnabled();
})
test('Verify that the myInfo button is visible', async ({ page }) => {
    const home = new HomePage(page)
    await expect(home.myInfoButton, "Check the visibility of the myInfo button").toBeVisible();
})
test('Verify that the myInfo button is clickable', async ({ page }) => {
    const home = new HomePage(page)
    await expect(home.myInfoButton, "Verify that the myInfo button is clickable").toBeEnabled();
})
test('Verify that the performance button is visible', async ({ page }) => {
    const home = new HomePage(page)
    await expect(home.performanceButton, "Check the visibility of the performance button").toBeVisible();
})
test('Verify that the performance button is clickable', async ({ page }) => {
    const home = new HomePage(page)
    await expect(home.performanceButton, "Verify that the performance button is clickable").toBeEnabled();
})
test('Verify that the dashboard button is visible', async ({ page }) => {
    const home = new HomePage(page)
    await expect(home.dashboardButton, "Check the visibility of the dashBoard button").toBeVisible();
})
test('Verify that the dashboard button is clickable', async ({ page }) => {
    const home = new HomePage(page)
    await expect(home.dashboardButton, "Verify that the Dashboard button is clickable").toBeEnabled();
})
test('Verify that the directory button is visible', async ({ page }) => {
    const home = new HomePage(page)
    await expect(home.directoryButton, "Check the visibility of the directory button").toBeVisible();
})
test('Verify that the directory button is clickable', async ({ page }) => {
    const home = new HomePage(page)
    await expect(home.directoryButton, "Verify that the directory button is clickable").toBeEnabled();
})
test('Verify that the maintenance button is visible', async ({ page }) => {
    const home = new HomePage(page)
    await expect(home.maintenanceButton, "Check the visibility of the maintenance button").toBeVisible();
})
test('Verify that the maintenance button is clickable', async ({ page }) => {
    const home = new HomePage(page)
    await expect(home.maintenanceButton, "Verify that the maintenance button is clickable").toBeEnabled();
})
test('Verify that the claim button is visible', async ({ page }) => {
    const home = new HomePage(page)
    await expect(home.claimButton, "Check the visibility of the claim button").toBeVisible();
})
test('Verify that the claim button is clickable', async ({ page }) => {
    const home = new HomePage(page)
    await expect(home.claimButton, "Verify that the claim button is clickable").toBeEnabled();
})
test('Verify that the buzz button is visible', async ({ page }) => {
    const home = new HomePage(page)
    await expect(home.buzzButton, "Check the visibility of the buzz button").toBeVisible();
})
test('Verify that the buzz button is clickable', async ({ page }) => {
    const home = new HomePage(page)
    await expect(home.buzzButton, "Verify that the buzz button is clickable").toBeEnabled();
})
test('Verify url after clicking on the Upgrade link in HomePage', async ({ page }) => {
    const home = new HomePage(page)
    await home.clickAndVerifyThatWeAreNavigatedToTheUpgradePage();
})
test('LogOut', async ({ page }) => {
    const home = new HomePage(page)
    await home.logout();
    await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
})
test('Click Support Menu Item', async ({ page }) => {
    const home = new HomePage(page)
    await home.clickSupportItem();
    await expect(page.locator('#app')).toContainText('Getting Started with OrangeHRM');
})
test('Search for employee', async ({ page }) => {
    const pim = new PimPage(page)
    await pim.searchForEmployee();
    await expect(page.getByText('Successfully Updated')).toBeVisible({ timeout: 10000});
})

test('Navigate to Buzz page and post whats on your mind.', async ({ page }) => {
    const home = new HomePage(page)
    await home.postInBlog();
    await expect(page.getByText('Testvam').first()).toBeVisible({ timeout: 5000});
})
