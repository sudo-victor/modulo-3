import express from "express"
import { userRoutes } from "./users/user.route"
import { taskRoute } from "./tasks/task.route"
import { logMiddleware } from "./shared/middlewares/log.middleware"
import { authRoutes } from "./auth/auth.route"

const app = express()
// localhost:3333/uploads/8cfb12ce-0d57-4387-acb1-7dc2b4a17499-removebg-preview_1702681729091.png

app.use("/uploads", express.static('uploads'));
app.use(express.json())
app.use(logMiddleware)
app.use(authRoutes)
app.use(userRoutes)
app.use(taskRoute)

export { app }