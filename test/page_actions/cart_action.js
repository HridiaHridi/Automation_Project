const cartObjectPage = require('../pageobjects/cart_object');

class cartPageActions {
    async getItemDetails() {
        await browser.waitUntil(async () => {
            const items = await cartObjectPage.items;
            return items.length > 0;
        }, {
            timeout: 5000,
            timeoutMsg: 'Cart items never appeared'
        });
        
        const cartItems = [];
        const itemElements = await cartObjectPage.items;
        
        for (const item of itemElements) {
            const name = await item.$('.inventory_item_name').getText();
            const priceText = await item.$('.inventory_item_price').getText();
            cartItems.push({
                name: name,
                price: parseFloat(priceText.replace('$', ''))
            });
        }
        
        return cartItems;
    }

    async proceedToCheckout() {
        await browser.pause(5000);
        await cartObjectPage.checkoutButton.click();
    }
}

module.exports = new cartPageActions();