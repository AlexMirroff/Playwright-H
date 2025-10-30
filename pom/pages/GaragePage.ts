import { Locator } from "@playwright/test"
import BasePage from "../BasePage"

export default class GaragePage extends BasePage {

    public readonly pageTitle: Locator = this.page.getByRole("heading", { name: "Garage" })
    private readonly addCarButton: Locator = this.page.locator('//button[@class="btn btn-primary"]', { hasText: 'Add car' })
    public readonly lastCarName: Locator = this.page.locator('.car_name').first()

    async navigate() {
        await this.page.goto('/panel/garage')
    }

    async openAddCarForm() {
        await this.addCarButton.click()
    }
}