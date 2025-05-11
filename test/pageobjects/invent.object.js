class InventoryPage{
    get hamburgerMenu() { 
        return $('#react-burger-menu-btn'); 
    }
    get resetAppState() { 
        return $('#reset_sidebar_link'); 
    }
    get hamburgerCrossMenu() {
        return $('#react-burger-cross-btn')
    }
    get addToCartButtons() { 
        return $$('button[data-test^="add-to-cart"]'); 
    }
    get checkOutCart(){
        return $("//a[@data-test='shopping-cart-link']");
    }
    get logoutLink() { 
        return $('#logout_sidebar_link');
    }
    get inventoryItems() { 
        return $$('.inventory_item'); 
    }
    get productSortDropdown() { 
        return $('.product_sort_container'); 
    }
    get sortZtoA(){
        return $("//option[@value='za' and contains(text(), 'Name (Z to A)')]");
    }
}
module.exports = new InventoryPage();
