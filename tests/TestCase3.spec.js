const { test, expect } = require("@playwright/test")
test.only('Login User with incorrect email and password', async ({ page }) => {
    // Navigate to the site
    await page.goto('https://www.automationexercise.com/')
    //Locators
    const consentButton = page.locator(".fc-button-label").filter({ hasText: "Consent" })
    const homepage = page.locator("//i[@class='fa fa-home']") 
    const signupLoginButton = page.getByText(' Signup / Login')
    const loginHeader = page.getByText('Login to your account')
    const emailInput = page.locator("//input[@data-qa='login-email']")
    const passwordInput = page.locator("//input[@data-qa='login-password']")
    const loginButton = page.locator("//button[@data-qa='login-button']")
    const errorMessage = page.getByText("Your email or password is incorrect!")
    //Actions
    await consentButton.waitFor(); // Waiting for the element
    await consentButton.click(); // Clicking on consent button
    await homepage.waitFor() // Ensure home page is loaded before verification
    await signupLoginButton.click(); // Click on Signup/Login button
    await emailInput.fill("923arjun@gmail.com"); // Enter incorrect email
    await passwordInput.fill("arjun123@gmail.com"); // Enter incorrect password
    await loginButton.click(); // Click on login button
    //Assertions
    await expect(homepage).toBeVisible()// Verify homepage section is visible
    await expect(loginHeader).toBeVisible() // Verify 'Login to your account' is visible
    await expect(errorMessage).toBeVisible() // Verify error message is visible
})
