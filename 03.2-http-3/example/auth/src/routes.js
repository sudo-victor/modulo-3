import { Router } from "express";
import { MakeUser } from "./factories/MakeUser.js"

const router = Router()
const controller = MakeUser.getInstance()

router.post("/users", controller.create.bind(controller))

export { router }
