exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.username_textbox = page.locator('//input[@name="username"]');
        this.password_textbox = page.locator('//input[@name="password"]')
        this.login_button = page.locator('button:has-text("Login")')
    }

    async login(){
        await this.navigateToPage();
        await this.enterUsername();
        await this.enterPassword();
        await this.clickLoginButton();
    }

    async enterUsername() {

        await this.username_textbox.fill('Admin');
    }
    async enterPassword() {

        await this.password_textbox.fill('admin123');
    } 
    async clickLoginButton() {
        await this.login_button.click();
    }

    async navigateToPage() {
        this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        this.page.waitForLoadState('load');

    }



}