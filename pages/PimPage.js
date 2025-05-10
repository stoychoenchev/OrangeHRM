exports.PimPage = class PimPage {
    constructor(page) {
        this.page = page
        this.pimAddbutton =this.page.locator(".oxd-icon.bi-plus.oxd-button-icon");
        this.pimTextAssertion = this.page.locator(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module");
        this.pimFirstNameField = this.page.locator("input[placeholder='First Name']");
        this.pimMiddleNameField = this.page.locator("input[placeholder='Middle Name']");
        this.pimLastNameField = this.page.locator("input[placeholder='Last Name']");
        this.pimSaveButton = this.page.locator("button[type='submit']");
        this.pimEmployeerName = this.page.locator(".orangehrm-edit-employee-name");
        this.employeeNameField = this.page.locator(".oxd-input-group")
        .filter({ has: this.page.getByText('Employee Name')})
        .locator("input[placeholder='Type for hints...']");
        this.matchedName = this.page.locator('div.oxd-table-cell:has-text("Test Testov")');
        this.employeeId = this.page.locator("div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']");
        this.searchButton = this.page.locator("button[type='submit']");
    }
    async navigateToPimPage() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
        await this.page.waitForLoadState('load');
    }
    async PimPageAddEmployee() {
        const uniqueId = `ID${Date.now().toString().slice(-5)}`; // Creates a unique username for each test run
       await this.pimAddbutton.click();
       await this.pimFirstNameField.fill("Koko");
       await this.pimMiddleNameField.fill("Koko");
       await this.pimLastNameField.fill("Koko");
       await this.employeeId.fill(uniqueId);
       await this.pimSaveButton.click();
    }

    async searchForUserRole(){
       await this.navigateToPimPage();
       await this.employeeNameField.fill("Koko Koko");
       await this.searchButton.click();
       return this.matchedName;
    }
    }