import { Router } from "express";
import { BoardModule } from "../app/boards/BoardModule";
import { TaskModule } from "../app/tasks/TaskModule";

const router = Router()
const boardController = BoardModule.build().controller
const taskController = TaskModule.build().controller

router.post('/boards', boardController.create.bind(boardController))
router.post('/boards/:board_id/tasks', taskController.create.bind(taskController))

export { router }