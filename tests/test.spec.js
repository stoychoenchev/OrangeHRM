// const { test, expect } = require('@playwright/test');
// const { LoginPage } = require ('../pages/LoginPage');
// const { AdminPage } = require('../pages/AdminPage');
// const { HomePage } = require('../pages/HomePage');
// const { RecruitPage } = require('../pages/RecruitPage');
// const { PimPage } = require('../pages/PimPage');

// test.beforeEach(async ({ page }) => {
//     const login = new LoginPage(page)
//     await login.navigateToPage();
//    // await page.waitForTimeout(5000); //Wait for all elements to load.
//    // await expect(login.login_button, "Check if login button is visible").toBeVisible({ timeout: 5000 });
//     await expect(page).toHaveTitle('OrangeHRM');
//     await login.login();
// })
// test('Verify that the profile picture is visible', async ({ page }) => {
//     const home = new HomePage(page)
//     await expect(home.profilePicture, "Check the visibility of the profile picture").toBeVisible();
// })
// test('Verify that the upgrade button is visible', async ({ page }) => {
//     const home = new HomePage(page)
//     await expect(home.upgradeButton, "Check the visibility of the upgrade button").toBeVisible();
// })
// test('Verify that the hide navigation button is visible', async ({ page }) => {
//     const home = new HomePage(page)
//     await expect(home.hideNavigationButton, "Check the visibility of the hide navigation button").toBeVisible();
// })
// test('Verify that the hide navigation button is clickable', async ({ page }) => {
//     const home = new HomePage(page)
//     await expect(home.hideNavigationButton, "Verify that hide navigation button is clickable").toBeEnabled();
// })
// test('Verify that the admin button is visible', async ({ page }) => {
//     const home = new HomePage(page)
//     await expect(home.adminButton, "Check the visibility of the admin button").toBeVisible();
// })
// test('Verify that the admin button is clickable', async ({ page }) => {
//     const home = new HomePage(page)
//     await expect(home.adminButton, "Verify that the admin button is clickable").toBeEnabled();
// })
// test('Verify that the pim button is visible', async ({ page }) => {
//     const home = new HomePage(page)
//     await expect(home.pimButton, "Check the visibility of the pim button").toBeVisible();
// })
// test('Verify that the pim button is clickable', async ({ page }) => {
//     const home = new HomePage(page)
//     await expect(home.pimButton, "Verify that the pim button is clickable").toBeEnabled();
// })
// test('Verify that the leave button is visible', async ({ page }) => {
//     const home = new HomePage(page)
//     await expect(home.leaveButton, "Check the visibility of the leave button").toBeVisible();
// })
// test('Verify that the leave button is clickable', async ({ page }) => {
//     const home = new HomePage(page)
//     await expect(home.leaveButton, "Verify that the leave button is clickable").toBeEnabled();
// })
// test('Verify that the time button is visible', async ({ page }) => {
//     const home = new HomePage(page)
//     await expect(home.timeButton, "Check the visibility of the time button").toBeVisible();
// })
// test('Verify that the time button is clickable', async ({ page }) => {
//     const home = new HomePage(page)
//     await expect(home.timeButton, "Verify that the time button is clickable").toBeEnabled();
// })
// test('Verify that the recruitment button is visible', async ({ page }) => {
//     const home = new HomePage(page)
//     await expect(home.recruitmentButton, "Check the visibility of the recruitment button").toBeVisible();
// })
// test('Verify that the recruitment button is clickable', async ({ page }) => {
//     const home = new HomePage(page)
//     await expect(home.recruitmentButton, "Verify that the recruitment button is clickable").toBeEnabled();
// })
// test('Verify that the myInfo button is visible', async ({ page }) => {
//     const home = new HomePage(page)
//     await expect(home.myInfoButton, "Check the visibility of the myInfo button").toBeVisible();
// })
// test('Verify that the myInfo button is clickable', async ({ page }) => {
//     const home = new HomePage(page)
//     await expect(home.myInfoButton, "Verify that the myInfo button is clickable").toBeEnabled();
// })
// test('Verify that the performance button is visible', async ({ page }) => {
//     const home = new HomePage(page)
//     await expect(home.performanceButton, "Check the visibility of the performance button").toBeVisible();
// })
// test('Verify that the performance button is clickable', async ({ page }) => {
//     const home = new HomePage(page)
//     await expect(home.performanceButton, "Verify that the performance button is clickable").toBeEnabled();
// })
// test('Verify that the dashboard button is visible', async ({ page }) => {
//     const home = new HomePage(page)
//     await expect(home.dashboardButton, "Check the visibility of the dashBoard button").toBeVisible();
// })
// test('Verify that the dashboard button is clickable', async ({ page }) => {
//     const home = new HomePage(page)
//     await expect(home.dashboardButton, "Verify that the Dashboard button is clickable").toBeEnabled();
// })
// test('Verify that the directory button is visible', async ({ page }) => {
//     const home = new HomePage(page)
//     await expect(home.directoryButton, "Check the visibility of the directory button").toBeVisible();
// })
// test('Verify that the directory button is clickable', async ({ page }) => {
//     const home = new HomePage(page)
//     await expect(home.directoryButton, "Verify that the directory button is clickable").toBeEnabled();
// })
// test('Verify that the maintenance button is visible', async ({ page }) => {
//     const home = new HomePage(page)
//     await expect(home.maintenanceButton, "Check the visibility of the maintenance button").toBeVisible();
// })
// test('Verify that the maintenance button is clickable', async ({ page }) => {
//     const home = new HomePage(page)
//     await expect(home.maintenanceButton, "Verify that the maintenance button is clickable").toBeEnabled();
// })
// test('Verify that the claim button is visible', async ({ page }) => {
//     const home = new HomePage(page)
//     await expect(home.claimButton, "Check the visibility of the claim button").toBeVisible();
// })
// test('Verify that the claim button is clickable', async ({ page }) => {
//     const home = new HomePage(page)
//     await expect(home.claimButton, "Verify that the claim button is clickable").toBeEnabled();
// })
// test('Verify that the buzz button is visible', async ({ page }) => {
//     const home = new HomePage(page)
//     await expect(home.buzzButton, "Check the visibility of the buzz button").toBeVisible();
// })
// test('Verify that the buzz button is clickable', async ({ page }) => {
//     const home = new HomePage(page)
//     await expect(home.buzzButton, "Verify that the buzz button is clickable").toBeEnabled();
// })
// test('Verify that we are navigated to Admin Page', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await page.waitForLoadState('networkidle'); 
//     await expect(admin.adminPageText).toBeVisible();
// })
// test('Verify that we are navigated to admin page and successfully adding new user.', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.adminPageAddUser();
//     const successMessage = page.getByText('Success', { exact: true }); // Example success message locator
//     await expect(successMessage).toBeVisible({ timeout: 100000});
// })
// test('Verify that we are able to search in Admin Page', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.searchForUserRole();
//     await expect(page.getByRole('table')).toContainText('Admin', { timeout: 5000 });
// })
// test('Verify url after clicking on the Upgrade link in HomePage', async ({ page }) => {
//     const home = new HomePage(page)
//     await home.clickAndVerifyThatWeAreNavigatedToTheUpgradePage();
// })
// test('LogOut', async ({ page }) => {
//     const home = new HomePage(page)
//     await home.logout();
//     await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
// })
// test('Click Support Menu Item', async ({ page }) => {
//     const home = new HomePage(page)
//     await home.clickSupportItem();
//     await expect(page.locator('#app')).toContainText('Getting Started with OrangeHRM');
// })
// test('Search for employee', async ({ page }) => {
//     const home = new HomePage(page)
//     await home.searchForEmployee();
//     await expect(page.getByText('Successfully Updated')).toBeVisible({ timeout: 10000});
// })
// test('Navigate to Recruitment Page', async ({ page }) => {
//     const recruitment = new RecruitPage(page);
//     await recruitment.navigateToRecruitmentPage();
//     await expect(page.getByRole('heading', { name: 'Recruitment' })).toBeVisible();
// })
// test('Verify that we are able to add new Recruit', async ({ page }) => {
//     const recruitment = new RecruitPage(page);
//     await recruitment.navigateToRecruitmentPage();
//     await recruitment.addRecruitment();
//     const successMessage = page.getByText('Success', { exact: true }); // Example success message locator
//     await expect(successMessage).toBeVisible({ timeout: 100000});
// })
// test('Navigate to Buzz page and post whats on your mind.', async ({ page }) => {
//     const home = new HomePage(page)
//     await home.postInBlog();
//     await expect(page.getByText('Testvam').first()).toBeVisible({ timeout: 5000});
// })
// test('Verify that the User Management button is visible in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await expect(admin.userManagementButton).toBeVisible();
// })
// test('Verify that the User Management button is clickable in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await expect(admin.userManagementButton).toBeEnabled();
// })
// test('Verify that the User Management list item 1 is visible in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.userManagementButton.click();
//     await expect(admin.userManagementButtonListedItem1).toBeVisible();
// })
// test('Verify that the User Management list item 1 is clickable in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.userManagementButton.click();
//     await expect(admin.userManagementButtonListedItem1).toBeEnabled();
// })
// test('Verify that the Job button is visible in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await expect(admin.jobButton).toBeVisible();
// })
// test('Verify that the Job button is clickable in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await expect(admin.jobButton).toBeEnabled();
// })
// test('Verify that the Job list item 1 is visible in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.jobButton.click();
//     await expect(admin.jobButtonListedItem1).toBeVisible();
// })
// test('Verify that the Job list item 2 is visible in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.jobButton.click();
//     await expect(admin.jobButtonListedItem2).toBeVisible();
// })
// test('Verify that the Job list item 3 is visible in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.jobButton.click();
//     await expect(admin.jobButtonListedItem3).toBeVisible();
// })
// test('Verify that the Job list item 4 is visible in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.jobButton.click();
//     await expect(admin.jobButtonListedItem4).toBeVisible();
// })
// test('Verify that the Job list item 5 is visible in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.jobButton.click();
//     await expect(admin.jobButtonListedItem5).toBeVisible();
// })
// test('Verify that the Job list item 1 is clickable in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.jobButton.click();
//     await expect(admin.jobButtonListedItem1).toBeEnabled();
// })
// test('Verify that the Job list item 2 is clickable in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.jobButton.click();
//     await expect(admin.jobButtonListedItem2).toBeEnabled();
// })
// test('Verify that the Job list item 3 is clickable in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.jobButton.click();
//     await expect(admin.jobButtonListedItem3).toBeEnabled();
// })
// test('Verify that the Job list item 4 is clickable in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.jobButton.click();
//     await expect(admin.jobButtonListedItem4).toBeEnabled();
// })
// test('Verify that the Job list item 5 is clickable in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.jobButton.click();
//     await expect(admin.jobButtonListedItem5).toBeEnabled();
// })
// test('Verify that the Organization button is visible in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await expect(admin.organizationButton).toBeVisible();
// })
// test('Verify that the Organization button is clickable in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await expect(admin.organizationButton).toBeEnabled();
// })
// test('Verify that the Organization list item 1 is visible in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.organizationButton.click();
//     await expect(admin.organizationButtonListedItem1).toBeVisible();
// })
// test('Verify that the Organization list item 2 is visible in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.organizationButton.click();
//     await expect(admin.organizationButtonListedItem2).toBeVisible();
// })
// test('Verify that the Organization list item 3 is visible in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.organizationButton.click();
//     await expect(admin.organizationButtonListedItem3).toBeVisible();
// })
// test('Verify that the Organization list item 1 is clickable in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.organizationButton.click();
//     await expect(admin.organizationButtonListedItem1).toBeEnabled();
// })
// test('Verify that the Organization list item 2 is clickable in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.organizationButton.click();
//     await expect(admin.organizationButtonListedItem2).toBeEnabled();
// })
// test('Verify that the Organization list item 3 is clickable in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.organizationButton.click();
//     await expect(admin.organizationButtonListedItem3).toBeEnabled();
// })
// test('Verify that the Qualifactions button is visible in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await expect(admin.qualificationsButton).toBeVisible();
// })
// test('Verify that the Qualifactions button is clickable in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await expect(admin.qualificationsButton).toBeEnabled();
// })
// test('Verify that the Qualifications list item 1 is visible in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.qualificationsButton.click();
//     await expect(admin.qualificationsButtonListedItem1).toBeVisible();
// })
// test('Verify that the Qualifications list item 2 is visible in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.qualificationsButton.click();
//     await expect(admin.qualificationsButtonListedItem2).toBeVisible();
// })
// test('Verify that the Qualifications list item 3 is visible in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.qualificationsButton.click();
//     await expect(admin.qualificationsButtonListedItem3).toBeVisible();
// })
// test('Verify that the Qualifications list item 4 is visible in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.qualificationsButton.click();
//     await expect(admin.qualificationsButtonListedItem4).toBeVisible();
// })
// test('Verify that the Qualifications list item 5 is visible in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.qualificationsButton.click();
//     await expect(admin.qualificationsButtonListedItem5).toBeVisible();
// })
// test('Verify that the Qualifications list item 1 is clickable in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.qualificationsButton.click();
//     await expect(admin.qualificationsButtonListedItem1).toBeEnabled();
// })
// test('Verify that the Qualifications list item 2 is clickable in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.qualificationsButton.click();
//     await expect(admin.qualificationsButtonListedItem2).toBeEnabled();
// })
// test('Verify that the Qualifications list item 3 is clickable in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.qualificationsButton.click();
//     await expect(admin.qualificationsButtonListedItem3).toBeEnabled();
// })
// test('Verify that the Qualifications list item 4 is clickable in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.qualificationsButton.click();
//     await expect(admin.qualificationsButtonListedItem4).toBeEnabled();
// })
// test('Verify that the Qualifications list item 5 is clickable in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.qualificationsButton.click();
//     await expect(admin.qualificationsButtonListedItem5).toBeEnabled();
// })
// test('Verify that the Nationalities button is visible in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await expect(admin.nationalitiesButton).toBeVisible();
// })
// test('Verify that the Nationalities button is clickable in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await expect(admin.nationalitiesButton).toBeEnabled();
// })
// test('Verify that the Corporate Branding button is visible in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await expect(admin.corporateBrandingButton).toBeVisible();
// })
// test('Verify that the Corporate Branding button is clickable in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await expect(admin.corporateBrandingButton).toBeEnabled();
// })
// test('Verify that the Configuration Branding button is visible in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await expect(admin.configurationButton).toBeVisible();
// })
// test('Verify that the Configuration Branding button is clickable in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await expect(admin.configurationButton).toBeEnabled();
// })
// test('Verify that the Configuration list item 1 is visible in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.configurationButton.click();
//     await expect(admin.configurationButtonListedItem1).toBeVisible();
// })
// test('Verify that the Configuration list item 2 is visible in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.configurationButton.click();
//     await expect(admin.configurationButtonListedItem2).toBeVisible();
// })
// test('Verify that the Configuration list item 3 is visible in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.configurationButton.click();
//     await expect(admin.configurationButtonListedItem3).toBeVisible();
// })
// test('Verify that the Configuration list item 4 is visible in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.configurationButton.click();
//     await expect(admin.configurationButtonListedItem4).toBeVisible();
// })
// test('Verify that the Configuration list item 5 is visible in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.configurationButton.click();
//     await expect(admin.configurationButtonListedItem5).toBeVisible();
// })
// test('Verify that the Configuration list item 6 is visible in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.configurationButton.click();
//     await expect(admin.configurationButtonListedItem6).toBeVisible();
// })
// test('Verify that the Configuration list item 7 is visible in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.configurationButton.click();
//     await expect(admin.configurationButtonListedItem7).toBeVisible();
// })
// test('Verify that the Configuration list item 8 is visible in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.configurationButton.click();
//     await expect(admin.configurationButtonListedItem8).toBeVisible();
// })
// test('Verify that the Configuration list item 1 is clickable in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.configurationButton.click();
//     await expect(admin.configurationButtonListedItem1).toBeEnabled();
// })
// test('Verify that the Configuration list item 2 is clickable in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.configurationButton.click();
//     await expect(admin.configurationButtonListedItem2).toBeEnabled();
// })
// test('Verify that the Configuration list item 3 is clickable in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.configurationButton.click();
//     await expect(admin.configurationButtonListedItem3).toBeEnabled();
// })
// test('Verify that the Configuration list item 4 is clickable in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.configurationButton.click();
//     await expect(admin.configurationButtonListedItem4).toBeEnabled();
// })
// test('Verify that the Configuration list item 5 is clickable in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.configurationButton.click();
//     await expect(admin.configurationButtonListedItem5).toBeEnabled();
// })
// test('Verify that the Configuration list item 6 is clickable in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.configurationButton.click();
//     await expect(admin.configurationButtonListedItem6).toBeEnabled();
// })
// test('Verify that the Configuration list item 7 is clickable in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.configurationButton.click();
//     await expect(admin.configurationButtonListedItem7).toBeEnabled();
// })
// test('Verify that the Configuration list item 8 is clickable in AdminPage', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.configurationButton.click();
//     await expect(admin.configurationButtonListedItem8).toBeEnabled();
// })
// test('Get all records and their counts and compare with the number in () Records Found', async ({ page }) => {
//     const admin = new AdminPage(page)
//     await admin.navigateToAdminPage();
//     await admin.getRecordsAndCompareNumber();
// })

// test('Verify that we are navigated to pim page and successfully adding an employee', async ({ page }) => {
//     const pim = new PimPage(page)
//     await pim.navigateToPimPage();
//     await expect(pim.pimTextAssertion).toHaveText("PIM");
//     await pim.PimPageAddEmployee();
//     const successMessage = page.getByText('Success', { exact: true }); // Example success message locator
//     await expect(successMessage).toBeVisible({ timeout: 100000});
// })

// test('Verify that the search functionality in PimPage is working as expected', async ({ page }) => {
//     const pim = new PimPage(page)
//     const assertionOfSearch = await pim.searchForUserRole();
// })