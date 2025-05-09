# Test info

- Name: Verify that we are navigated to pim page and successfully adding an employee
- Location: C:\Stoycho\stoi4o\GitOpit\orangeHRM\tests\test.spec.js:522:6

# Error details

```
Error: expect(locator).toBeVisible()

Locator: getByText('Success', { exact: true })
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 100000ms
  - waiting for getByText('Success', { exact: true })

    at C:\Stoycho\stoi4o\GitOpit\orangeHRM\tests\test.spec.js:528:34
```

# Test source

```ts
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
  522 | test.only('Verify that we are navigated to pim page and successfully adding an employee', async ({ page }) => {
  523 |     const pim = new PimPage(page)
  524 |     await pim.navigateToPimPage();
  525 |     await expect(pim.pimTextAssertion).toHaveText("PIM");
  526 |     await pim.PimPageAddEmployee();
  527 |     const successMessage = page.getByText('Success', { exact: true }); // Example success message locator
> 528 |     await expect(successMessage).toBeVisible({ timeout: 100000});
      |                                  ^ Error: expect(locator).toBeVisible()
  529 | })
```