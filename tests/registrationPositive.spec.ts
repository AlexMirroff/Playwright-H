import { test, expect } from "@playwright/test"
import HomePage from "../pom/pages/Homepage"
import SignUpForm from "../pom/forms/SignUpForm"
import GaragePage from "../pom/pages/GaragePage"

test.describe("Sign up positive", () => {

    let homePage: HomePage
    let signUpForm: SignUpForm
    let garagePage: GaragePage

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        signUpForm = new SignUpForm(page)
        garagePage = new GaragePage(page)
        await homePage.navigate()
        await homePage.openSignUnForm()
    })

    test("Successful sign up with valid data", async () => {
        await signUpForm.enterName("Alex")
        await signUpForm.enterLastName("Mirroff")
        await signUpForm.enterEmail(`mirhaiazov+${Date.now()}@gmail.com`)
        await signUpForm.enterPassword("Aa34567890")
        await signUpForm.enterRePassword("Aa34567890")
        await signUpForm.clickRegisterButton()
        await expect(garagePage.pageTitle).toBeVisible()
    })

    test("Close sign up pop up", async () => {
        await expect(signUpForm.formTitle).toBeVisible()
        await signUpForm.clickCloseButton()
        await signUpForm.waitForAnimation(300)
        await expect(signUpForm.formTitle).not.toBeVisible()
    })
})