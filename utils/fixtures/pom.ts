import { test as base, Page } from '@playwright/test'
import AddCarForm from '../../pom/forms/AddCarForm'
import GaragePage from '../../pom/pages/GaragePage'
import { chromium } from '@playwright/test'


type pom = {
    userState1: Page
    userGaragePage: GaragePage
    addCarWithDeleting: AddCarForm
}

export const test = base.extend<pom>({

    userState1: async ({ }, use) => {
        const browser = await chromium.launch()
        const context = await browser.newContext({ storageState: '.auth/testUser1.json' })
        const page = await context.newPage()
        await use(page)
        await context.close()
    },

    addCarWithDeleting: async ({ userState1, userGaragePage }, use) => {
        await userGaragePage.openAddCarForm()
        let addCarFormPage = new AddCarForm(userState1)
        await use(addCarFormPage)
        await userState1.locator('//span[contains(@class, "icon-edit")]').first().click()
        await userState1.getByText('Remove car').click()
        await userState1.locator('//button[contains(@class, "btn-danger")]').click()
    },

    userGaragePage: async ({ userState1 }, use) => {
        let garagePage = new GaragePage(userState1)
        await garagePage.navigate()
        await use(garagePage)
    },
})
export { expect } from '@playwright/test'