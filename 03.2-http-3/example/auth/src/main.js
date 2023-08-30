import express from "express"
import dotenv from "dotenv"
dotenv.config()

import { Database } from "./database/Database.js"
import { router } from "./routes.js"

Database.initialize()

const port = process.env.PORT
const app = express()

app.use(express.json())

app.use(router)

app.listen(port, () => console.log(`Server running at ${port}`))
