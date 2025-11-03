import { test, expect } from "@playwright/test"
import HomePage from "../pom/pages/HomePage"
import SignUpForm from "../pom/forms/SignUpForm"

test.describe("Sign up negative", () => {

    let homePage: HomePage
    let signUpForm: SignUpForm

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        signUpForm = new SignUpForm(page)
        await homePage.navigate()
        await homePage.openSignUnForm()
    })

    test.describe("Name field negative", () => {

        test("Name required msg", async () => {
            await signUpForm.triggerErrorOnField(signUpForm.nameField)
            await expect(signUpForm.errorMessage).toHaveText("Name required")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Name with space", async () => {
            await signUpForm.enterName("Space inside name")
            await signUpForm.triggerErrorOnField(signUpForm.nameField)
            await expect(signUpForm.errorMessage).toHaveText("Name is invalid")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Name with digits", async () => {
            await signUpForm.enterName("Digit7")
            await signUpForm.triggerErrorOnField(signUpForm.nameField)
            await expect(signUpForm.errorMessage).toHaveText("Name is invalid")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Name with cyrillic", async () => {
            await signUpForm.enterName("Дратути")
            await signUpForm.triggerErrorOnField(signUpForm.nameField)
            await expect(signUpForm.errorMessage).toHaveText("Name is invalid")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Name with symbols", async () => {
            await signUpForm.enterName("Name+-")
            await signUpForm.triggerErrorOnField(signUpForm.nameField)
            await expect(signUpForm.errorMessage).toHaveText("Name is invalid")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Name length is less than min", async () => {
            await signUpForm.enterName("A")
            await signUpForm.triggerErrorOnField(signUpForm.nameField)
            await expect(signUpForm.errorMessage).toHaveText("Name has to be from 2 to 20 characters long")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Name length is more than max", async () => {
            await signUpForm.enterName("ProfessionalDeveloper")
            await signUpForm.triggerErrorOnField(signUpForm.nameField)
            await expect(signUpForm.errorMessage).toHaveText("Name has to be from 2 to 20 characters long")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Invalid Name length & spaces", async () => {
            await signUpForm.enterName("Professional Developer")
            await signUpForm.triggerErrorOnField(signUpForm.nameField)
            await expect(signUpForm.errorMessageDoubleUpper).toHaveText("Name is invalid")
            await expect(signUpForm.errorMessageDoubleLower).toHaveText("Name has to be from 2 to 20 characters long")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Border color for name is red", async () => {
            await signUpForm.triggerErrorOnField(signUpForm.nameField)
            await expect(signUpForm.nameField).toHaveCSS("border-color", "rgb(220, 53, 69)")
            await expect(signUpForm.registerButton).toBeDisabled()
        })
    })

    test.describe("Last Name field negative", () => {

        test("Last Name required msg", async () => {
            await signUpForm.triggerErrorOnField(signUpForm.lastNameField)
            await expect(signUpForm.errorMessage).toHaveText("Last name required")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Last Name with space", async () => {
            await signUpForm.enterLastName("Space inside name")
            await signUpForm.triggerErrorOnField(signUpForm.lastNameField)
            await expect(signUpForm.errorMessage).toHaveText("Last name is invalid")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Last Name with digits", async () => {
            await signUpForm.enterLastName("Digit8")
            await signUpForm.triggerErrorOnField(signUpForm.lastNameField)
            await expect(signUpForm.errorMessage).toHaveText("Last name is invalid")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Last Name with cyrillic", async () => {
            await signUpForm.enterLastName("Тест")
            await signUpForm.triggerErrorOnField(signUpForm.lastNameField)
            await expect(signUpForm.errorMessage).toHaveText("Last name is invalid")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Last Name with symbols", async () => {
            await signUpForm.enterLastName("Name!")
            await signUpForm.triggerErrorOnField(signUpForm.lastNameField)
            await expect(signUpForm.errorMessage).toHaveText("Last name is invalid")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Last Name length is less than min", async () => {
            await signUpForm.enterLastName("C")
            await signUpForm.triggerErrorOnField(signUpForm.lastNameField)
            await expect(signUpForm.errorMessage).toHaveText("Last name has to be from 2 to 20 characters long")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Last Name length is more than max", async () => {
            await signUpForm.enterLastName("ProfessionalDeveloper")
            await signUpForm.triggerErrorOnField(signUpForm.lastNameField)
            await expect(signUpForm.errorMessage).toHaveText("Last name has to be from 2 to 20 characters long")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Invalid Last Name length & spaces", async () => {
            await signUpForm.enterLastName("Professional Developer")
            await signUpForm.triggerErrorOnField(signUpForm.lastNameField)
            await expect(signUpForm.errorMessageDoubleUpper).toHaveText("Last name is invalid")
            await expect(signUpForm.errorMessageDoubleLower).toHaveText("Last name has to be from 2 to 20 characters long")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Border color for last name is red", async () => {
            await signUpForm.triggerErrorOnField(signUpForm.lastNameField)
            await expect(signUpForm.lastNameField).toHaveCSS("border-color", "rgb(220, 53, 69)")
            await expect(signUpForm.registerButton).toBeDisabled()
        })
    })

    test.describe("Email field negative", () => {

        test("Email required msg", async () => {
            await signUpForm.triggerErrorOnField(signUpForm.emailField)
            await expect(signUpForm.errorMessage).toHaveText("Email required")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Email with space", async () => {
            await signUpForm.enterEmail("test test@gmail.com")
            await signUpForm.triggerErrorOnField(signUpForm.emailField)
            await expect(signUpForm.errorMessage).toHaveText("Email is incorrect")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Email with digits", async () => {
            await signUpForm.enterEmail("test@gmail.com77")
            await signUpForm.triggerErrorOnField(signUpForm.emailField)
            await expect(signUpForm.errorMessage).toHaveText("Email is incorrect")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Email with cyrillic", async () => {
            await signUpForm.enterEmail("test@кирилл.com")
            await signUpForm.triggerErrorOnField(signUpForm.emailField)
            await expect(signUpForm.errorMessage).toHaveText("Email is incorrect")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Email with symbols", async () => {
            await signUpForm.enterEmail("test@gmail.co+m")
            await signUpForm.triggerErrorOnField(signUpForm.emailField)
            await expect(signUpForm.errorMessage).toHaveText("Email is incorrect")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Border color for email is red", async () => {
            await signUpForm.triggerErrorOnField(signUpForm.emailField)
            await expect(signUpForm.emailField).toHaveCSS("border-color", "rgb(220, 53, 69)")
            await expect(signUpForm.registerButton).toBeDisabled()
        })
    })

    test.describe("Password field negative", () => {

        test("Empty password", async () => {
            await signUpForm.triggerErrorOnField(signUpForm.passwordField)
            await signUpForm.triggerErrorOnField(signUpForm.passwordField)
            await expect(signUpForm.errorMessage).toHaveText("Password required")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Password without digits", async () => {
            await signUpForm.enterPassword("Abcdefghijk")
            await signUpForm.triggerErrorOnField(signUpForm.passwordField)
            await expect(signUpForm.errorMessage).toHaveText("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Password without CAPITAL letter", async () => {
            await signUpForm.enterPassword("8bcdefghijk")
            await signUpForm.triggerErrorOnField(signUpForm.passwordField)
            await expect(signUpForm.errorMessage).toHaveText("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Password without small letter", async () => {
            await signUpForm.enterPassword("8BCDEFGHIJK")
            await signUpForm.triggerErrorOnField(signUpForm.passwordField)
            await expect(signUpForm.errorMessage).toHaveText("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Password wit less than 8 symbols", async () => {
            await signUpForm.enterPassword("Aa34567")
            await signUpForm.triggerErrorOnField(signUpForm.passwordField)
            await expect(signUpForm.errorMessage).toHaveText("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Password wit more than 15 symbols", async () => {
            await signUpForm.enterPassword("Aa34567890123456")
            await signUpForm.enterPassword
            await signUpForm.triggerErrorOnField(signUpForm.passwordField)
            await expect(signUpForm.errorMessage).toHaveText("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Border color for password is red", async () => {
            await signUpForm.triggerErrorOnField(signUpForm.passwordField)
            await expect(signUpForm.passwordField).toHaveCSS("border-color", "rgb(220, 53, 69)")
            await expect(signUpForm.registerButton).toBeDisabled()
        })
    })

    test.describe("Re-enter password field negative", () => {
        test("Border color for  re-enter password is red", async () => {
            await signUpForm.triggerErrorOnField(signUpForm.rePasswordField)
            await expect(signUpForm.rePasswordField).toHaveCSS("border-color", "rgb(220, 53, 69)")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Empty re-entry password", async () => {
            await signUpForm.triggerErrorOnField(signUpForm.rePasswordField)
            await expect(signUpForm.errorMessage).toHaveText("Re-enter password required")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Passwords do not match msg", async () => {
            await signUpForm.enterPassword("Aa34567890")
            await signUpForm.enterRePassword("Aa34567891")
            await signUpForm.triggerErrorOnField(signUpForm.rePasswordField)
            await expect(signUpForm.errorMessage).toHaveText("Passwords do not match")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Re-password without digits", async () => {
            await signUpForm.enterRePassword("Abcdefghijk")
            await signUpForm.triggerErrorOnField(signUpForm.rePasswordField)
            await expect(signUpForm.errorMessage).toHaveText("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Re-password without CAPITAL letter", async () => {
            await signUpForm.enterRePassword("8bcdefghijk")
            await signUpForm.triggerErrorOnField(signUpForm.rePasswordField)
            await expect(signUpForm.errorMessage).toHaveText("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Re-password without small letter", async () => {
            await signUpForm.enterRePassword("8BCDEFGHIJK")
            await signUpForm.triggerErrorOnField(signUpForm.rePasswordField)
            await expect(signUpForm.errorMessage).toHaveText("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Re-password wit less than 8 symbols", async () => {
            await signUpForm.enterRePassword("Aa34567")
            await signUpForm.triggerErrorOnField(signUpForm.rePasswordField)
            await expect(signUpForm.errorMessage).toHaveText("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter")
            await expect(signUpForm.registerButton).toBeDisabled()
        })

        test("Re-password wit more than 15 symbols", async () => {
            await signUpForm.enterRePassword("Aa34567890123456")
            await signUpForm.triggerErrorOnField(signUpForm.rePasswordField)
            await expect(signUpForm.errorMessage).toHaveText("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter")
            await expect(signUpForm.registerButton).toBeDisabled()
        })
    })
})
