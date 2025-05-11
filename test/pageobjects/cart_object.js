class cartObjPage{
    get checkoutButton() { 
        return $('#checkout');
    }
    get items() { 
        return $$('.cart_item'); 
    }
}
module.exports = new cartObjPage();