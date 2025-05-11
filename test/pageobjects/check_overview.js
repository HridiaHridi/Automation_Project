class CheckoutOverviewPage {
    get items() {
        return $$('.cart_item');
    }
    get totalPrice() {
        return $('.summary_total_label');
    }
    get finishButton() {
        return $('#finish');
    }
}
module.exports = new CheckoutOverviewPage()