const {test,expect} = require('@playwright/test')


test("Verify Error Message ", async function({page}){
   // await page.goto('https://www.fredmeyerjewelers.com/')
   
    await page.goto('https://www.fredmeyerjewelers.com/Profiles/Login.aspx?returnUrl=%2F')
    await page.getByPlaceholder('*Email Address').type('email')
    await page.getByPlaceholder('*Password').type('password')
    await page.locator("//button[@type='submit']").click()
    await page.waitForTimeout(7000); // hard wait for 1000ms
    const  errorMessage = await page.locator("//div[contains(@class,\'alert-danger\')]").textContent()
    console.log("Error Message is "+ errorMessage)
 })
