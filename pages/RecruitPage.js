exports.RecruitPage = class RecruitPage {
    constructor(page) {
        this.page = page
        this.recruitmentButton = page.getByRole('link', { name: 'Recruitment' });
        this.addInRecruitmentButton = page.getByRole('button', { name: ' Add' });
        this.firstNameField = page.getByPlaceholder('First Name');
        this.middleNameField = page.getByPlaceholder('Middle Name');
        this.lastNameField = page.getByPlaceholder('Last Name');
        this.vacancyDropDown = page.locator('form i').first();
        this.seniorQaOption = page.getByText('Senior QA Lead');
        this.emailField = page.getByPlaceholder('Type here').first()
        this.saveButton = page.getByRole('button', { name: 'Save' });
    }
    async navigateToRecruitmentPage() {
        await this.recruitmentButton.click();
        await this.page.waitForLoadState('networkidle');
    }
    async addRecruitment(){
        await this.navigateToRecruitmentPage();
        await this.addInRecruitmentButton.click();
        await this.firstNameField.fill('Stoycho');
        await this.middleNameField.fill('Tarkanaev');
        await this.lastNameField.fill('Tainov');
        await this.vacancyDropDown.click();
        await this.seniorQaOption.click();
        await this.emailField.fill('abekvomepitash@abv.bg');
        await this.saveButton.click();
    }
}