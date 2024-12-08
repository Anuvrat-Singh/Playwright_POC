import { test, expect } from '@playwright/test'

test('catching multiple locators', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/')

    page.waitForSelector
    const products = await page.$$('//div[@id="tbodyid"]//h4/a')

    for (prod of products) {
        const name = await prod.textContent()
        console.log(name)
    }
})