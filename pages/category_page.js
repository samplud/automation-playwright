const { expect } = require('@playwright/test')

exports.CategoryElectronicsPage = class CategoryElectronicsPage {

    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */
    constructor(page){
        this.page = page;
        this.searchTextbox = page.locator('#APjFqb');
    }

    async cellPhoneAccessories(){
        await this.page.goto('https://www.ebay.com/b/Cell-Phones-Smart-Watches-Accessories/15032/bn_1865441');
    }
}
