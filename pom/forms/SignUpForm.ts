import { Locator } from "@playwright/test"
import BasePage from "../BasePage"

export default class SignUpForm extends BasePage {

    public readonly emailField: Locator = this.page.locator("#signupEmail")
    public readonly passwordField: Locator = this.page.locator("#signupPassword")
    public readonly rePasswordField: Locator = this.page.locator("#signupRepeatPassword")
    public readonly nameField: Locator = this.page.locator("#signupName")
    public readonly lastNameField: Locator = this.page.locator("#signupLastName")
    public readonly formTitle: Locator = this.page.locator("h4.modal-title")
    public readonly registerButton: Locator = this.page.locator("text=Register")
    public readonly errorMessageDoubleUpper: Locator = this.page.locator(".invalid-feedback > p:first-child")
    public readonly errorMessageDoubleLower: Locator = this.page.locator(".invalid-feedback > p:last-child")

    private readonly closeButton: Locator = this.page.locator("button.close")

    async enterName(email: string) {
        await this.nameField.fill(email)
    }

    async enterLastName(email: string) {
        await this.lastNameField.fill(email)
    }

    async enterEmail(email: string) {
        await this.emailField.fill(email)
    }

    async enterPassword(password: string) {
        await this.passwordField.fill(password)
    }

    async enterRePassword(password: string) {
        await this.rePasswordField.fill(password)
    }

    async clickRegisterButton() {
        await this.registerButton.click()
    }

    async triggerErrorOnField(field: Locator) {
        await field.focus()
        await field.blur()
    }

    async clickCloseButton() {
        await this.closeButton.click()
    }
}