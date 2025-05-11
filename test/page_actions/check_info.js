const checkInfoObj = require('../pageobjects/check_object');

class CheckoutInfoActions {
    async fillInfo(firstName, lastName, postalCode) {
        await browser.pause(5000);
        await checkInfoObj.firstName.setValue(firstName);
        await checkInfoObj.lastName.setValue(lastName);
        await checkInfoObj.postalCode.setValue(postalCode);
        await browser.pause(5000);
        await checkInfoObj.continueButton.click();
        await browser.pause(5000);
    }
}
module.exports = new CheckoutInfoActions();