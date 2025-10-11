import { test, expect } from "@playwright/test"

test.describe("Sign up negative", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("/")
        await page.locator("text=Sign up").click()
    })

    test.describe("Name field negative", () => {

        test("Name required msg", async ({ page }) => {
            await page.locator("#signupName").focus()
            await page.locator("#signupName").blur()
            await expect(page.locator("//form//p")).toHaveText("Name required")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Name with space", async ({ page }) => {
            await page.locator("#signupName").fill("Space inside name")
            await page.locator("#signupName").blur()
            await expect(page.locator("//form//p")).toHaveText("Name is invalid")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Name with digits", async ({ page }) => {
            await page.locator("#signupName").fill("Digit7")
            await page.locator("#signupName").blur()
            await expect(page.locator("//form//p")).toHaveText("Name is invalid")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Name with cyrillic", async ({ page }) => {
            await page.locator("#signupName").fill("Дратути")
            await page.locator("#signupName").blur()
            await expect(page.locator("//form//p")).toHaveText("Name is invalid")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Name with symbols", async ({ page }) => {
            await page.locator("#signupName").fill("Name+-")
            await page.locator("#signupName").blur()
            await expect(page.locator("//form//p")).toHaveText("Name is invalid")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Name length is less than min", async ({ page }) => {
            await page.locator("#signupName").fill("A")
            await page.locator("#signupName").blur()
            await expect(page.locator("//form//p")).toHaveText("Name has to be from 2 to 20 characters long")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Name length is more than max", async ({ page }) => {
            await page.locator("#signupName").fill("ProfessionalDeveloper")
            await page.locator("#signupName").blur()
            await expect(page.locator("//form//p")).toHaveText("Name has to be from 2 to 20 characters long")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Invalid Name length & spaces", async ({ page }) => {
            await page.locator("#signupName").fill("Professional Developer")
            await page.locator("#signupName").blur()
            await expect(page.locator(".invalid-feedback > p:first-child")).toHaveText("Name is invalid")
            await expect(page.locator(".invalid-feedback > p:last-child")).toHaveText("Name has to be from 2 to 20 characters long")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Border color for name is red", async ({ page }) => {
            await page.locator("#signupName").focus()
            await page.locator("#signupName").blur()
            await expect(page.locator("#signupName")).toHaveCSS("border-color", "rgb(220, 53, 69)")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })
    })

    test.describe("Last Name field negative", () => {

        test("Last Name required msg", async ({ page }) => {
            await page.locator("#signupLastName").focus()
            await page.locator("#signupLastName").blur()
            await expect(page.locator("//form//p")).toHaveText("Last name required")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Last Name with space", async ({ page }) => {
            await page.locator("#signupLastName").fill("Space inside name")
            await page.locator("#signupLastName").blur()
            await expect(page.locator("//form//p")).toHaveText("Last name is invalid")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Last Name with digits", async ({ page }) => {
            await page.locator("#signupLastName").fill("Digit8")
            await page.locator("#signupLastName").blur()
            await expect(page.locator("//form//p")).toHaveText("Last name is invalid")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Last Name with cyrillic", async ({ page }) => {
            await page.locator("#signupLastName").fill("Тест")
            await page.locator("#signupLastName").blur()
            await expect(page.locator("//form//p")).toHaveText("Last name is invalid")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Last Name with symbols", async ({ page }) => {
            await page.locator("#signupLastName").fill("Name!")
            await page.locator("#signupLastName").blur()
            await expect(page.locator("//form//p")).toHaveText("Last name is invalid")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Last Name length is less than min", async ({ page }) => {
            await page.locator("#signupLastName").fill("C")
            await page.locator("#signupLastName").blur()
            await expect(page.locator("//form//p")).toHaveText("Last name has to be from 2 to 20 characters long")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Last Name length is more than max", async ({ page }) => {
            await page.locator("#signupLastName").fill("ProfessionalDeveloper")
            await page.locator("#signupLastName").blur()
            await expect(page.locator("//form//p")).toHaveText("Last name has to be from 2 to 20 characters long")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Invalid Last Name length & spaces", async ({ page }) => {
            await page.locator("#signupLastName").fill("Professional Developer")
            await page.locator("#signupLastName").blur()
            await expect(page.locator(".invalid-feedback > p:first-child")).toHaveText("Last name is invalid")
            await expect(page.locator(".invalid-feedback > p:last-child")).toHaveText("Last name has to be from 2 to 20 characters long")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Border color for last name is red", async ({ page }) => {
            await page.locator("#signupLastName").focus()
            await page.locator("#signupLastName").blur()
            await expect(page.locator("#signupLastName")).toHaveCSS("border-color", "rgb(220, 53, 69)")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

    })

    test.describe("Email field negative", () => {

        test("Email required msg", async ({ page }) => {
            await page.locator("#signupEmail").focus()
            await page.locator("#signupEmail").blur()
            await expect(page.locator("//form//p")).toHaveText("Email required")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Email with space", async ({ page }) => {
            await page.locator("#signupEmail").fill("test test@gmail.com")
            await page.locator("#signupEmail").blur()
            await expect(page.locator("//form//p")).toHaveText("Email is incorrect")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Email with digits", async ({ page }) => {
            await page.locator("#signupEmail").fill("test@gmail.com77")
            await page.locator("#signupEmail").blur()
            await expect(page.locator("//form//p")).toHaveText("Email is incorrect")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Email with cyrillic", async ({ page }) => {
            await page.locator("#signupEmail").fill("test@кирилл.com")
            await page.locator("#signupEmail").blur()
            await expect(page.locator("//form//p")).toHaveText("Email is incorrect")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Email with symbols", async ({ page }) => {

            await page.locator("#signupEmail").fill("test@gmail.co+m")
            await page.locator("#signupEmail").blur()
            await expect(page.locator("//form//p")).toHaveText("Email is incorrect")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Border color for email is red", async ({ page }) => {
            await page.locator("#signupEmail").focus()
            await page.locator("#signupEmail").blur()
            await expect(page.locator("#signupEmail")).toHaveCSS("border-color", "rgb(220, 53, 69)")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })
    })

    test.describe("Password field negative", () => {

        test("Empty password", async ({ page }) => {
            await page.locator("#signupPassword").focus()
            await page.locator("#signupPassword").blur()
            await expect(page.locator("//form//p")).toHaveText("Password required")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Password without digits", async ({ page }) => {
            await page.locator("#signupPassword").fill("Abcdefghijk")
            await page.locator("#signupPassword").blur()
            await expect(page.locator("//form//p")).toHaveText("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Password without CAPITAL letter", async ({ page }) => {
            await page.locator("#signupPassword").fill("8bcdefghijk")
            await page.locator("#signupPassword").blur()
            await expect(page.locator("//form//p")).toHaveText("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Password without small letter", async ({ page }) => {
            await page.locator("#signupPassword").fill("8BCDEFGHIJK")
            await page.locator("#signupPassword").blur()
            await expect(page.locator("//form//p")).toHaveText("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Password wit less than 8 symbols", async ({ page }) => {
            await page.locator("#signupPassword").fill("Aa34567")
            await page.locator("#signupPassword").blur()
            await expect(page.locator("//form//p")).toHaveText("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Password wit more than 15 symbols", async ({ page }) => {
            await page.locator("#signupPassword").fill("Aa34567890123456")
            await page.locator("#signupPassword").blur()
            await expect(page.locator("//form//p")).toHaveText("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Border color for password is red", async ({ page }) => {
            await page.locator("#signupPassword").focus()
            await page.locator("#signupPassword").blur()
            await expect(page.locator("#signupPassword")).toHaveCSS("border-color", "rgb(220, 53, 69)")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })
    })

    test.describe("Re-enter password field negative", () => {
        test("Border color for  re-enter password is red", async ({ page }) => {
            await page.locator("#signupRepeatPassword").focus()
            await page.locator("#signupRepeatPassword").blur()
            await expect(page.locator("#signupRepeatPassword")).toHaveCSS("border-color", "rgb(220, 53, 69)")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Empty re-entry password", async ({ page }) => {
            await page.locator("#signupRepeatPassword").focus()
            await page.locator("#signupRepeatPassword").blur()
            await expect(page.locator("//form//p")).toHaveText("Re-enter password required")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Passwords do not match msg", async ({ page }) => {
            await page.locator("#signupPassword").fill("Aa34567890")
            await page.locator("#signupRepeatPassword").fill("Aa34567891")
            await page.locator("#signupRepeatPassword").blur()
            await expect(page.locator("//form//p")).toHaveText("Passwords do not match")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Re-password without digits", async ({ page }) => {
            await page.locator("#signupRepeatPassword").fill("Abcdefghijk")
            await page.locator("#signupRepeatPassword").blur()
            await expect(page.locator("//form//p")).toHaveText("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Re-password without CAPITAL letter", async ({ page }) => {
            await page.locator("#signupRepeatPassword").fill("8bcdefghijk")
            await page.locator("#signupRepeatPassword").blur()
            await expect(page.locator("//form//p")).toHaveText("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Re-password without small letter", async ({ page }) => {
            await page.locator("#signupRepeatPassword").fill("8BCDEFGHIJK")
            await page.locator("#signupRepeatPassword").blur()
            await expect(page.locator("//form//p")).toHaveText("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Re-password wit less than 8 symbols", async ({ page }) => {
            await page.locator("#signupRepeatPassword").fill("Aa34567")
            await page.locator("#signupRepeatPassword").blur()
            await expect(page.locator("//form//p")).toHaveText("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })

        test("Re-password wit more than 15 symbols", async ({ page }) => {
            await page.locator("#signupRepeatPassword").fill("Aa34567890123456")
            await page.locator("#signupRepeatPassword").blur()
            await expect(page.locator("//form//p")).toHaveText("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter")
            await expect(page.locator("//div[@class='modal-footer']/button ")).toBeDisabled()
        })
    })
})
