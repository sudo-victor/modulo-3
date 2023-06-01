import { Router } from "express";
import { makePostModule } from "../utils/factories/postFactory.js"

const postModule = makePostModule().controller
const postRouter = Router()

postRouter.post('/posts/:user_id', postModule.create.bind(postModule))

export { postRouter }
