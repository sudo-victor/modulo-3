import { config } from "dotenv"
config()
import express from "express"

import { router } from "./routes.js"

const app = express()

app.use(express.json())
app.use(router)

const port = process.env.PORT || 3333
app.listen(port, () => console.log("App running at " + port))
