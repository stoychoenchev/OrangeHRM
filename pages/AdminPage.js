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
        this.adminPageText = page.getByRole('listitem').filter({ hasText: 'User Management' });
        this.userRole = page.locator('form i').first();
        this.userRoleAdmin = page.getByRole('option', { name: 'Admin' });
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.userManagementButton = page.getByRole('listitem').filter({ hasText: 'User Management' }).locator('i')
        this.userManagementButtonListedItem1 = page.getByRole('listitem').filter({ hasText: /^Users$/ });
        this.jobButton = page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i');
        this.jobButtonListedItem1 = page.getByRole('menuitem', { name: 'Job Titles' });
        this.jobButtonListedItem2 = page.getByRole('menuitem', { name: 'Pay Grades' });
        this.jobButtonListedItem3 = page.getByRole('menuitem', { name: 'Employment Status' });
        this.jobButtonListedItem4 = page.getByRole('menuitem', { name: 'Job Categories' });
        this.jobButtonListedItem5 = page.getByRole('menuitem', { name: 'Work Shifts' });
        this.organizationButton = page.getByRole('listitem').filter({ hasText: 'Organization' }).locator('i');
        this.organizationButtonListedItem1 = page.getByRole('menuitem', { name: 'General Information' });
        this.organizationButtonListedItem2 = page.getByRole('menuitem', { name: 'Locations' });
        this.organizationButtonListedItem3 = page.getByRole('menuitem', { name: 'Structure' });
        this.qualificationsButton = page.getByRole('listitem').filter({ hasText: 'Qualifications' }).locator('i');
        this.qualificationsButtonListedItem1 = page.getByRole('menuitem', { name: 'Skills' });
        this.qualificationsButtonListedItem2 = page.getByRole('menuitem', { name: 'Education' });
        this.qualificationsButtonListedItem3 = page.getByRole('menuitem', { name: 'Licenses' });
        this.qualificationsButtonListedItem4 = page.getByRole('menuitem', { name: 'Languages' });
        this.qualificationsButtonListedItem5 = page.getByRole('menuitem', { name: 'Memberships' });
        this.nationalitiesButton = page.getByRole('link', { name: 'Nationalities' });
        this.corporateBrandingButton = page.getByRole('link', { name: 'Corporate Branding' });
        this.configurationButton = page.getByRole('listitem').filter({ hasText: 'Configuration' }).locator('i');
        this.configurationButtonListedItem1 = page.getByRole('menuitem', { name: 'Email Configuration' });
        this.configurationButtonListedItem2 = page.getByRole('menuitem', { name: 'Email Subscriptions' });
        this.configurationButtonListedItem3 = page.getByRole('menuitem', { name: 'Localization' });
        this.configurationButtonListedItem4 = page.getByRole('menuitem', { name: 'Language Packages' });
        this.configurationButtonListedItem5 = page.getByRole('menuitem', { name: 'Modules' });
        this.configurationButtonListedItem6 = page.getByRole('menuitem', { name: 'Social Media Authentication' });
        this.configurationButtonListedItem7 = page.getByRole('menuitem', { name: 'Register OAuth Client' });
        this.configurationButtonListedItem8 = page.getByRole('menuitem', { name: 'LDAP Configuration' });
        this.containerLocator = '.orangehrm-container >> role=row';
        this.rowsArray = null;
        this.recordsFoundText = null;
    }
    async navigateToAdminPage() {
        await this.adminButton.click();
        await this.page.waitForLoadState('networkidle');
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
    async initializeLocators() {
        await this.page.waitForSelector(this.containerLocator);
        this.rowsArray = await this.page.locator(this.containerLocator).allTextContents();
        this.recordsFoundText = await this.page.locator('xpath=//*[@class and contains(concat(" ", normalize-space(@class), " "), " oxd-text--span ") and (position() = 1)]').textContent();
        }
    async getRecordsAndCompareNumber(){
        await this.navigateToAdminPage();
        await this.initializeLocators();
        console.log('Rows:', this.rowsArray);
        const itemCount = this.rowsArray.length - 1; // No need to sort if sorting is not required
        console.log('Item Count:', itemCount);
        console.log('Records Found Text:', this.recordsFoundText);
        const recordsFoundCount = parseInt(this.recordsFoundText.match(/\d+/)[0], 10);
        console.log('Records Found Count:', recordsFoundCount);
        if (itemCount === recordsFoundCount) {
        console.log('The counts match!');
        } else {
        console.log(`Mismatch: Found ${itemCount} items, but records indicate ${recordsFoundCount}`);
    }}
    async checkJobTitlesRecords() {
        await this.navigateToAdminPage();
        await this.jobButton.click();
        await this.jobButtonListedItem1.click(); // Job Titles
        await this.page.waitForSelector(this.containerLocator);
        const rowsArray = await this.page.locator(this.containerLocator).allTextContents();
        const recordsFoundText = await this.page.getByText('Records Found').textContent();
        const itemCount = rowsArray.length - 1;
        const recordsFoundCount = parseInt(recordsFoundText.match(/\d+/)[0], 10);
        return itemCount === recordsFoundCount;
    }
    async checkPayGradesRecords() {
        await this.navigateToAdminPage();
        await this.jobButton.click();
        await this.jobButtonListedItem2.click(); // Pay Grades
        await this.page.waitForSelector(this.containerLocator);
        const rowsArray = await this.page.locator(this.containerLocator).allTextContents();
        const recordsFoundText = await this.page.getByText('Records Found').textContent();
        const itemCount = rowsArray.length - 1;
        const recordsFoundCount = parseInt(recordsFoundText.match(/\d+/)[0], 10);
        return itemCount === recordsFoundCount;
    }
    async checkEmploymentStatusRecords() {
        await this.navigateToAdminPage();
        await this.jobButton.click();
        await this.jobButtonListedItem3.click(); // Employment Status
        await this.page.waitForSelector(this.containerLocator);
        const rowsArray = await this.page.locator(this.containerLocator).allTextContents();
        const recordsFoundText = await this.page.getByText('Records Found').textContent();
        const itemCount = rowsArray.length - 1;
        const recordsFoundCount = parseInt(recordsFoundText.match(/\d+/)[0], 10);
        return itemCount === recordsFoundCount;
    }
    async checkJobCategoriesRecords() {
        await this.navigateToAdminPage();
        await this.jobButton.click();
        await this.jobButtonListedItem4.click(); // Job Categories
        await this.page.waitForSelector(this.containerLocator);
        const rowsArray = await this.page.locator(this.containerLocator).allTextContents();
        const recordsFoundText = await this.page.getByText('Records Found').textContent();
        const itemCount = rowsArray.length - 1;
        const recordsFoundCount = parseInt(recordsFoundText.match(/\d+/)[0], 10);
        return itemCount === recordsFoundCount;
    }
    async checkWorkShiftsRecords() {
        await this.navigateToAdminPage();
        await this.jobButton.click();
        await this.jobButtonListedItem5.click(); // Work Shifts
        await this.page.waitForSelector(this.containerLocator);
        const rowsArray = await this.page.locator(this.containerLocator).allTextContents();
        const recordsFoundText = await this.page.getByText('Records Found').textContent();
        const itemCount = rowsArray.length - 1;
        const recordsFoundCount = parseInt(recordsFoundText.match(/\d+/)[0], 10);
        return itemCount === recordsFoundCount;
    }
    async checkSkillsRecords() {
        await this.navigateToAdminPage();
        await this.qualificationsButton.click();
        await this.qualificationsButtonListedItem1.click(); // Skills
        await this.page.waitForSelector(this.containerLocator);
        const rowsArray = await this.page.locator(this.containerLocator).allTextContents();
        const recordsFoundText = await this.page.getByText('Records Found').textContent();
        const itemCount = rowsArray.length - 1;
        const recordsFoundCount = parseInt(recordsFoundText.match(/\d+/)[0], 10);
        return itemCount === recordsFoundCount;
    }
    async checkEducationRecords() {
        await this.navigateToAdminPage();
        await this.qualificationsButton.click();
        await this.qualificationsButtonListedItem2.click(); // Education
        await this.page.waitForSelector(this.containerLocator);
        const rowsArray = await this.page.locator(this.containerLocator).allTextContents();
        const recordsFoundText = await this.page.getByText('Records Found').textContent();
        const itemCount = rowsArray.length - 1;
        const recordsFoundCount = parseInt(recordsFoundText.match(/\d+/)[0], 10);
        return itemCount === recordsFoundCount;
    }
    async checkLicensesRecords() {
        await this.navigateToAdminPage();
        await this.qualificationsButton.click();
        await this.qualificationsButtonListedItem3.click(); // Licenses
        await this.page.waitForSelector(this.containerLocator);
        const rowsArray = await this.page.locator(this.containerLocator).allTextContents();
        const recordsFoundText = await this.page.getByText('Records Found').textContent();
        const itemCount = rowsArray.length - 1;
        const recordsFoundCount = parseInt(recordsFoundText.match(/\d+/)[0], 10);
        return itemCount === recordsFoundCount;
    }
    async checkLanguagesRecords() {
        await this.navigateToAdminPage();
        await this.qualificationsButton.click();
        await this.qualificationsButtonListedItem4.click(); // Languages
        await this.page.waitForSelector(this.containerLocator);
        const rowsArray = await this.page.locator(this.containerLocator).allTextContents();
        const recordsFoundText = await this.page.getByText('Records Found').textContent();
        const itemCount = rowsArray.length - 1;
        const recordsFoundCount = parseInt(recordsFoundText.match(/\d+/)[0], 10);
        return itemCount === recordsFoundCount;
    }
    async checkMembershipsRecords() {
        await this.navigateToAdminPage();
        await this.qualificationsButton.click();
        await this.qualificationsButtonListedItem5.click(); // Memberships
        await this.page.waitForSelector(this.containerLocator);
        const rowsArray = await this.page.locator(this.containerLocator).allTextContents();
        const recordsFoundText = await this.page.getByText('Records Found').textContent();
        const itemCount = rowsArray.length - 1;
        const recordsFoundCount = parseInt(recordsFoundText.match(/\d+/)[0], 10);
        return itemCount === recordsFoundCount;
    }}