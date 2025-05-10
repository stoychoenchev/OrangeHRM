# Test info

- Name: Verify that the Nationalities button is visible in AdminPage
- Location: D:\Automation\OrangeHRM\tests\test.spec.js:390:1

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: getByRole('link', { name: 'Nationalities' })
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for getByRole('link', { name: 'Nationalities' })

    at D:\Automation\OrangeHRM\tests\test.spec.js:393:45
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
> 393 |     await expect(admin.nationalitiesButton).toBeVisible();
      |                                             ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
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
  459 |     await admin.configurationButton.click();
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
```