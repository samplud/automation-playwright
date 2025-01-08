const { } = require('@playwright/test');
const formPage = require('../../pages/orange_hrm/orange_hrm_page.json')

const loginHRM = async(page) => {
	await page.goto(process.env.ORANGEHRM_LOGIN_PAGE)
	await page.locator(formPage.loginPage.txtUsername).fill(process.env.OHRM_USERNAME)
	await page.locator(formPage.loginPage.txtPassword).fill(process.env.OHRM_USERPASSWORD)
	await page.locator(formPage.loginPage.btnSubmit).click()
}

module.exports = {
	loginHRM
}
