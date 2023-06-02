import { Router } from "express";
import { UserModule } from "../users/UserModule.js";

const module = UserModule.build().controller

const userRouter = Router()

userRouter.post('/users', module.create.bind(module))

export { userRouter }