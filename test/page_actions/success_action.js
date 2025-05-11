const checkoutCompletePage = require('../pageobjects/success_object');

class CheckoutCompleteActions {
    async verifySuccessMessage() {
        // Verify header text
        await checkoutCompletePage.successHeader.waitForDisplayed();
        const headerText = await checkoutCompletePage.successHeader.getText();
        expect(headerText).toBe('Thank you for your order!');

        // Verify description text
        await checkoutCompletePage.successText.waitForDisplayed();
        const descriptionText = await checkoutCompletePage.successText.getText();
        expect(descriptionText).toContain('Your order has been dispatched');
    }
}

module.exports = new CheckoutCompleteActions();