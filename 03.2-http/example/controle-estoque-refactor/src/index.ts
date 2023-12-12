import "dotenv/config"
import express from "express"

import { connectionDatabase } from "./database/connection"
import { productRoutes } from "./routes"

connectionDatabase()

const app = express()

app.use(express.json())
app.use(productRoutes)

app.listen(3000, () => console.log("Server is running"))
