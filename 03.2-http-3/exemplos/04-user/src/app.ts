import path from "path"
import express from "express"
import dotenv from "dotenv"
dotenv.config()

import { initializeMongoose } from "./database/config"
import { router } from "./routes"

initializeMongoose()

const app = express()
const port = process.env.PORT || 3000

app.use('/images', express.static(path.resolve(__dirname, "..", "uploads")))
app.use(express.json())
app.use(router)

app.listen(port, () => console.log("listening on port " + port))
