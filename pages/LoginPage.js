exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page
        this.username_textbox = page.locator('//input[@name="username"]');
        this.password_textbox = page.locator('//input[@name="password"]');
        this.login_button = page.getByRole('button', { name: 'Login' });
    }
    async login(){
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
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await this.page.waitForLoadState('load');
    }
}