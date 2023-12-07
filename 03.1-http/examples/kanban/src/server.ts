import express from "express"
import { userRoutes } from "./users/user.route"
import { taskRoute } from "./tasks/task.route"

const app = express()

app.use(express.json())
app.use(userRoutes)
app.use(taskRoute)

export { app }