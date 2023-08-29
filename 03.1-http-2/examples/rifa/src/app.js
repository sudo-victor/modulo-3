import express from "express"
import dotenv from "dotenv"
dotenv.config()

import { routes } from "./routes.js"
import { DatabaseConfig } from "./database/DatabaseConfig.js"
import { LogMiddleware } from "./app/middlewares/LogMiddleware.js"

DatabaseConfig.initialize()

const app = express()

app.use(express.json())
app.use(LogMiddleware.handler)
app.use(routes)

app.listen(process.env.PORT, () => console.log("Server running at http://localhost:3333"))
