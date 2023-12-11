import express from "express"
import { userRoutes } from "./users/user.route"
import { taskRoute } from "./tasks/task.route"
import { logMiddleware } from "./shared/middlewares/log.middleware"

const app = express()

app.use(express.json())
app.use(logMiddleware)
app.use(userRoutes)
app.use(taskRoute)

export { app }