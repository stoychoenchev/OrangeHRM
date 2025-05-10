# Test info

- Name: Verify that the search functionality in PimPage is working as expected
- Location: D:\Automation\OrangeHRM\tests\test.spec.js:531:1

# Error details

```
Error: page.goto: Navigation to "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList" is interrupted by another navigation to "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList", waiting until "load"

    at PimPage.navigateToPimPage (D:\Automation\OrangeHRM\pages\PimPage.js:19:25)
    at PimPage.searchForUserRole (D:\Automation\OrangeHRM\pages\PimPage.js:33:19)
    at D:\Automation\OrangeHRM\tests\test.spec.js:533:41
```

# Test source

```ts
   1 | exports.PimPage = class PimPage {
   2 |     constructor(page) {
   3 |         this.page = page
   4 |         this.pimAddbutton =this.page.locator(".oxd-icon.bi-plus.oxd-button-icon");
   5 |         this.pimTextAssertion = this.page.locator(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module");
   6 |         this.pimFirstNameField = this.page.locator("input[placeholder='First Name']");
   7 |         this.pimMiddleNameField = this.page.locator("input[placeholder='Middle Name']");
   8 |         this.pimLastNameField = this.page.locator("input[placeholder='Last Name']");
   9 |         this.pimSaveButton = this.page.locator("button[type='submit']");
  10 |         this.pimEmployeerName = this.page.locator(".orangehrm-edit-employee-name");
  11 |         this.employeeNameField = this.page.locator(".oxd-input-group")
  12 |         .filter({ has: this.page.getByText('Employee Name')})
  13 |         .locator("input[placeholder='Type for hints...']");
  14 |         this.matchedName = this.page.locator('div.oxd-table-cell:has-text("Test Testov")');
  15 |         this.employeeId = this.page.locator("div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']");
  16 |         this.searchButton = this.page.locator("button[type='submit']");
  17 |     }
  18 |     async navigateToPimPage() {
> 19 |         await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
     |                         ^ Error: page.goto: Navigation to "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList" is interrupted by another navigation to "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
  20 |         await this.page.waitForLoadState('load');
  21 |     }
  22 |     async PimPageAddEmployee() {
  23 |         const uniqueId = `ID${Date.now().toString().slice(-5)}`; // Creates a unique username for each test run
  24 |        await this.pimAddbutton.click();
  25 |        await this.pimFirstNameField.fill("Koko");
  26 |        await this.pimMiddleNameField.fill("Koko");
  27 |        await this.pimLastNameField.fill("Koko");
  28 |        await this.employeeId.fill(uniqueId);
  29 |        await this.pimSaveButton.click();
  30 |     }
  31 |
  32 |     async searchForUserRole(){
  33 |        await this.navigateToPimPage();
  34 |        await this.employeeNameField.fill("Koko Koko");
  35 |        await this.searchButton.click();
  36 |        return this.matchedName;
  37 |     }
  38 |     }
```