const {test,expect} = require('@playwright/test')


test("Verify Error Message ", async function({page}){
   // await page.goto('https://www.fredmeyerjewelers.com/')
   
    await page.goto('https://www.fredmeyer.com/')

    await page.getByLabel('Email Address').click();
    await page.getByLabel('Email Address').fill('Email');
    await page.getByLabel('Password', { exact: true }).click();
    await page.getByLabel('Password', { exact: true }).fill('password');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
     const comp = page.getByAltText('Account Menu')
     await expect(comp).toHaveValue("Aarti")
 })
