import express from "express"
import dotenv from "dotenv"
dotenv.config()

import { Database } from "./database/configDatabase.js"
import { router } from "./routes.js"

Database.initialize()

const app = express()

app.use(express.json())
app.use(router)

app.listen(process.env.PORT, () => console.log("Server running at " + process.env.PORT))