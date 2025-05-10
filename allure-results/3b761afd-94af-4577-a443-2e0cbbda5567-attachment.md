# Test info

- Name: Verify that the pim button is visible
- Location: D:\Automation\OrangeHRM\tests\test.spec.js:40:1

# Error details

```
Error: locator.fill: Test ended.
Call log:
  - waiting for locator('//input[@name="username"]')

    at LoginPage.enterUsername (D:\Automation\OrangeHRM\pages\LoginPage.js:14:37)
    at LoginPage.login (D:\Automation\OrangeHRM\pages\LoginPage.js:9:20)
    at D:\Automation\OrangeHRM\tests\test.spec.js:14:17
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
> 14 |         await this.username_textbox.fill('Admin');
     |                                     ^ Error: locator.fill: Test ended.
  15 |     }
  16 |     async enterPassword() {
  17 |         await this.password_textbox.fill('admin123');
  18 |     } 
  19 |     async clickLoginButton() {
  20 |         await this.login_button.click();
  21 |     }
  22 |     async navigateToPage() {
  23 |         await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  24 |         await this.page.waitForLoadState('load');
  25 |     }
  26 | }
```