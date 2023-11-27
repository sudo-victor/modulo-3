import { Router } from "express"
import { MakeCar } from "../factories/MakeCar.js"
import { ConfigDatabase } from "../database/ConfigDatabase.js"

const carRoutes = Router()

const { carCollection } = ConfigDatabase.initialize()
const controller = MakeCar.build(carCollection)

carRoutes.post("/cars", controller.create.bind(controller))

export { carRoutes }