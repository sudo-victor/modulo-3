import { Router } from "express";
import { UserModule } from "../users/UserModule";
import { UploadSingle } from "../common/middlewares/uploadMiddleware";
import { ensureAuthenticate } from "../common/middlewares/ensureAuthenticate";

const userRouter = Router()
const controller = UserModule.build().controller
const uploadSingle = UploadSingle.build("photo")

userRouter.post('/', uploadSingle, controller.create.bind(controller))
userRouter.get('/me/:id', ensureAuthenticate,  controller.me.bind(controller))

export { userRouter }

