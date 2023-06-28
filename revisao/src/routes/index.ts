import { Router } from "express";
import { BoardModule } from "../app/boards/BoardModule";
import { TaskModule } from "../app/tasks/TaskModule";
import { UserModule } from "../app/users/UserModule";
import { upload } from "../configs/storageConfig";
import { AuthModule } from "../app/auth/AuthModule";

const router = Router()
const boardController = BoardModule.build().controller
const taskController = TaskModule.build().controller
const userController = UserModule.build().controller
const authController = AuthModule.build().controller

router.post('/boards', boardController.create.bind(boardController))
router.get('/boards/:id', boardController.getById.bind(boardController))

router.post('/boards/:board_id/tasks', taskController.create.bind(taskController))
router.patch('/boards/:board_id/tasks/:id', taskController.updateStatus.bind(taskController))
router.delete('/boards/:board_id/tasks/:id', taskController.delete.bind(taskController))

router.post('/users', upload.single('photo'), userController.create.bind(userController))
router.post('/auth', authController.login.bind(authController))

export { router }
