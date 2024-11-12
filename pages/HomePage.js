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
        

    }


    
    


}