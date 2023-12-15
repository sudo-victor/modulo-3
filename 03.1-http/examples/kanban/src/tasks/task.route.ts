import { Router } from "express"
import { TaskModule } from "./task.module"
import { validateCreateTaskMiddleware } from "../shared/middlewares/validate-create-task.middleware"
import { ensureAuthenticateMiddleware } from "../shared/middlewares/ensure-authenticate.middleware"

const { controller } = TaskModule.getInstance()
const taskRoute = Router()

taskRoute.post("/users/:userId/tasks", ensureAuthenticateMiddleware, controller.create.bind(controller))
taskRoute.patch("/tasks/:taskId", ensureAuthenticateMiddleware, controller.updateStatus.bind(controller))
taskRoute.get("/tasks", ensureAuthenticateMiddleware, controller.list.bind(controller))

export { taskRoute }