# Test info

- Name: Verify that the Configuration list item 7 is visible in AdminPage
- Location: D:\Automation\OrangeHRM\tests\test.spec.js:456:1

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('listitem').filter({ hasText: 'Configuration' }).locator('i')

    at D:\Automation\OrangeHRM\tests\test.spec.js:459:37
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
  359 | })
  360 | test('Verify that the Qualifications list item 1 is clickable in AdminPage', async ({ page }) => {
  361 |     const admin = new AdminPage(page)
  362 |     await admin.navigateToAdminPage();
  363 |     await admin.qualificationsButton.click();
  364 |     await expect(admin.qualificationsButtonListedItem1).toBeEnabled();
  365 | })
  366 | test('Verify that the Qualifications list item 2 is clickable in AdminPage', async ({ page }) => {
  367 |     const admin = new AdminPage(page)
  368 |     await admin.navigateToAdminPage();
  369 |     await admin.qualificationsButton.click();
  370 |     await expect(admin.qualificationsButtonListedItem2).toBeEnabled();
  371 | })
  372 | test('Verify that the Qualifications list item 3 is clickable in AdminPage', async ({ page }) => {
  373 |     const admin = new AdminPage(page)
  374 |     await admin.navigateToAdminPage();
  375 |     await admin.qualificationsButton.click();
  376 |     await expect(admin.qualificationsButtonListedItem3).toBeEnabled();
  377 | })
  378 | test('Verify that the Qualifications list item 4 is clickable in AdminPage', async ({ page }) => {
  379 |     const admin = new AdminPage(page)
  380 |     await admin.navigateToAdminPage();
  381 |     await admin.qualificationsButton.click();
  382 |     await expect(admin.qualificationsButtonListedItem4).toBeEnabled();
  383 | })
  384 | test('Verify that the Qualifications list item 5 is clickable in AdminPage', async ({ page }) => {
  385 |     const admin = new AdminPage(page)
  386 |     await admin.navigateToAdminPage();
  387 |     await admin.qualificationsButton.click();
  388 |     await expect(admin.qualificationsButtonListedItem5).toBeEnabled();
  389 | })
  390 | test('Verify that the Nationalities button is visible in AdminPage', async ({ page }) => {
  391 |     const admin = new AdminPage(page)
  392 |     await admin.navigateToAdminPage();
  393 |     await expect(admin.nationalitiesButton).toBeVisible();
  394 | })
  395 | test('Verify that the Nationalities button is clickable in AdminPage', async ({ page }) => {
  396 |     const admin = new AdminPage(page)
  397 |     await admin.navigateToAdminPage();
  398 |     await expect(admin.nationalitiesButton).toBeEnabled();
  399 | })
  400 | test('Verify that the Corporate Branding button is visible in AdminPage', async ({ page }) => {
  401 |     const admin = new AdminPage(page)
  402 |     await admin.navigateToAdminPage();
  403 |     await expect(admin.corporateBrandingButton).toBeVisible();
  404 | })
  405 | test('Verify that the Corporate Branding button is clickable in AdminPage', async ({ page }) => {
  406 |     const admin = new AdminPage(page)
  407 |     await admin.navigateToAdminPage();
  408 |     await expect(admin.corporateBrandingButton).toBeEnabled();
  409 | })
  410 | test('Verify that the Configuration Branding button is visible in AdminPage', async ({ page }) => {
  411 |     const admin = new AdminPage(page)
  412 |     await admin.navigateToAdminPage();
  413 |     await expect(admin.configurationButton).toBeVisible();
  414 | })
  415 | test('Verify that the Configuration Branding button is clickable in AdminPage', async ({ page }) => {
  416 |     const admin = new AdminPage(page)
  417 |     await admin.navigateToAdminPage();
  418 |     await expect(admin.configurationButton).toBeEnabled();
  419 | })
  420 | test('Verify that the Configuration list item 1 is visible in AdminPage', async ({ page }) => {
  421 |     const admin = new AdminPage(page)
  422 |     await admin.navigateToAdminPage();
  423 |     await admin.configurationButton.click();
  424 |     await expect(admin.configurationButtonListedItem1).toBeVisible();
  425 | })
  426 | test('Verify that the Configuration list item 2 is visible in AdminPage', async ({ page }) => {
  427 |     const admin = new AdminPage(page)
  428 |     await admin.navigateToAdminPage();
  429 |     await admin.configurationButton.click();
  430 |     await expect(admin.configurationButtonListedItem2).toBeVisible();
  431 | })
  432 | test('Verify that the Configuration list item 3 is visible in AdminPage', async ({ page }) => {
  433 |     const admin = new AdminPage(page)
  434 |     await admin.navigateToAdminPage();
  435 |     await admin.configurationButton.click();
  436 |     await expect(admin.configurationButtonListedItem3).toBeVisible();
  437 | })
  438 | test('Verify that the Configuration list item 4 is visible in AdminPage', async ({ page }) => {
  439 |     const admin = new AdminPage(page)
  440 |     await admin.navigateToAdminPage();
  441 |     await admin.configurationButton.click();
  442 |     await expect(admin.configurationButtonListedItem4).toBeVisible();
  443 | })
  444 | test('Verify that the Configuration list item 5 is visible in AdminPage', async ({ page }) => {
  445 |     const admin = new AdminPage(page)
  446 |     await admin.navigateToAdminPage();
  447 |     await admin.configurationButton.click();
  448 |     await expect(admin.configurationButtonListedItem5).toBeVisible();
  449 | })
  450 | test('Verify that the Configuration list item 6 is visible in AdminPage', async ({ page }) => {
  451 |     const admin = new AdminPage(page)
  452 |     await admin.navigateToAdminPage();
  453 |     await admin.configurationButton.click();
  454 |     await expect(admin.configurationButtonListedItem6).toBeVisible();
  455 | })
  456 | test('Verify that the Configuration list item 7 is visible in AdminPage', async ({ page }) => {
  457 |     const admin = new AdminPage(page)
  458 |     await admin.navigateToAdminPage();
> 459 |     await admin.configurationButton.click();
      |                                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  460 |     await expect(admin.configurationButtonListedItem7).toBeVisible();
  461 | })
  462 | test('Verify that the Configuration list item 8 is visible in AdminPage', async ({ page }) => {
  463 |     const admin = new AdminPage(page)
  464 |     await admin.navigateToAdminPage();
  465 |     await admin.configurationButton.click();
  466 |     await expect(admin.configurationButtonListedItem8).toBeVisible();
  467 | })
  468 | test('Verify that the Configuration list item 1 is clickable in AdminPage', async ({ page }) => {
  469 |     const admin = new AdminPage(page)
  470 |     await admin.navigateToAdminPage();
  471 |     await admin.configurationButton.click();
  472 |     await expect(admin.configurationButtonListedItem1).toBeEnabled();
  473 | })
  474 | test('Verify that the Configuration list item 2 is clickable in AdminPage', async ({ page }) => {
  475 |     const admin = new AdminPage(page)
  476 |     await admin.navigateToAdminPage();
  477 |     await admin.configurationButton.click();
  478 |     await expect(admin.configurationButtonListedItem2).toBeEnabled();
  479 | })
  480 | test('Verify that the Configuration list item 3 is clickable in AdminPage', async ({ page }) => {
  481 |     const admin = new AdminPage(page)
  482 |     await admin.navigateToAdminPage();
  483 |     await admin.configurationButton.click();
  484 |     await expect(admin.configurationButtonListedItem3).toBeEnabled();
  485 | })
  486 | test('Verify that the Configuration list item 4 is clickable in AdminPage', async ({ page }) => {
  487 |     const admin = new AdminPage(page)
  488 |     await admin.navigateToAdminPage();
  489 |     await admin.configurationButton.click();
  490 |     await expect(admin.configurationButtonListedItem4).toBeEnabled();
  491 | })
  492 | test('Verify that the Configuration list item 5 is clickable in AdminPage', async ({ page }) => {
  493 |     const admin = new AdminPage(page)
  494 |     await admin.navigateToAdminPage();
  495 |     await admin.configurationButton.click();
  496 |     await expect(admin.configurationButtonListedItem5).toBeEnabled();
  497 | })
  498 | test('Verify that the Configuration list item 6 is clickable in AdminPage', async ({ page }) => {
  499 |     const admin = new AdminPage(page)
  500 |     await admin.navigateToAdminPage();
  501 |     await admin.configurationButton.click();
  502 |     await expect(admin.configurationButtonListedItem6).toBeEnabled();
  503 | })
  504 | test('Verify that the Configuration list item 7 is clickable in AdminPage', async ({ page }) => {
  505 |     const admin = new AdminPage(page)
  506 |     await admin.navigateToAdminPage();
  507 |     await admin.configurationButton.click();
  508 |     await expect(admin.configurationButtonListedItem7).toBeEnabled();
  509 | })
  510 | test('Verify that the Configuration list item 8 is clickable in AdminPage', async ({ page }) => {
  511 |     const admin = new AdminPage(page)
  512 |     await admin.navigateToAdminPage();
  513 |     await admin.configurationButton.click();
  514 |     await expect(admin.configurationButtonListedItem8).toBeEnabled();
  515 | })
  516 | test('Get all records and their counts and compare with the number in () Records Found', async ({ page }) => {
  517 |     const admin = new AdminPage(page)
  518 |     await admin.navigateToAdminPage();
  519 |     await admin.getRecordsAndCompareNumber();
  520 | })
  521 |
  522 | test('Verify that we are navigated to pim page and successfully adding an employee', async ({ page }) => {
  523 |     const pim = new PimPage(page)
  524 |     await pim.navigateToPimPage();
  525 |     await expect(pim.pimTextAssertion).toHaveText("PIM");
  526 |     await pim.PimPageAddEmployee();
  527 |     const successMessage = page.getByText('Success', { exact: true }); // Example success message locator
  528 |     await expect(successMessage).toBeVisible({ timeout: 100000});
  529 | })
  530 |
  531 | test('Verify that the search functionality in PimPage is working as expected', async ({ page }) => {
  532 |     const pim = new PimPage(page)
  533 |     const assertionOfSearch = await pim.searchForUserRole();
  534 | })
```