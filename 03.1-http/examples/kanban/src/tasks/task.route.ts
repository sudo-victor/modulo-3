import { Router } from "express"
import { TaskModule } from "./task.module"

const { controller } = TaskModule.getInstance()
const taskRoute = Router()


taskRoute.post("/users/:userId/tasks", controller.create.bind(controller))
taskRoute.patch("/tasks/:taskId", controller.updateStatus.bind(controller))

export { taskRoute }