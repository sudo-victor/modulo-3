import { Router } from "express";
import { userRouter } from "./UserRoute";
import { authRouter } from "./AuthRoute";

const router = Router()

router.use('/users', userRouter)
router.use('/auth', authRouter)

export { router }
