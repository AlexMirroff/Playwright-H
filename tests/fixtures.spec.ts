import { chromium } from "@playwright/test"
import { test, expect } from "../utils/fixtures/pom"

test.describe('tests with fixtures', () => {

    test.describe('Successful car adding', () => {

        test('Add Porsche Panamera', async ({ addCarWithDeleting, userGaragePage }) => {
            await addCarWithDeleting.addCar('Porsche', 'Panamera', '70000')
            await expect(userGaragePage.lastCarName).toHaveText('Porsche Panamera')
        })
    })
})
