import { Router } from "express";
import { MakeProfile } from "./factories/MakeProfile.js"
import { initializeDatabase } from "./database/configDatabase.js"

const router = Router()
const { collection } = initializeDatabase()
const controller = MakeProfile.getInstance(collection)

// 1 param -> endpoint/recurso
router.post("/profiles", controller.create.bind(controller))

export { router }