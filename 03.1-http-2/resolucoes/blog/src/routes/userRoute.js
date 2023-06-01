import { Router } from "express";
import { makeUserModule } from "../utils/factories/userFactory.js"

const userModule = makeUserModule().controller
const userRouter = Router()

userRouter.post('/users', userModule.create.bind(userModule))
userRouter.get('/users', userModule.findAll.bind(userModule))

export { userRouter }
