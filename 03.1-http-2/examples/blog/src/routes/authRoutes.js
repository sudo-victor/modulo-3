import { Router } from "express";
import { User } from "../domain/User.js"
import { UserRepository } from "../app/repositories/UserRepository.js"
import { AuthService } from "../app/services/AuthService.js"
import { AuthController } from "../app/controllers/AuthController.js"

const router = Router()
const userRepository = new UserRepository(User)
const service = new AuthService(userRepository)
const controller = new AuthController(service)

router.post("/login", controller.login.bind(controller))

export { router }
