import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import { DatabaseConfig } from "./database/DatabaseConfig"
import { routes } from "./routes"

dotenv.config()
DatabaseConfig.initialize()

const app = express()

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(routes)

export { app }