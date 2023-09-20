import { Router } from "express";
import { UserModule } from "../app/users/UserModule";
import { EnsureAuthenticate } from "src/common/middlewares/EnsureAuthenticate";

const userRoutes = Router()
const { controller } = UserModule.getInstances()

userRoutes.post("/", controller.create.bind(controller))
userRoutes.get("/",  EnsureAuthenticate.execute, controller.findAll.bind(controller))

export { userRoutes }