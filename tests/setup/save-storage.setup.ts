import test, { expect } from "@playwright/test"
import SignInForm from "../../pom/forms/SignInForm"
import HomePage from "../../pom/pages/HomePage"
import GaragePage from "../../pom/pages/GaragePage"

test.describe("Login and save states", () => {

    let homePage: HomePage
    let signInForm: SignInForm
    let garagePage: GaragePage

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        garagePage = new GaragePage(page)

        await homePage.navigate()
        await homePage.openSignInForm()
    })

    test("Login as testUser1 and save state", async ({ page }) => {
        signInForm = new SignInForm(page)

        await signInForm.loginWithCredentials("mirhaiazov@gmail.com", "PassWord1")
        await expect(garagePage.pageTitle).toBeVisible()
        await page.context().storageState({ path: ".auth/testUser1.json" })
    })
})