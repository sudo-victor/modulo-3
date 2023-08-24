import express from "express"
import dotenv from "dotenv"
dotenv.config()

import { routes } from "./routes.js"
import { DatabaseConfig } from "./database/DatabaseConfig.js"

DatabaseConfig.initialize()

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3333, () => console.log("Server running at http://localhost:3333"))
