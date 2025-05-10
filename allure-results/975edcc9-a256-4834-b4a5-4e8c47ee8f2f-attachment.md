# Test info

- Name: Navigate to Recruitment Page
- Location: D:\Automation\OrangeHRM\tests\test.spec.js:165:1

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: getByRole('heading', { name: 'Recruitment' })
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Recruitment' })

    at D:\Automation\OrangeHRM\tests\test.spec.js:168:70
```

# Page snapshot

```yaml
- img "company-branding"
- heading "Login" [level=5]
- paragraph: "Username : Admin"
- paragraph: "Password : admin123"
- text:  Username
- textbox "Username"
- text:  Password
- textbox "Password"
- button "Login"
- paragraph: Forgot your password?
- link:
  - /url: https://www.linkedin.com/company/orangehrm/mycompany/
- link:
  - /url: https://www.facebook.com/OrangeHRM/
- link:
  - /url: https://twitter.com/orangehrm?lang=en
- link:
  - /url: https://www.youtube.com/c/OrangeHRMInc
- paragraph: OrangeHRM OS 5.7
- paragraph:
  - text: © 2005 - 2025
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
- img "orangehrm-logo"
```

# Test source

```ts
   68 | test('Verify that the recruitment button is clickable', async ({ page }) => {
   69 |     const home = new HomePage(page)
   70 |     await expect(home.recruitmentButton, "Verify that the recruitment button is clickable").toBeEnabled();
   71 | })
   72 | test('Verify that the myInfo button is visible', async ({ page }) => {
   73 |     const home = new HomePage(page)
   74 |     await expect(home.myInfoButton, "Check the visibility of the myInfo button").toBeVisible();
   75 | })
   76 | test('Verify that the myInfo button is clickable', async ({ page }) => {
   77 |     const home = new HomePage(page)
   78 |     await expect(home.myInfoButton, "Verify that the myInfo button is clickable").toBeEnabled();
   79 | })
   80 | test('Verify that the performance button is visible', async ({ page }) => {
   81 |     const home = new HomePage(page)
   82 |     await expect(home.performanceButton, "Check the visibility of the performance button").toBeVisible();
   83 | })
   84 | test('Verify that the performance button is clickable', async ({ page }) => {
   85 |     const home = new HomePage(page)
   86 |     await expect(home.performanceButton, "Verify that the performance button is clickable").toBeEnabled();
   87 | })
   88 | test('Verify that the dashboard button is visible', async ({ page }) => {
   89 |     const home = new HomePage(page)
   90 |     await expect(home.dashboardButton, "Check the visibility of the dashBoard button").toBeVisible();
   91 | })
   92 | test('Verify that the dashboard button is clickable', async ({ page }) => {
   93 |     const home = new HomePage(page)
   94 |     await expect(home.dashboardButton, "Verify that the Dashboard button is clickable").toBeEnabled();
   95 | })
   96 | test('Verify that the directory button is visible', async ({ page }) => {
   97 |     const home = new HomePage(page)
   98 |     await expect(home.directoryButton, "Check the visibility of the directory button").toBeVisible();
   99 | })
  100 | test('Verify that the directory button is clickable', async ({ page }) => {
  101 |     const home = new HomePage(page)
  102 |     await expect(home.directoryButton, "Verify that the directory button is clickable").toBeEnabled();
  103 | })
  104 | test('Verify that the maintenance button is visible', async ({ page }) => {
  105 |     const home = new HomePage(page)
  106 |     await expect(home.maintenanceButton, "Check the visibility of the maintenance button").toBeVisible();
  107 | })
  108 | test('Verify that the maintenance button is clickable', async ({ page }) => {
  109 |     const home = new HomePage(page)
  110 |     await expect(home.maintenanceButton, "Verify that the maintenance button is clickable").toBeEnabled();
  111 | })
  112 | test('Verify that the claim button is visible', async ({ page }) => {
  113 |     const home = new HomePage(page)
  114 |     await expect(home.claimButton, "Check the visibility of the claim button").toBeVisible();
  115 | })
  116 | test('Verify that the claim button is clickable', async ({ page }) => {
  117 |     const home = new HomePage(page)
  118 |     await expect(home.claimButton, "Verify that the claim button is clickable").toBeEnabled();
  119 | })
  120 | test('Verify that the buzz button is visible', async ({ page }) => {
  121 |     const home = new HomePage(page)
  122 |     await expect(home.buzzButton, "Check the visibility of the buzz button").toBeVisible();
  123 | })
  124 | test('Verify that the buzz button is clickable', async ({ page }) => {
  125 |     const home = new HomePage(page)
  126 |     await expect(home.buzzButton, "Verify that the buzz button is clickable").toBeEnabled();
  127 | })
  128 | test('Verify that we are navigated to Admin Page', async ({ page }) => {
  129 |     const admin = new AdminPage(page)
  130 |     await admin.navigateToAdminPage();
  131 |     await expect(admin.adminPageText).toBeVisible();
  132 | })
  133 | test('Verify that we are navigated to admin page and successfully adding new user.', async ({ page }) => {
  134 |     const admin = new AdminPage(page)
  135 |     await admin.navigateToAdminPage();
  136 |     await admin.adminPageAddUser();
  137 |     const successMessage = page.getByText('Success', { exact: true }); // Example success message locator
  138 |     await expect(successMessage).toBeVisible({ timeout: 100000});
  139 | })
  140 | test('Verify that we are able to search in Admin Page', async ({ page }) => {
  141 |     const admin = new AdminPage(page)
  142 |     await admin.navigateToAdminPage();
  143 |     await admin.searchForUserRole();
  144 |     await expect(page.getByRole('table')).toContainText('Admin', { timeout: 5000 });
  145 | })
  146 | test('Verify url after clicking on the Upgrade link in HomePage', async ({ page }) => {
  147 |     const home = new HomePage(page)
  148 |     await home.clickAndVerifyThatWeAreNavigatedToTheUpgradePage();
  149 | })
  150 | test('LogOut', async ({ page }) => {
  151 |     const home = new HomePage(page)
  152 |     await home.logout();
  153 |     await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
  154 | })
  155 | test('Click Support Menu Item', async ({ page }) => {
  156 |     const home = new HomePage(page)
  157 |     await home.clickSupportItem();
  158 |     await expect(page.locator('#app')).toContainText('Getting Started with OrangeHRM');
  159 | })
  160 | test('Search for employee', async ({ page }) => {
  161 |     const home = new HomePage(page)
  162 |     await home.searchForEmployee();
  163 |     await expect(page.getByText('Successfully Updated')).toBeVisible({ timeout: 10000});
  164 | })
  165 | test('Navigate to Recruitment Page', async ({ page }) => {
  166 |     const recruitment = new RecruitPage(page);
  167 |     await recruitment.navigateToRecruitmentPage();
> 168 |     await expect(page.getByRole('heading', { name: 'Recruitment' })).toBeVisible();
      |                                                                      ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  169 | })
  170 | test('Verify that we are able to add new Recruit', async ({ page }) => {
  171 |     const recruitment = new RecruitPage(page);
  172 |     await recruitment.navigateToRecruitmentPage();
  173 |     await recruitment.addRecruitment();
  174 |     const successMessage = page.getByText('Success', { exact: true }); // Example success message locator
  175 |     await expect(successMessage).toBeVisible({ timeout: 100000});
  176 | })
  177 | test('Navigate to Buzz page and post whats on your mind.', async ({ page }) => {
  178 |     const home = new HomePage(page)
  179 |     await home.postInBlog();
  180 |     await expect(page.getByText('Testvam').first()).toBeVisible({ timeout: 5000});
  181 | })
  182 | test('Verify that the User Management button is visible in AdminPage', async ({ page }) => {
  183 |     const admin = new AdminPage(page)
  184 |     await admin.navigateToAdminPage();
  185 |     await expect(admin.userManagementButton).toBeVisible();
  186 | })
  187 | test('Verify that the User Management button is clickable in AdminPage', async ({ page }) => {
  188 |     const admin = new AdminPage(page)
  189 |     await admin.navigateToAdminPage();
  190 |     await expect(admin.userManagementButton).toBeEnabled();
  191 | })
  192 | test('Verify that the User Management list item 1 is visible in AdminPage', async ({ page }) => {
  193 |     const admin = new AdminPage(page)
  194 |     await admin.navigateToAdminPage();
  195 |     await admin.userManagementButton.click();
  196 |     await expect(admin.userManagementButtonListedItem1).toBeVisible();
  197 | })
  198 | test('Verify that the User Management list item 1 is clickable in AdminPage', async ({ page }) => {
  199 |     const admin = new AdminPage(page)
  200 |     await admin.navigateToAdminPage();
  201 |     await admin.userManagementButton.click();
  202 |     await expect(admin.userManagementButtonListedItem1).toBeEnabled();
  203 | })
  204 | test('Verify that the Job button is visible in AdminPage', async ({ page }) => {
  205 |     const admin = new AdminPage(page)
  206 |     await admin.navigateToAdminPage();
  207 |     await expect(admin.jobButton).toBeVisible();
  208 | })
  209 | test('Verify that the Job button is clickable in AdminPage', async ({ page }) => {
  210 |     const admin = new AdminPage(page)
  211 |     await admin.navigateToAdminPage();
  212 |     await expect(admin.jobButton).toBeEnabled();
  213 | })
  214 | test('Verify that the Job list item 1 is visible in AdminPage', async ({ page }) => {
  215 |     const admin = new AdminPage(page)
  216 |     await admin.navigateToAdminPage();
  217 |     await admin.jobButton.click();
  218 |     await expect(admin.jobButtonListedItem1).toBeVisible();
  219 | })
  220 | test('Verify that the Job list item 2 is visible in AdminPage', async ({ page }) => {
  221 |     const admin = new AdminPage(page)
  222 |     await admin.navigateToAdminPage();
  223 |     await admin.jobButton.click();
  224 |     await expect(admin.jobButtonListedItem2).toBeVisible();
  225 | })
  226 | test('Verify that the Job list item 3 is visible in AdminPage', async ({ page }) => {
  227 |     const admin = new AdminPage(page)
  228 |     await admin.navigateToAdminPage();
  229 |     await admin.jobButton.click();
  230 |     await expect(admin.jobButtonListedItem3).toBeVisible();
  231 | })
  232 | test('Verify that the Job list item 4 is visible in AdminPage', async ({ page }) => {
  233 |     const admin = new AdminPage(page)
  234 |     await admin.navigateToAdminPage();
  235 |     await admin.jobButton.click();
  236 |     await expect(admin.jobButtonListedItem4).toBeVisible();
  237 | })
  238 | test('Verify that the Job list item 5 is visible in AdminPage', async ({ page }) => {
  239 |     const admin = new AdminPage(page)
  240 |     await admin.navigateToAdminPage();
  241 |     await admin.jobButton.click();
  242 |     await expect(admin.jobButtonListedItem5).toBeVisible();
  243 | })
  244 | test('Verify that the Job list item 1 is clickable in AdminPage', async ({ page }) => {
  245 |     const admin = new AdminPage(page)
  246 |     await admin.navigateToAdminPage();
  247 |     await admin.jobButton.click();
  248 |     await expect(admin.jobButtonListedItem1).toBeEnabled();
  249 | })
  250 | test('Verify that the Job list item 2 is clickable in AdminPage', async ({ page }) => {
  251 |     const admin = new AdminPage(page)
  252 |     await admin.navigateToAdminPage();
  253 |     await admin.jobButton.click();
  254 |     await expect(admin.jobButtonListedItem2).toBeEnabled();
  255 | })
  256 | test('Verify that the Job list item 3 is clickable in AdminPage', async ({ page }) => {
  257 |     const admin = new AdminPage(page)
  258 |     await admin.navigateToAdminPage();
  259 |     await admin.jobButton.click();
  260 |     await expect(admin.jobButtonListedItem3).toBeEnabled();
  261 | })
  262 | test('Verify that the Job list item 4 is clickable in AdminPage', async ({ page }) => {
  263 |     const admin = new AdminPage(page)
  264 |     await admin.navigateToAdminPage();
  265 |     await admin.jobButton.click();
  266 |     await expect(admin.jobButtonListedItem4).toBeEnabled();
  267 | })
  268 | test('Verify that the Job list item 5 is clickable in AdminPage', async ({ page }) => {
```