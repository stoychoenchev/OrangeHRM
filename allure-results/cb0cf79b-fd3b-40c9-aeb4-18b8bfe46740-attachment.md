# Test info

- Name: Verify that the time button is clickable
- Location: D:\Automation\OrangeHRM\tests\test.spec.js:60:1

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: 'Login' })

    at LoginPage.clickLoginButton (D:\Automation\OrangeHRM\pages\LoginPage.js:20:33)
    at LoginPage.login (D:\Automation\OrangeHRM\pages\LoginPage.js:11:20)
    at D:\Automation\OrangeHRM\tests\test.spec.js:14:5
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
     |                                 ^ Error: locator.click: Target page, context or browser has been closed
  21 |     }
  22 |     async navigateToPage() {
  23 |         await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  24 |         await this.page.waitForLoadState('load');
  25 |     }
  26 | }
```