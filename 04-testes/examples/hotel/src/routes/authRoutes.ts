import { Router } from "express";
import { AuthModule } from "../auth/AuthModule";

const authRoutes = Router()
const { controller } = AuthModule.getInstances()

authRoutes.post("/", controller.login.bind(controller))

export { authRoutes }