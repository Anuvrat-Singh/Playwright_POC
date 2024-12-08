const { test, expect } = require('@playwright/test')

test('locator practice 1', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/')
    await page.locator('id=login2').click()
    // await page.click('id=login2')    same action as above

    //enter username
    await page.locator('id=loginusername').click()
    await page.locator('id=loginusername').clear()
    await page.fill('id=loginusername', 'admin')
    await page.fill('id=loginpassword', 'admin')
    await page.click("button[onclick='logIn()']")
    const logoutButton = await page.locator('id=logout2')
    await expect(logoutButton).toBeVisible()

})