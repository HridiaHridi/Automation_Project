const loginPage = require("../pageobjects/login_object");

class LoginActions {
    async login(username, password) {
        await loginPage.username.setValue(username);
        await loginPage.password.setValue(password);
        await loginPage.loginButton.click();
    }
    //Task1 
    async verifyErrorMessage() {
        
        await loginPage.errorMessage.waitForDisplayed();
        await expect(loginPage.errorMessage).toHaveText(
           /Epic sadface: Sorry, this user has been locked out./i
        );
    }
    //for task2
    async verifySuccessfulLogin(){
        await expect(browser).toHaveUrl(expect.stringContaining('/inventory.html'));
        try {
            // Handle potential alert first
            await browser.acceptAlert();
        } catch (e) {
            // No alert present, continue
        }
    }
}

module.exports = new LoginActions();
