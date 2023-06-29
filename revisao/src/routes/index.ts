import { Router } from "express";
import { BoardModule } from "../app/boards/BoardModule";
import { TaskModule } from "../app/tasks/TaskModule";
import { UserModule } from "../app/users/UserModule";
import { upload } from "../configs/storageConfig";
import { AuthModule } from "../app/auth/AuthModule";
import { EnsureAuthenticate } from "../common/middlewares/EnsureAuthenticate";

const router = Router()
const boardController = BoardModule.build().controller
const taskController = TaskModule.build().controller
const userController = UserModule.build().controller
const authController = AuthModule.build().controller

// ROTAS PUBLICAS
router.post('/users', upload.single('photo'), userController.create.bind(userController))
router.post('/auth', authController.login.bind(authController))

// ROTAS PRIVADAS
router.use(EnsureAuthenticate.execute)
router.post('/boards', boardController.create.bind(boardController))
router.get('/boards/:id', boardController.getById.bind(boardController))

router.post('/boards/:board_id/tasks', taskController.create.bind(taskController))
router.patch('/boards/:board_id/tasks/:id', taskController.updateStatus.bind(taskController))
router.patch('/boards/:board_id/tasks/:task_id/users/:user_id', taskController.associateAUser.bind(taskController))
router.delete('/boards/:board_id/tasks/:id', taskController.delete.bind(taskController))

export { router }
