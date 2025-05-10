# Test info

- Name: Get all records and their counts and compare with the number in () Records Found
- Location: D:\Automation\OrangeHRM\tests\test.spec.js:516:1

# Error details

```
Error: page.waitForSelector: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.orangehrm-container').locator('role=row') to be visible

    at AdminPage.initializeLocators (D:\Automation\OrangeHRM\pages\AdminPage.js:78:25)
    at AdminPage.getRecordsAndCompareNumber (D:\Automation\OrangeHRM\pages\AdminPage.js:84:20)
    at D:\Automation\OrangeHRM\tests\test.spec.js:519:5
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
   1 | exports.AdminPage = class AdminPage {
   2 |     constructor(page) {
   3 |         this.page = page
   4 |         this.adminButton = page.getByRole('link', { name: 'Admin' });
   5 |         this.addButton = page.getByRole('button', { name: ' Add' });
   6 |         this.formI = page.locator('form i').first();
   7 |         this.formIOption = page.getByRole('option', { name: 'Admin' });
   8 |         this.typeForHints = page.getByPlaceholder('Type for hints...');
   9 |         this.typeForHintsOption = page.getByRole('option').first();
  10 |         this.formIsecond = page.locator('form i').nth(1);
  11 |         this.formEnabled = page.getByRole('option', { name: 'Enabled' });
  12 |         this.usernameBox = page.getByRole('textbox').nth(2);
  13 |         this.passwordBox = page.getByRole('textbox').nth(3);
  14 |         this.passwordBoxRepat = page.getByRole('textbox').nth(4);
  15 |         this.saveButton = page.getByRole('button', { name: 'Save' });
  16 |         this.adminPageText = page.getByRole('heading', { name: '/ User Management' });
  17 |         this.userRole = page.locator('form i').first();
  18 |         this.userRoleAdmin = this.page.getByRole('option', { name: 'Admin' });
  19 |         this.searchButton = this.page.getByRole('button', { name: 'Search' });
  20 |         this.userManagementButton = this.page.getByRole('listitem').filter({ hasText: 'User Management' }).locator('i')
  21 |         this.userManagementButtonListedItem1 = this.page.getByRole('listitem').filter({ hasText: /^Users$/ });
  22 |         this.jobButton = this.page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i');
  23 |         this.jobButtonListedItem1 = this.page.getByRole('menuitem', { name: 'Job Titles' });
  24 |         this.jobButtonListedItem2 = this.page.getByRole('menuitem', { name: 'Pay Grades' });
  25 |         this.jobButtonListedItem3 = this.page.getByRole('menuitem', { name: 'Employment Status' });
  26 |         this.jobButtonListedItem4 = this.page.getByRole('menuitem', { name: 'Job Categories' });
  27 |         this.jobButtonListedItem5 = this.page.getByRole('menuitem', { name: 'Work Shifts' });
  28 |         this.organizationButton = this.page.getByRole('listitem').filter({ hasText: 'Organization' }).locator('i');
  29 |         this.organizationButtonListedItem1 = this.page.getByRole('menuitem', { name: 'General Information' });
  30 |         this.organizationButtonListedItem2 = this.page.getByRole('menuitem', { name: 'Locations' });
  31 |         this.organizationButtonListedItem3 = this.page.getByRole('menuitem', { name: 'Structure' });
  32 |         this.qualificationsButton = this.page.getByRole('listitem').filter({ hasText: 'Qualifications' }).locator('i');
  33 |         this.qualificationsButtonListedItem1 = this.page.getByRole('menuitem', { name: 'Skills' });
  34 |         this.qualificationsButtonListedItem2 = this.page.getByRole('menuitem', { name: 'Education' });
  35 |         this.qualificationsButtonListedItem3 = this.page.getByRole('menuitem', { name: 'Licenses' });
  36 |         this.qualificationsButtonListedItem4 = this.page.getByRole('menuitem', { name: 'Languages' });
  37 |         this.qualificationsButtonListedItem5 = this.page.getByRole('menuitem', { name: 'Memberships' });
  38 |         this.nationalitiesButton = this.page.getByRole('link', { name: 'Nationalities' });
  39 |         this.corporateBrandingButton = this.page.getByRole('link', { name: 'Corporate Branding' });
  40 |         this.configurationButton = this.page.getByRole('listitem').filter({ hasText: 'Configuration' }).locator('i');
  41 |         this.configurationButtonListedItem1 = this.page.getByRole('menuitem', { name: 'Email Configuration' });
  42 |         this.configurationButtonListedItem2 = this.page.getByRole('menuitem', { name: 'Email Subscriptions' });
  43 |         this.configurationButtonListedItem3 = this.page.getByRole('menuitem', { name: 'Localization' });
  44 |         this.configurationButtonListedItem4 = this.page.getByRole('menuitem', { name: 'Language Packages' });
  45 |         this.configurationButtonListedItem5 = this.page.getByRole('menuitem', { name: 'Modules' });
  46 |         this.configurationButtonListedItem6 = this.page.getByRole('menuitem', { name: 'Social Media Authentication' });
  47 |         this.configurationButtonListedItem7 = this.page.getByRole('menuitem', { name: 'Register OAuth Client' });
  48 |         this.configurationButtonListedItem8 = this.page.getByRole('menuitem', { name: 'LDAP Configuration' });
  49 |         this.containerLocator = '.orangehrm-container >> role=row';
  50 |         this.rowsArray = null;
  51 |         this.recordsFoundText = null;
  52 |     }
  53 |     async navigateToAdminPage() {
  54 |         await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
  55 |         await this.page.waitForLoadState('load');
  56 |     }
  57 |     async adminPageAddUser() {
  58 |         const uniqueUsername = `user_${Date.now()}`; // Creates a unique username for each test run
  59 |         await this.addButton.click();
  60 |         await this.formI.click();
  61 |         await this.formIOption.click();
  62 |         await this.typeForHints.fill('A');
  63 |         await this.page.waitForTimeout(5000);
  64 |         await this.typeForHintsOption.click();
  65 |         await this.formIsecond.click();
  66 |         await this.formEnabled.click();
  67 |         await this.usernameBox.fill(uniqueUsername);
  68 |         await this.passwordBox.fill('parola123');
  69 |         await this.passwordBoxRepat.fill('parola123');
  70 |         await this.saveButton.click();
  71 |     }
  72 |     async searchForUserRole(){
  73 |         await this.userRole.click();
  74 |         await this.userRoleAdmin.click();
  75 |         await this.searchButton.click();
  76 |     }
  77 |     async initializeLocators() {
> 78 |         await this.page.waitForSelector(this.containerLocator);
     |                         ^ Error: page.waitForSelector: Test timeout of 30000ms exceeded.
  79 |         this.rowsArray = await this.page.locator(this.containerLocator).allTextContents();
  80 |         this.recordsFoundText = await this.page.locator('xpath=//*[@class and contains(concat(" ", normalize-space(@class), " "), " oxd-text--span ") and (position() = 1)]').textContent();
  81 |         }
  82 |     async getRecordsAndCompareNumber(){
  83 |         await this.navigateToAdminPage();
  84 |         await this.initializeLocators();
  85 |         console.log('Rows:', this.rowsArray);
  86 |         const itemCount = this.rowsArray.length - 1; // No need to sort if sorting is not required
  87 |         console.log('Item Count:', itemCount);
  88 |         console.log('Records Found Text:', this.recordsFoundText);
  89 |         const recordsFoundCount = parseInt(this.recordsFoundText.match(/\d+/)[0], 10);
  90 |         console.log('Records Found Count:', recordsFoundCount);
  91 |         if (itemCount === recordsFoundCount) {
  92 |         console.log('The counts match!');
  93 |         } else {
  94 |         console.log(`Mismatch: Found ${itemCount} items, but records indicate ${recordsFoundCount}`);
  95 |     }}}
```