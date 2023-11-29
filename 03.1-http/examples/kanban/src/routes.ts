import { Router } from "express"
import controller from "./tasks"

const taskRoute = Router()

taskRoute.post("/tasks", controller.create.bind(controller))
taskRoute.get("/tasks", controller.index.bind(controller))

export { taskRoute }