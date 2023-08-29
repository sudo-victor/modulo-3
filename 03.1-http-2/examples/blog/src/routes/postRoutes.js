import { Router } from "express";
import { Post } from "../domain/Post.js"
import { User } from "../domain/User.js"
import { UserRepository } from "../app/repositories/UserRepository.js"
import { PostRepository } from "../app/repositories/PostRepository.js"
import { PostService } from "../app/services/PostService.js"
import { PostController } from "../app/controllers/PostController.js"
import { AuthMiddleware } from "../app/middlewares/AuthMiddleware.js";

const router = Router()
const repository = new PostRepository(Post)
const userRepository = new UserRepository(User)
const service = new PostService(repository, userRepository)
const controller = new PostController(service)

const authMiddleware = AuthMiddleware.handler

router.post("/users/:id/posts", authMiddleware, controller.create.bind(controller))

export { router }
