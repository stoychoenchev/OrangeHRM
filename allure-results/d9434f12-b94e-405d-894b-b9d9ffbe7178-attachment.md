# Test info

- Name: Verify that the Corporate Branding button is clickable in AdminPage
- Location: C:\Stoycho\stoi4o\GitOpit\orangeHRM\tests\test.spec.js:403:1

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('//input[@name="username"]')

    at LoginPage.enterUsername (C:\Stoycho\stoi4o\GitOpit\orangeHRM\pages\LoginPage.js:14:37)
    at LoginPage.login (C:\Stoycho\stoi4o\GitOpit\orangeHRM\pages\LoginPage.js:9:20)
    at C:\Stoycho\stoi4o\GitOpit\orangeHRM\tests\test.spec.js:12:17
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
     |                                     ^ Error: locator.fill: Target page, context or browser has been closed
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