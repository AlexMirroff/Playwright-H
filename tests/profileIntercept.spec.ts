import { expect, test } from "../utils/fixtures/pom"
import GaragePage from "../pom/pages/GaragePage"

test.use({ storageState: ".auth/testUser1.json" })

test.describe("Interception with mocking", () => {
    let garagePage: GaragePage

    test.beforeEach(async ({ page }) => {

        garagePage = new GaragePage(page)
    })

    test("Fake profile response", async ({ page }) => {
        const fakeProfileData = {
            "status": "ok",
            "data": {
                "userId": 265538,
                "photoFilename": "default-user.png",
                "name": "Polar",
                "lastName": "Bear",
                "dateBirth": "2000-03-17T00:00:00.000Z",
                "country": "USA"
            }
        }

        await page.route("/api/users/profile", route => {
            route.fulfill({
                status: 200,
                contentType: "application/json",
                body: JSON.stringify(fakeProfileData)
            })
        })
        await garagePage.navigate()
        await page.locator("nav > div > a.-profile").click()
        await expect(page.locator(".profile_name")).toHaveText("Polar Bear")
    })
})