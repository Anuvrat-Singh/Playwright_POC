const { test, expect } = require('@playwright/test')

test('Homepage', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/')
    const pageTitle = page.title()
    console.log('title = ', pageTitle)
    await expect(page).toHaveTitle('STORE')
    await expect(page).toHaveURL('https://www.demoblaze.com/')
    await page.close()
})