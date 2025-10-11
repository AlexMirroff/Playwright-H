import { test, expect } from "@playwright/test"

test.describe("Sign up positive", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("/")
    })

    test("Successful sign up with valid data", async ({ page }) => {
        await page.locator("text=Sign up").click()
        await page.locator("#signupName").fill("Alex")
        await page.locator("#signupLastName").fill("Mirroff")
        await page.locator("#signupEmail").fill(`mirhaiazov+${Date.now()}@gmail.com`)
        await page.locator("#signupPassword").fill("Aa34567890")
        await page.locator("#signupRepeatPassword").fill("Aa34567890")
        await page.locator("text=Register").click()
        await expect(page.locator("h1")).toHaveText("Garage")
    })

    test("Close sign up pop up", async ({ page }) => {
        await page.locator("text=Sign up").click()
        await expect(page.locator("h4.modal-title")).toBeVisible()
        await page.locator("button.close").click()
        await page.waitForTimeout(300) // wait for animation
        await expect(page.locator("h4.modal-title")).not.toBeVisible()
    })
})