import { Router } from "express";
import { userRouter } from "./UserRoute";
import { authRouter } from "./AuthRoute";
import { postRouter } from "./PostRoute";

const router = Router()

router.use('/users', userRouter)
router.use('/users', postRouter)
router.use('/auth', authRouter)

export { router }
