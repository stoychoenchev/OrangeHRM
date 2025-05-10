# Test info

- Name: Verify that we are able to add new Recruit
- Location: D:\Automation\OrangeHRM\tests\test.spec.js:170:1

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: ' Add' })

    at RecruitPage.addRecruitment (D:\Automation\OrangeHRM\pages\RecruitPage.js:20:43)
    at D:\Automation\OrangeHRM\tests\test.spec.js:173:5
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
   1 | exports.RecruitPage = class RecruitPage {
   2 |     constructor(page) {
   3 |         this.page = page
   4 |         this.recruitmentButton = page.getByRole('link', { name: 'Recruitment' });
   5 |         this.addInRecruitmentButton = page.getByRole('button', { name: ' Add' });
   6 |         this.firstNameField = page.getByPlaceholder('First Name');
   7 |         this.middleNameField = page.getByPlaceholder('Middle Name');
   8 |         this.lastNameField = page.getByPlaceholder('Last Name');
   9 |         this.vacancyDropDown = page.locator('form i').first();
  10 |         this.seniorQaOption = page.getByText('Senior QA Lead');
  11 |         this.emailField = page.getByPlaceholder('Type here').first()
  12 |         this.saveButton = page.getByRole('button', { name: 'Save' });
  13 |     }
  14 |     async navigateToRecruitmentPage() {
  15 |         await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates');
  16 |         await this.page.waitForLoadState('load');
  17 |     }
  18 |     async addRecruitment(){
  19 |         await this.navigateToRecruitmentPage();
> 20 |         await this.addInRecruitmentButton.click();
     |                                           ^ Error: locator.click: Test timeout of 30000ms exceeded.
  21 |         await this.firstNameField.fill('Stoycho');
  22 |         await this.middleNameField.fill('Tarkanaev');
  23 |         await this.lastNameField.fill('Tainov');
  24 |         await this.vacancyDropDown.click();
  25 |         await this.seniorQaOption.click();
  26 |         await this.emailField.fill('abekvomepitash@abv.bg');
  27 |         await this.saveButton.click();
  28 |     }
  29 | }
```