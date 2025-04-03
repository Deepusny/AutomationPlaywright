class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginEmail = page.locator("//input[@data-qa='login-email']");
        this.loginPassword = page.locator("//input[@data-qa='login-password']");
        this.loginButton = page.locator("//button[@data-qa='login-button']");
    }

    async login(email, password) {
        await this.loginEmail.fill(email);
        await this.loginPassword.fill(password);
        await this.loginButton.click();
    }
}

module.exports = {LoginPage};
