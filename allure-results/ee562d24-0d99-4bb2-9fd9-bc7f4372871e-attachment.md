# Test info

- Name: Verify that the admin button is clickable
- Location: D:\Automation\OrangeHRM\tests\test.spec.js:36:1

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Login' })
    - locator resolved to <button type="submit" data-v-10d463b7="" data-v-0af708be="" class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button">…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

    at LoginPage.clickLoginButton (D:\Automation\OrangeHRM\pages\LoginPage.js:20:33)
    at LoginPage.login (D:\Automation\OrangeHRM\pages\LoginPage.js:11:20)
    at D:\Automation\OrangeHRM\tests\test.spec.js:14:5
```

# Page snapshot

```yaml
- img "company-branding"
- heading "Login" [level=5]
- paragraph: "Username : Admin"
- paragraph: "Password : admin123"
- text:  Username
- textbox "Username": Admin
- text:  Password
- textbox "Password": admin123
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
   1 | exports.LoginPage = class LoginPage {
   2 |     constructor(page) {
   3 |         this.page = page
   4 |         this.username_textbox = page.locator('//input[@name="username"]');
   5 |         this.password_textbox = page.locator('//input[@name="password"]');
   6 |         this.login_button = page.getByRole('button', { name: 'Login' });
   7 |     }
   8 |     async login(){
   9 |         await this.enterUsername();
  10 |         await this.enterPassword();
  11 |         await this.clickLoginButton();
  12 |     }
  13 |     async enterUsername() {
  14 |         await this.username_textbox.fill('Admin');
  15 |     }
  16 |     async enterPassword() {
  17 |         await this.password_textbox.fill('admin123');
  18 |     } 
  19 |     async clickLoginButton() {
> 20 |         await this.login_button.click();
     |                                 ^ Error: locator.click: Test timeout of 30000ms exceeded.
  21 |     }
  22 |     async navigateToPage() {
  23 |         await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  24 |         await this.page.waitForLoadState('load');
  25 |     }
  26 | }
```