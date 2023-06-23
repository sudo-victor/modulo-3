import { Router } from "express";
import { PostModule } from "../app/posts/PostModule";

const postRouter = Router()
const controller = PostModule.build().controller

// /users/user_id/posts
postRouter.post('/:user_id/posts', controller.create.bind(controller))
postRouter.get('/:user_id/posts', controller.findByUser.bind(controller))

export { postRouter }

