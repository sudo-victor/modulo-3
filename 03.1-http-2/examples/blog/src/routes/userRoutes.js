import { Router } from "express";
import { User } from "../domain/User.js"
import { UserRepository } from "../app/repositories/UserRepository.js"
import { UserService } from "../app/services/UserService.js"
import { UserController } from "../app/controllers/UserController.js"

const router = Router()
const repository = new UserRepository(User)
const service = new UserService(repository)
const controller = new UserController(service)

router.post("/users", controller.create.bind(controller))

export { router }
