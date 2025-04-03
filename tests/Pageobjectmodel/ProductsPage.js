class ProductsPage {
    constructor(page) {
        this.page = page;
    }

    async addProductToCart(productId) {
        const productLocator = this.page.locator(`//a[@data-product-id='${productId}']`);
        await productLocator.first().hover();
        await productLocator.locator("i").first().click();
        await this.page.getByRole("button", { name: "Continue Shopping" }).click();
    }
}

module.exports = {ProductsPage};