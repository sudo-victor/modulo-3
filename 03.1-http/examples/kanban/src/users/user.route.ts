import { Router } from "express"
import { UserModule } from "./user.module"

const { controller } = UserModule.getInstance()

const userRoutes = Router()

userRoutes.post("/users", controller.create.bind(controller))

export { userRoutes }
