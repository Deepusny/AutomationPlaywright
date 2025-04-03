class CartPage {
    constructor(page) {
        this.page = page;
        this.cartLink = page.getByRole("link", { name: " Cart" });
        this.cartTableRows = page.locator("//table[@id='cart_info_table']/tbody/tr");
    }

    async goToCart() {
        await this.cartLink.click();
    }

    async getCartDetails() {
        let totalItems = await this.cartTableRows.count();
        let firstProductName = await this.page.locator("//table[@id='cart_info_table']/tbody/tr[1]/td[2]/h4/a").textContent();
        let secondProductName = await this.page.locator("//table[@id='cart_info_table']/tbody/tr[2]/td[2]/h4/a").textContent();
        let firstProductPrice = await this.page.locator("//table[@id='cart_info_table']/tbody/tr[1]/td[3]/p").textContent();
        let secondProductPrice = await this.page.locator("//table[@id='cart_info_table']/tbody/tr[2]/td[3]/p").textContent();

        return {
            totalItems,
            firstProduct: { name: firstProductName, price: firstProductPrice },
            secondProduct: { name: secondProductName, price: secondProductPrice }
        };
    }
}

module.exports = {CartPage};