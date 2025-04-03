const { test, expect } = require("@playwright/test");
const {HomePage} = require('./Pageobjectmodel/HomePage');
const {ProductsPage} = require("./Pageobjectmodel/ProductsPage");
const {CartPage} = require("./Pageobjectmodel/CartPage");
const {LoginPage} = require("./Pageobjectmodel/LoginPage");
test("Add to cart", async ({ page }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const loginPage = new LoginPage(page);

    // Navigate to the site and accept cookies
    await homePage.goto();
    await homePage.acceptCookies();
    await homePage.verifySliderVisible();

    // Navigate to products and add items to cart
    await homePage.goToProducts();
    await productsPage.addProductToCart(1);
    await productsPage.addProductToCart(2);

    // Verify items in cart before login
    await cartPage.goToCart();
    let cartDetailsBeforeLogin = await cartPage.getCartDetails();
    console.log("Cart before login:", cartDetailsBeforeLogin);

    expect(cartDetailsBeforeLogin.totalItems).toEqual(2);

    // Login process
    await homePage.goToLogin();
    await loginPage.login("Bhavana8700@test.com", "Test123");

    // Verify cart after login
    await cartPage.goToCart();
    let cartDetailsAfterLogin = await cartPage.getCartDetails();
    console.log("Cart after login:", cartDetailsAfterLogin);

    // Assertions to verify cart persistence
    expect(cartDetailsAfterLogin).toEqual(cartDetailsBeforeLogin);
});
