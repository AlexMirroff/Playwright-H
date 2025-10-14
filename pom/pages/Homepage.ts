import { Locator } from "@playwright/test"
import BasePage from "../BasePage"

export default class HomePage extends BasePage {

    private readonly signUpButton: Locator = this.page.locator("text=Sign up")

    async navigate() {
        await this.page.goto("/")
    }

    async openSignUnForm() {
        await this.signUpButton.click()
    }

}