const { test, expect } = require('@playwright/test');
const formPage = require('../../pages/orange_hrm/orange_hrm_page.json')

const testCase = {
	describe: 'Login Page',
	describePositive: 'Positive Testing',
	describeNegative: 'Negative Testing',
	positive: {
		successLogin: 'As a user, I can login to my account'
	},
	negative: {
		wrongPassword: 'As a user, I can not login because wrong password',
		wrongUsername: 'As a user, I can not login because wrong username',
		emptyField: 'As a user, I can not login because empty username & password',
		emptyPassword: 'As a user, I can not login because empty password',
		emptyEmail: 'As a user, I can not login because empty email'
	}
};

test.describe(`${testCase.describe}`, () => {
    test.describe(testCase.describePositive, () => {
		test(`${testCase.positive.successLogin}`, async({page}) => {
			await page.goto(process.env.ORANGEHRM_LOGIN_PAGE)
			await page.locator(formPage.loginPage.txtUsername).fill(process.env.OHRM_USERNAME)
			await page.locator(formPage.loginPage.txtPassword).fill(process.env.OHRM_USERPASSWORD)
			await page.locator(formPage.loginPage.btnSubmit).click()
			await expect(page.locator(formPage.dashboardPage.lblDashboard)).toHaveText('Dashboard')
		});
	});

	test.describe(testCase.describeNegative, () => {
		test(`${testCase.negative.wrongPassword}`, async({page}) => {
			await page.goto(process.env.ORANGEHRM_LOGIN_PAGE, { waitUntil: 'networkidle', timeout: 30000 });
            await page.waitForSelector(formPage.loginPage.txtUsername, { timeout: 15000 });
			await page.locator(formPage.loginPage.txtUsername).fill(process.env.OHRM_USERNAME)
			await page.locator(formPage.loginPage.txtPassword).fill('admin')
			await page.locator(formPage.loginPage.btnSubmit).click()
			await expect(page.locator(formPage.loginPage.lblInvalidCredential)).toHaveText('Invalid credentials', {timeout: 15000})
		});
		test(`${testCase.negative.wrongUsername}`, async({page}) => {
			await page.goto(process.env.ORANGEHRM_LOGIN_PAGE)
			await page.locator(formPage.loginPage.txtUsername).fill('user')
			await page.locator(formPage.loginPage.txtPassword).fill(process.env.OHRM_USERPASSWORD)
			await page.locator(formPage.loginPage.btnSubmit).click()
			await expect(page.locator(formPage.loginPage.lblInvalidCredential)).toHaveText('Invalid credentials')
		});
		test(`${testCase.negative.emptyField}`, async({page}) => {
			await page.goto(process.env.ORANGEHRM_LOGIN_PAGE)
			await page.locator(formPage.loginPage.txtUsername).fill('')
			await page.locator(formPage.loginPage.txtPassword).fill('')
			await page.locator(formPage.loginPage.btnSubmit).click()
			await expect(page.locator(formPage.loginPage.lblRequired).first()).toHaveText('Required')
		});
		test(`${testCase.negative.emptyPassword}`, async({page}) => {
			await page.goto(process.env.ORANGEHRM_LOGIN_PAGE)
			await page.locator(formPage.loginPage.txtUsername).fill(process.env.OHRM_USERNAME)
			await page.locator(formPage.loginPage.txtPassword).fill('')
			await page.locator(formPage.loginPage.btnSubmit).click()
			await expect(page.locator(formPage.loginPage.lblRequired)).toHaveText('Required')
		});
		test(`${testCase.negative.emptyEmail}`, async({page}) => {
			await page.goto(process.env.ORANGEHRM_LOGIN_PAGE)
			await page.locator(formPage.loginPage.txtUsername).fill('')
			await page.locator(formPage.loginPage.txtPassword).fill(process.env.OHRM_USERPASSWORD)
			await page.locator(formPage.loginPage.btnSubmit).click()
			await expect(page.locator(formPage.loginPage.lblRequired)).toHaveText('Required')
		});
	});
});
