import { Router } from "express";
import { AuthModule } from "../auth/AuthModule";

const authRouter = Router()
const controller = AuthModule.build().controller

authRouter.post('/', controller.login.bind(controller))

export { authRouter }

