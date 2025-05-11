class CheckoutCompletePage {
    get successHeader() {
        return $('.complete-header');
    }
    
    get successText() {
        return $('.complete-text');
    }
}
module.exports = new CheckoutCompletePage();