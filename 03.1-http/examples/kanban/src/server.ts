import express from "express"
import { userRoutes } from "./users/user.route"
import { taskRoute } from "./tasks/task.route"
import { logMiddleware } from "./shared/middlewares/log.middleware"
import { authRoutes } from "./auth/auth.route"

const app = express()

app.use(express.json())
app.use(logMiddleware)
app.use(authRoutes)
app.use(userRoutes)
app.use(taskRoute)

export { app }