import { Router } from "express"
import { PostsController } from "../app/controllers/postsControllers";
import { makePostDomain } from "../factories/postsDomain";

const postsRouter = Router()

const postsDomain = makePostDomain()

postsRouter.post('/posts', postsDomain.create.bind(PostsController))

export { postsRouter }
