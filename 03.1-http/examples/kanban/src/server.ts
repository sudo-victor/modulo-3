import express from "express"
import { userRoutes } from "./users/user.route"

const app = express()

app.use(express.json())
app.use(userRoutes)

export { app }