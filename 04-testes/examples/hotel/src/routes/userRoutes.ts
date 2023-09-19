import { Router } from "express";
import { UserModule } from "../app/users/UserModule";

const userRoutes = Router()
const { controller } = UserModule.getInstances()

userRoutes.post("/", controller.create.bind(controller))
userRoutes.get("/", controller.findAll.bind(controller))

export { userRoutes }