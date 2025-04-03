const { test, expect } = require("@playwright/test")

test('Verify Test Cases Page', async ({ page }) => {
    //Locators
    const consentButton = page.locator(".fc-button-label").filter({ hasText: "Consent" })
    const homepage = page.locator("//i[@class='fa fa-home']") 
    const testCasesButton = page.locator("//i[@class='fa fa-list']").first()
    const testCasesHeader = page.locator("h2:has-text('Test Cases')")

    // Actions
    await page.goto('https://www.automationexercise.com/')
    await consentButton.waitFor() // Ensure consent button appears before clicking
    await consentButton.click()
    await homepage.waitFor() // Ensure home page is loaded before verification
    await testCasesButton.click()

    // Assertions
    await expect(homepage).toBeVisible()// Verify homepage section is visible
    await expect(testCasesHeader).toBeVisible() // Verify test cases page is displayed
});
