const {test,expect}=require("@playwright/test")
test('test case',async ({page})=>{
//navigate to the site
await page.goto( 'https://www.automationexercise.com' )
//accept cookies by clicking on consent button by using css selector
await page.locator("button[aria-label='Consent']").click()
//click on signup by using xpath
await page.locator("//ul[@class='nav navbar-nav']/li[4]/a/i").click()
//enter name in the text box using getby role method 
await page.getByRole("textbox",{name:'Name'}).fill("BHavana")
//genereating a random 3 digit number

let a=Math.floor((Math.random()*999)+1000)
let eamiladdress='Bhavana'+a+"@test.com"
//as email id is present in 3 places we have used css selector and clicking on sigup button
await page.locator("input[data-qa='signup-email']").fill(eamiladdress)
//click on signup button using css selector
await page.locator("button[data-qa='signup-button']").click()
//using getbylabel for the radio button
await page.getByLabel('Mrs.').click()
//filling password using getbyrole
await page.getByRole("textbox",{name:"Password *"}).fill("Arjun123")
//selecting static dropdowns using xpath
await page.locator("//select[@id='days']").selectOption("11")
await page.locator("//select [@data-qa='months']").selectOption("1")
await page.locator("//select [@id='years']").selectOption("1998")
//checking the check boxes
await page.getByText('Sign up for our newsletter!').click()
await page.getByLabel('Receive special offers from our partners!').click()
//filling address information
await page.getByRole("textbox",{name:'First name *'}).fill('Bhavana')
await page.getByRole("textbox",{name:'Last name *'}).fill('N')
//as there are two elements identified we will use first() for filling company name
await page.getByRole("textbox",{name:'Company'}).first().fill('ArhaanTech')
//to fill address
await page.locator("[data-qa='address']").fill("Ganesh Nagar")
//to fill address 2
await page.getByRole("textbox",{name:'Address 2'}).fill('Road no 5')
await page.locator("[data-qa='country']").selectOption("Australia")
await page.getByRole("textbox",{name:'State *'}).fill('Victoria')
await page.locator("[data-qa='city']").fill('Bendigo')
await page.locator("[data-qa='zipcode']").fill('109014')
await page.getByRole("textbox",{name:'Mobile Number *'}).fill('7774551263')
//click on create account
await page.getByText('Create Account').click()
await page.getByText('Account Created! Congratulations! Your new account has been successfully').click()
await page.getByText('You can now take advantage of').click()
await page.getByRole('link', { name: 'Continue' }).click()
});
