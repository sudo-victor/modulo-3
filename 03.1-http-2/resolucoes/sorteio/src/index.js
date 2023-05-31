import express from "express"
import dotenv from "dotenv"
dotenv.config()

import { initializeDatabase } from "./database/config.js"
import { route } from "./routes/raffleRoute.js"

initializeDatabase()

const app = express()

app.use(express.json())
app.use(route)

app.listen(3333, () => {
  console.log("listening on port 3333")
})
