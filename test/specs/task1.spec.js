const loginActions = require("../page_actions/login_action");
const LOCKED_USER = {
    username: "locked_out_user",
    password: "secret_sauce"
};

describe("Q1: Locked User Test", () => {
    it("should display correct error message", async () => {
        await loginActions.login(
            LOCKED_USER.username, 
            LOCKED_USER.password
        );
        await loginActions.verifyErrorMessage();
    });
});