const { test, expect } = require('@playwright/test');
const formPage = require('../../pages/orange_hrm/orange_hrm_page.json')
const loginModule = require('../modules/moduleLogin');

const testCase = {
	describe: 'Dashboard Page',
	describePositive: 'Positive Testing',
	describeNegative: 'Negative Testing',
	positive: {
		setAnnualLeave: 'As an admin, I can set annual leave'
	}
};

test.describe(`${testCase.describe}`, () => {
    test.describe(testCase.describePositive, () => {
		test.beforeEach('Login', async ({page}) => {
			await loginModule.loginHRM(page);
		})
		test(`${testCase.positive.setAnnualLeave}`, async({page}) => {
			await expect(page.locator(formPage.dashboardPage.lblDashboard)).toHaveText('Dashboard')
			await page.locator(formPage.dashboardPage.quickLaunchAssignLeave).click()
			await expect(page.locator(formPage.assignLeave.lblAssignLeave)).toHaveText('Assign Leave')
		});
	});
});
