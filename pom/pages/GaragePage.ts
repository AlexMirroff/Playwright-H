import { Locator } from "@playwright/test"
import BasePage from "../BasePage"

export default class GaragePage extends BasePage {

    public readonly pageTitle: Locator = this.page.getByRole("heading", { name: "Garage" })
}