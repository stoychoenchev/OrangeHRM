exports.HomePage = class HomePage {

    constructor(page) {

        this.page = page
        this.adminButton = page.getByRole('link', { name: 'Admin' });
        this.pimButton = page.getByRole('link', { name: 'PIM' });
        this.leaveButton = page.getByRole('link', { name: 'Leave' });
        this.timeButton = page.getByRole('link', { name: 'Time' });
        this.recruitmentButton = page.getByRole('link', { name: 'Recruitment' });
        this.myInfoButton = page.getByRole('link', { name: 'My Info' });
        this.performanceButton = page.getByRole('link', { name: 'Performance' });
        this.dashboardButton = page.getByRole('link', { name: 'Dashboard' });
        this.directoryButton = page.getByRole('link', { name: 'Directory' });
        this.maintenanceButton = page.getByRole('link', { name: 'Maintenance' });
        this.claimButton = page.getByRole('link', { name: 'Claim' });
        this.buzzButton = page.getByRole('link', { name: 'Buzz' });
        this.hideNavigationButton = page.locator('xpath=//button[contains(@class, "oxd-main-menu-button")]');
        this.upgradeButton = page.getByRole('button', { name: 'Upgrade' });
        this.profilePicture = page.getByRole('banner').getByRole('img', { name: 'profile picture' });
        this.bookButton = page.locator("//a[@href='/open-source/upgrade-to-advanced#demo-submit']");
        this.logOutButton = page.getByRole('menuitem', { name: 'Logout' });
        this.supportButton = page.getByRole('menuitem', { name: 'Support' });
        this.employeeName = page.getByPlaceholder('Type for hints...');
        this.employeeNameFilled = page.getByRole('option').first();
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.editButton = page.locator("//*[@class and contains(concat(' ', normalize-space(@class), ' '), ' bi-pencil-fill ')]");

    }


    async clickAndVerifyThatWeAreNavigatedToTheUpgradePage() {
        
        await this.upgradeButton.click({ force: true });
        
    }
    
    async logout(){
        await this.profilePicture.click();
        await this.logOutButton.click();
        
    }

    async clickSupportItem(){
        await this.profilePicture.click();
        await this.supportButton.click();
    }

    async searchForEmployee(){
        await this.pimButton.click();
        await this.employeeName.first().click();
        await this.employeeName.first().fill('A');
        await this.page.waitForTimeout(5000);
        await this.employeeNameFilled.click();
        await this.searchButton.click();
        await this.editButton.click();
        await this.page.getByPlaceholder('First Name').click();
        await this.page.getByPlaceholder('First Name').fill('AaaTestUpdatePlay1211');
        await this.page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button').click();


    }

}