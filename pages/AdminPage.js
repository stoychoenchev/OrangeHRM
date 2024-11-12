exports.AdminPage = class AdminPage {

    constructor(page) {

        this.page = page
        this.adminButton = page.getByRole('link', { name: 'Admin' });
        this.addButton = page.getByRole('button', { name: ' Add' });
        this.formI = page.locator('form i').first();
        this.formIOption = page.getByRole('option', { name: 'Admin' });
        this.typeForHints = page.getByPlaceholder('Type for hints...');
        this.typeForHintsOption = page.getByRole('option').first();
        this.formIsecond = page.locator('form i').nth(1);
        this.formEnabled = page.getByRole('option', { name: 'Enabled' });
        this.usernameBox = page.getByRole('textbox').nth(2);
        this.passwordBox = page.getByRole('textbox').nth(3);
        this.passwordBoxRepat = page.getByRole('textbox').nth(4);
        this.saveButton = page.getByRole('button', { name: 'Save' })

    }

    async navigateToAdminPageAndAddUser() {
        const uniqueUsername = `user_${Date.now()}`; // Creates a unique username for each test run

        await this.adminButton.click();
        await this.addButton.click();
        await this.formI.click();
        await this.formIOption.click();
        await this.typeForHints.fill('A');
        await this.page.waitForTimeout(5000);
        await this.typeForHintsOption.click();
        await this.formIsecond.click();
        await this.formEnabled.click();
        await this.usernameBox.fill(uniqueUsername);
        await this.passwordBox.fill('parola123');
        await this.passwordBoxRepat.fill('parola123');
        await this.saveButton.click();


    }





}