const { test, expect } = require('@playwright/test');
const formPage = require('../../pages/orange_hrm/orange_hrm_page.json')

const testCase = {
	describe: 'Login Page',
	describePositive: 'Positive Testing',
	describeNegative: 'Negative Testing',
	positive: {
		addEmployee: 'As a user, I can add employee'
	}
};

test.describe(`${testCase.describe}`, () => {
    test.describe(testCase.describePositive, () => {
		test(`${testCase.positive.addEmployee}`, async({page}) => {
			await page.goto(process.env.ORANGEHRM_LOGIN_PAGE)
			await page.locator(formPage.loginPage.txtUsername).fill(process.env.OHRM_USERNAME)
			await page.locator(formPage.loginPage.txtPassword).fill(process.env.OHRM_USERPASSWORD)
			await page.locator(formPage.loginPage.btnSubmit).click()
			await expect(page.locator(formPage.dashboardPage.lblDashboard)).toHaveText('Dashboard')

			// add employee
			await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee')
			await page.locator(formPage.dashboardPage.txtFirstName).fill('John')
			await page.locator(formPage.dashboardPage.txtMiddleName).fill('Jane')
			await page.locator(formPage.dashboardPage.txtlastName).fill('Doe')
			await page.locator(formPage.dashboardPage.btnSubmitPIM).click()
			await expect(page.locator(formPage.dashboardPage.lblProfilePIM)).toHaveText('John Doe', {timeout: 15000})
		});
	});

});
