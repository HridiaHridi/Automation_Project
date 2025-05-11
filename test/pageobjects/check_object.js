class CheckoutInfoPage {
    get firstName() { 
        return $('#first-name'); 
    }
    get lastName() { 
        return $('#last-name'); 
    }
    get postalCode() { 
        return $('#postal-code');
    }
    get continueButton() { 
        return $('#continue'); 
    }
}
module.exports = new CheckoutInfoPage();