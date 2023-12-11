import { Router } from "express"
import { TaskModule } from "./task.module"
import { logMiddleware } from "../shared/middlewares/log.middleware"
import { validateCreateTaskMiddleware } from "../shared/middlewares/validate-create-task.middleware"

const { controller } = TaskModule.getInstance()
const taskRoute = Router()

taskRoute.post("/users/:userId/tasks", validateCreateTaskMiddleware, controller.create.bind(controller))
taskRoute.patch("/tasks/:taskId", controller.updateStatus.bind(controller))
taskRoute.get("/tasks", controller.list.bind(controller))

export { taskRoute }