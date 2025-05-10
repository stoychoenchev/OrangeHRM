# Test info

- Name: Verify that the Job list item 3 is clickable in AdminPage
- Location: D:\Automation\OrangeHRM\tests\test.spec.js:256:1

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('listitem').filter({ hasText: 'Job' }).locator('i')

    at D:\Automation\OrangeHRM\tests\test.spec.js:259:27
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
  159 | })
  160 | test('Search for employee', async ({ page }) => {
  161 |     const home = new HomePage(page)
  162 |     await home.searchForEmployee();
  163 |     await expect(page.getByText('Successfully Updated')).toBeVisible({ timeout: 10000});
  164 | })
  165 | test('Navigate to Recruitment Page', async ({ page }) => {
  166 |     const recruitment = new RecruitPage(page);
  167 |     await recruitment.navigateToRecruitmentPage();
  168 |     await expect(page.getByRole('heading', { name: 'Recruitment' })).toBeVisible();
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
> 259 |     await admin.jobButton.click();
      |                           ^ Error: locator.click: Test timeout of 30000ms exceeded.
  260 |     await expect(admin.jobButtonListedItem3).toBeEnabled();
  261 | })
  262 | test('Verify that the Job list item 4 is clickable in AdminPage', async ({ page }) => {
  263 |     const admin = new AdminPage(page)
  264 |     await admin.navigateToAdminPage();
  265 |     await admin.jobButton.click();
  266 |     await expect(admin.jobButtonListedItem4).toBeEnabled();
  267 | })
  268 | test('Verify that the Job list item 5 is clickable in AdminPage', async ({ page }) => {
  269 |     const admin = new AdminPage(page)
  270 |     await admin.navigateToAdminPage();
  271 |     await admin.jobButton.click();
  272 |     await expect(admin.jobButtonListedItem5).toBeEnabled();
  273 | })
  274 | test('Verify that the Organization button is visible in AdminPage', async ({ page }) => {
  275 |     const admin = new AdminPage(page)
  276 |     await admin.navigateToAdminPage();
  277 |     await expect(admin.organizationButton).toBeVisible();
  278 | })
  279 | test('Verify that the Organization button is clickable in AdminPage', async ({ page }) => {
  280 |     const admin = new AdminPage(page)
  281 |     await admin.navigateToAdminPage();
  282 |     await expect(admin.organizationButton).toBeEnabled();
  283 | })
  284 | test('Verify that the Organization list item 1 is visible in AdminPage', async ({ page }) => {
  285 |     const admin = new AdminPage(page)
  286 |     await admin.navigateToAdminPage();
  287 |     await admin.organizationButton.click();
  288 |     await expect(admin.organizationButtonListedItem1).toBeVisible();
  289 | })
  290 | test('Verify that the Organization list item 2 is visible in AdminPage', async ({ page }) => {
  291 |     const admin = new AdminPage(page)
  292 |     await admin.navigateToAdminPage();
  293 |     await admin.organizationButton.click();
  294 |     await expect(admin.organizationButtonListedItem2).toBeVisible();
  295 | })
  296 | test('Verify that the Organization list item 3 is visible in AdminPage', async ({ page }) => {
  297 |     const admin = new AdminPage(page)
  298 |     await admin.navigateToAdminPage();
  299 |     await admin.organizationButton.click();
  300 |     await expect(admin.organizationButtonListedItem3).toBeVisible();
  301 | })
  302 | test('Verify that the Organization list item 1 is clickable in AdminPage', async ({ page }) => {
  303 |     const admin = new AdminPage(page)
  304 |     await admin.navigateToAdminPage();
  305 |     await admin.organizationButton.click();
  306 |     await expect(admin.organizationButtonListedItem1).toBeEnabled();
  307 | })
  308 | test('Verify that the Organization list item 2 is clickable in AdminPage', async ({ page }) => {
  309 |     const admin = new AdminPage(page)
  310 |     await admin.navigateToAdminPage();
  311 |     await admin.organizationButton.click();
  312 |     await expect(admin.organizationButtonListedItem2).toBeEnabled();
  313 | })
  314 | test('Verify that the Organization list item 3 is clickable in AdminPage', async ({ page }) => {
  315 |     const admin = new AdminPage(page)
  316 |     await admin.navigateToAdminPage();
  317 |     await admin.organizationButton.click();
  318 |     await expect(admin.organizationButtonListedItem3).toBeEnabled();
  319 | })
  320 | test('Verify that the Qualifactions button is visible in AdminPage', async ({ page }) => {
  321 |     const admin = new AdminPage(page)
  322 |     await admin.navigateToAdminPage();
  323 |     await expect(admin.qualificationsButton).toBeVisible();
  324 | })
  325 | test('Verify that the Qualifactions button is clickable in AdminPage', async ({ page }) => {
  326 |     const admin = new AdminPage(page)
  327 |     await admin.navigateToAdminPage();
  328 |     await expect(admin.qualificationsButton).toBeEnabled();
  329 | })
  330 | test('Verify that the Qualifications list item 1 is visible in AdminPage', async ({ page }) => {
  331 |     const admin = new AdminPage(page)
  332 |     await admin.navigateToAdminPage();
  333 |     await admin.qualificationsButton.click();
  334 |     await expect(admin.qualificationsButtonListedItem1).toBeVisible();
  335 | })
  336 | test('Verify that the Qualifications list item 2 is visible in AdminPage', async ({ page }) => {
  337 |     const admin = new AdminPage(page)
  338 |     await admin.navigateToAdminPage();
  339 |     await admin.qualificationsButton.click();
  340 |     await expect(admin.qualificationsButtonListedItem2).toBeVisible();
  341 | })
  342 | test('Verify that the Qualifications list item 3 is visible in AdminPage', async ({ page }) => {
  343 |     const admin = new AdminPage(page)
  344 |     await admin.navigateToAdminPage();
  345 |     await admin.qualificationsButton.click();
  346 |     await expect(admin.qualificationsButtonListedItem3).toBeVisible();
  347 | })
  348 | test('Verify that the Qualifications list item 4 is visible in AdminPage', async ({ page }) => {
  349 |     const admin = new AdminPage(page)
  350 |     await admin.navigateToAdminPage();
  351 |     await admin.qualificationsButton.click();
  352 |     await expect(admin.qualificationsButtonListedItem4).toBeVisible();
  353 | })
  354 | test('Verify that the Qualifications list item 5 is visible in AdminPage', async ({ page }) => {
  355 |     const admin = new AdminPage(page)
  356 |     await admin.navigateToAdminPage();
  357 |     await admin.qualificationsButton.click();
  358 |     await expect(admin.qualificationsButtonListedItem5).toBeVisible();
  359 | })
```