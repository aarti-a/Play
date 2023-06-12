const{test,expect} = require ('@playwright/test')

test("FirstTest", async function({page}){
expect(10).toBe(10)
})

test('SecondTest',async function ({page}){
expect(100).toBe(100)
})

test.skip('ThirdTest', async function({page}){
expect(2.0).toBe(2.0)
})

test("FourthTest", async function({page}){
expect ("Aarti Arora").toContain("Ar")
})