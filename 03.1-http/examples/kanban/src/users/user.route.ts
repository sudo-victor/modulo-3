import { Router } from "express"
import { UserModule } from "./user.module"
import { uploadMiddleware } from "../shared/middlewares/upload.middleware"

const { controller } = UserModule.getInstance()

const userRoutes = Router()

userRoutes.post("/users", controller.create.bind(controller))
userRoutes.patch("/users/:userId/photo", uploadMiddleware.single("photo"), controller.updatePhoto.bind(controller))

export { userRoutes }
