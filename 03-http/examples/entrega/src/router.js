import { Router } from "express"
import { MakeOrder } from "./factories/MakeOrder.js"
import { Database } from "./database/DatabaseConfig.js"

const router = Router()
const { collection, client } = Database.initialize()
const controller = MakeOrder.getInstance(collection)

router.post("/products", controller.create.bind(controller))

router.patch("/products/:id", controller.update.bind(controller))

export { router }
