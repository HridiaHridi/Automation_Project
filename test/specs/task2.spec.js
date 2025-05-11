const loginActions = require("../page_actions/login_action");
const inventoryActions = require('../page_actions/invent_action');
const cartActions = require('../page_actions/cart_action');
const checkoutInfoActions = require('../page_actions/check_info');
const checkOverviewActions = require('../page_actions/check_overview');
const checkoutCompleteActions = require('../page_actions/success_action');

const STANDARD_USER = {
    username: "standard_user",
    password: "secret_sauce"
};

describe("Q2: Standard User Test", () => {
    let savedCartItems;
    it("should display correct page", async () => {
        await loginActions.login(
            STANDARD_USER.username, 
            STANDARD_USER.password
        );
        await loginActions.verifySuccessfulLogin();
    });
    it("Reset app state via hamburger menu", async () =>{
        await inventoryActions.hamburgerMenu();
        await inventoryActions.resetAppstate();
        await inventoryActions.crossHamburgerMenu();
    });
    it("Add three product to cart and checkout cart", async () =>{
        await inventoryActions.addToCart();
        await browser.pause(5000);
        await inventoryActions.checkOutCart();
        await browser.pause(5000);
        savedCartItems = await cartActions.getItemDetails();
        await cartActions.proceedToCheckout();
        await browser.pause(5000);
    });
    it('Complete Checkout and Verify Details', async () => {
        await checkoutInfoActions.fillInfo('Hridita', 'Hridi', '5252');
    });
    it('Verify Product Name and Prices', async () => {
         // Verify product names and prices
        const overviewItems = await checkOverviewActions.getItemsDetails();
        expect(overviewItems).toEqual(savedCartItems);

        // Verify total price (including tax)
        const totalPrice = await checkOverviewActions.getTotalPrice();
        const itemTotal = savedCartItems.reduce((sum, item) => sum + item.price, 0);
        const tax = itemTotal * 0.08; // Adjust tax rate as needed
        const expectedTotal = itemTotal + tax;
        expect(totalPrice).toBeCloseTo(expectedTotal, 2);

        await checkOverviewActions.finishPurchase();
        await browser.pause(5000); 
    });
    it('Verify Order Success Message and Reset state than logout', async () => {
        await checkoutCompleteActions.verifySuccessMessage();
        await browser.pause(5000);
        await inventoryActions.hamburgerMenu();
        await browser.pause(5000);
        await inventoryActions.resetAppstate();
        await browser.pause(5000);
        await inventoryActions.logOut();
        await browser.pause(5000); 
    });
});