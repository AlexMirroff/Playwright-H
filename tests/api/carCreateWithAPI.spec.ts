import test, { test as base, expect } from "@playwright/test"
import AuthController from "../api/controllers/AuthController"
import CarsController from "../api/controllers/CarsController"


test.describe("Car creation via API", () => {

    let authController: AuthController
    let carsController: CarsController

    let sid: string

    test.beforeAll(async ({ request }) => {
        authController = new AuthController(request)
        const response = await authController.signIn("mirhaiazov@gmail.com", "PassWord1")
        sid = response
    })

    test.beforeEach(async ({ request }) => {
        carsController = new CarsController(request)
    })

    test.afterEach(async ({ request }) => {
        await carsController.removeLastAddedCarIfExist(sid)
    })


    test("Create new car with valid data", async ({ request }) => {
        const newCar = {
            "carBrandId": 4,
            "carModelId": 18,
            "mileage": 70000
        }

        const response = await carsController.addCar(newCar, sid)

        const body = await response.json()
        expect(response.status()).toBe(201)
        expect(body.data).toMatchObject(newCar)
        expect(body.data.brand).toBe("Porsche")
        expect(body.data.model).toBe("Panamera")
        expect(body.data.initialMileage).toBe(70000)
    })


    test("Create new car with wrong carBrandId ", async ({ request }) => {
        const newCar = {
            "carBrandId": 99999,
            "carModelId": 18,
            "mileage": 50
        }

        const response = await carsController.addCar(newCar, sid)
        const body = await response.json()
        expect(response.status()).toBe(404)
        expect(body).toMatchObject({ status: "error", message: "Brand not found" })
    })

    test("Create new car with wrong carModelId ", async ({ request }) => {
        const newCar = {
            "carBrandId": 4,
            "carModelId": 0,
            "mileage": 7000
        }

        const response = await carsController.addCar(newCar, sid)
        const body = await response.json()
        expect(response.status()).toBe(404)
        expect(body).toMatchObject({ status: "error", message: "Model not found" })
    })

    test("Create new car with zero milage ", async ({ request }) => {
        const newCar = {
            "carBrandId": 2,
            "carModelId": 8,
            "mileage": 0
        }

        const response = await carsController.addCar(newCar, sid)
        const body = await response.json()
        expect(response.status()).toBe(201)
        expect(body.data.brand).toBe("BMW")
        expect(body.data.model).toBe("X5")
        expect(body.data.initialMileage).toBe(0)
    })

    test("Create new car without model ", async ({ request }) => {
        const newCar = {
            "carBrandId": 20,
            "mileage": 10
        }

        const response = await carsController.addCar(newCar, sid)
        const body = await response.json()
        expect(response.status()).toBe(400)
        expect(body).toMatchObject({ status: "error", message: "Car model id is required" })
    })

    test("Create new car without brand ", async ({ request }) => {
        const newCar = {
            "carModelId": 8,
            "mileage": 0
        }

        const response = await carsController.addCar(newCar, sid)
        const body = await response.json()
        expect(response.status()).toBe(400)
        expect(body).toMatchObject({ status: "error", message: "Car brand id is required" })
    })

    test("Create new car without mileage ", async ({ request }) => {
        const newCar = {
            "carBrandId": 2,
            "carModelId": 8,
        }

        const response = await carsController.addCar(newCar, sid)
        const body = await response.json()
        expect(response.status()).toBe(400)
        expect(body).toMatchObject({ status: "error", message: "Mileage is required" })
    })
})