const {test,expect} = require('@playwright/test')


test("Verify FredMeyer Jwellery Title", async function({page}){
   // await page.goto('https://www.fredmeyerjewelers.com/')
   
    await page.goto('https://www.fredmeyerjewelers.com')
    await page.getByAltText('userInfo').click();
    await expect(page).toHaveURL(/Login/)
    await page.getByPlaceholder('*Email Address').type('email')
    await page.getByPlaceholder('*Password').type('password')
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL(/dashboard/)

 })
