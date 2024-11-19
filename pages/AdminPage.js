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
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.adminPageText = page.getByRole('heading', { name: '/ User Management' });
        this.userRole = page.locator('form i').first();
        this.userRoleAdmin = this.page.getByRole('option', { name: 'Admin' });
        this.searchButton = this.page.getByRole('button', { name: 'Search' });
        this.userManagementButton = this.page.getByRole('listitem').filter({ hasText: 'User Management' }).locator('i')
        this.userManagementButtonListedItem1 = this.page.getByRole('listitem').filter({ hasText: /^Users$/ });
        this.jobButton = this.page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i');
        this.jobButtonListedItem1 = this.page.getByRole('menuitem', { name: 'Job Titles' });
        this.jobButtonListedItem2 = this.page.getByRole('menuitem', { name: 'Pay Grades' });
        this.jobButtonListedItem3 = this.page.getByRole('menuitem', { name: 'Employment Status' });
        this.jobButtonListedItem4 = this.page.getByRole('menuitem', { name: 'Job Categories' });
        this.jobButtonListedItem5 = this.page.getByRole('menuitem', { name: 'Work Shifts' });
        this.organizationButton = this.page.getByRole('listitem').filter({ hasText: 'Organization' }).locator('i');
        this.organizationButtonListedItem1 = this.page.getByRole('menuitem', { name: 'General Information' });
        this.organizationButtonListedItem2 = this.page.getByRole('menuitem', { name: 'Locations' });
        this.organizationButtonListedItem3 = this.page.getByRole('menuitem', { name: 'Structure' });
        this.qualificationsButton = this.page.getByRole('listitem').filter({ hasText: 'Qualifications' }).locator('i');
        this.qualificationsButtonListedItem1 = this.page.getByRole('menuitem', { name: 'Skills' });
        this.qualificationsButtonListedItem2 = this.page.getByRole('menuitem', { name: 'Education' });
        this.qualificationsButtonListedItem3 = this.page.getByRole('menuitem', { name: 'Licenses' });
        this.qualificationsButtonListedItem4 = this.page.getByRole('menuitem', { name: 'Languages' });
        this.qualificationsButtonListedItem5 = this.page.getByRole('menuitem', { name: 'Memberships' });
        this.nationalitiesButton = this.page.getByRole('link', { name: 'Nationalities' });
        this.corporateBrandingButton = this.page.getByRole('link', { name: 'Corporate Branding' });
        this.configurationButton = this.page.getByRole('listitem').filter({ hasText: 'Configuration' }).locator('i');
        this.configurationButtonListedItem1 = this.page.getByRole('menuitem', { name: 'Email Configuration' });
        this.configurationButtonListedItem2 = this.page.getByRole('menuitem', { name: 'Email Subscriptions' });
        this.configurationButtonListedItem3 = this.page.getByRole('menuitem', { name: 'Localization' });
        this.configurationButtonListedItem4 = this.page.getByRole('menuitem', { name: 'Language Packages' });
        this.configurationButtonListedItem5 = this.page.getByRole('menuitem', { name: 'Modules' });
        this.configurationButtonListedItem6 = this.page.getByRole('menuitem', { name: 'Social Media Authentication' });
        this.configurationButtonListedItem7 = this.page.getByRole('menuitem', { name: 'Register OAuth Client' });
        this.configurationButtonListedItem8 = this.page.getByRole('menuitem', { name: 'LDAP Configuration' });



    }
    async navigateToAdminPage() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
        await this.page.waitForLoadState('load');
    }
    async adminPageAddUser() {
        const uniqueUsername = `user_${Date.now()}`; // Creates a unique username for each test run
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
    async searchForUserRole(){
        await this.userRole.click();
        await this.userRoleAdmin.click();
        await this.searchButton.click();
    }
  
}