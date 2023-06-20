import { Router } from "express";
import { UserModule } from "../users/UserModule";
import { UploadSingle } from "../common/middlewares/uploadMiddleware";

const userRouter = Router()
const controller = UserModule.build().controller
const uploadSingle = UploadSingle.build("photo")

userRouter.post('/', uploadSingle, controller.create.bind(controller))

export { userRouter }
