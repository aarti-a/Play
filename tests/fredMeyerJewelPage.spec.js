const {test,expect} = require('@playwright/test')

test("Verify FredMeyer Jwellery Title", async function({page}){
   await page.goto('https://www.fredmeyerjewelers.com/')
        const url = await page.url() 
        const title = await page.title()
        console.log(title)
        await expect(page).toHaveURL(/fred/)
        await expect(page).toHaveTitle('Diamonds, Watches, Jewelry & Engagement Rings | Fred Meyer Jewelers')
})

