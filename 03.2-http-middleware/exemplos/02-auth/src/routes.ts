import { Router } from "express";
import { UserModule } from "./users/UserModule";
import { AuthModule } from "./auth/AuthModule";
import { authMiddleware } from "./middlewares/authMiddleware";

const router = Router()

const userModule = UserModule.build().controller
const authModule = AuthModule.build().controller

router.post('/users', userModule.create.bind(userModule))
router.get('/users',  authMiddleware, userModule.findAll.bind(userModule))
router.post('/auth', authModule.auth.bind(authModule))

export { router }