const inventoryObjPage = require('../pageobjects/invent.object');

class InventoryActions{
    async hamburgerMenu(){
       // await browser.acceptAlert();
        await inventoryObjPage.hamburgerMenu.click();
    }
    async resetAppstate(){
        await inventoryObjPage.resetAppState.click();
        await browser.pause(5000);
    }
    async crossHamburgerMenu(){
        await inventoryObjPage.hamburgerCrossMenu.click();
    }
    async addToCart(n = 3) {
        const addedItems = [];
        for (let i = 0; i < n; i++) {
            const item = inventoryObjPage.inventoryItems[i];
            const name = await item.$('.inventory_item_name').getText();
            const price = parseFloat((await item.$('.inventory_item_price').getText()).replace('$', ''));
            await inventoryObjPage.addToCartButtons[i].click();
            addedItems.push({ name, price });
        }
        return addedItems;
    }
async checkOutCart(){
        await inventoryObjPage.checkOutCart.click();
    }
    async logOut(){
        await inventoryObjPage.logoutLink.click();
    }
    async sortProductsZtoA() {
        await inventoryObjPage.productSortDropdown.click();
        await browser.pause(2000);
        await inventoryObjPage.sortZtoA.click();
        await browser.pause(3000);
    }
    async addFirstItemToCart() {
        const items = await $$('.inventory_item');
        await items[0].$('button').waitForClickable();
        await items[0].$('button').click();
    }
}
module.exports = new InventoryActions();