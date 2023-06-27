import { Router } from "express";
import { BoardModule } from "../app/boards/BoardModule";
import { TaskModule } from "../app/tasks/TaskModule";

const router = Router()
const boardController = BoardModule.build().controller
const taskController = TaskModule.build().controller

router.post('/boards', boardController.create.bind(boardController))
router.get('/boards/:id', boardController.getById.bind(boardController))

router.post('/boards/:board_id/tasks', taskController.create.bind(taskController))
router.patch('/boards/:board_id/tasks/:id', taskController.updateStatus.bind(taskController))
router.delete('/boards/:board_id/tasks/:id', taskController.delete.bind(taskController))

export { router }
