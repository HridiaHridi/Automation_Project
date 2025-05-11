const checkOutOverviewObj = require('../pageobjects/check_overview');

class CheckoutOverviewActions {
    async getItemsDetails() {
        const items = [];
        const itemElements = await checkOutOverviewObj.items;
        for (const item of itemElements) {
            const name = await item.$('.inventory_item_name').getText();
            const priceText = await item.$('.inventory_item_price').getText();
            items.push({
                name: name,
                price: parseFloat(priceText.replace('$', ''))
            });
        }
        return items;
    }

    async getTotalPrice() {
        const totalText = await checkOutOverviewObj.totalPrice.getText();
        return parseFloat(totalText.replace('Total: $', ''));
    }

    async finishPurchase() {
        await checkOutOverviewObj.finishButton.click();
    }
}
module.exports = new CheckoutOverviewActions();