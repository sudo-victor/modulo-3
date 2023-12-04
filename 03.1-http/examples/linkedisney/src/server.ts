import express from "express"
import { profileRoutes } from "./routes"

const app = express()

app.use(express.json())
app.use(profileRoutes)

export { app }