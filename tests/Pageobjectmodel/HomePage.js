const {expect} = require("@playwright/test");
class HomePage {
    constructor(page) {
        this.page = page;
        this.consentButton = page.locator("button[aria-label='Consent']");
        this.sliderCarousel = page.locator("div[id='slider-carousel']");
        this.productsIcon = page.locator("//i[@class='material-icons card_travel']");
        this.signupLoginLink = page.locator("text='Signup / Login'");
    }

    async goto() {
        await this.page.goto("https://www.automationexercise.com/");
        
    }

    async acceptCookies() {
        await this.consentButton.click();
    }

    async verifySliderVisible() {
        await expect(this.sliderCarousel).toBeVisible();
    }

    async goToProducts() {
        await this.productsIcon.click();
    }

    async goToLogin() {
        await this.signupLoginLink.click();
    }
}

module.exports = {HomePage};
