import express from "express"
import dotenv from "dotenv"
import { DatabaseConfig } from "./database/DatabaseConfig"
import { routes } from "./routes"

dotenv.config()
DatabaseConfig.initialize()

const app = express()
const port = process.env.PORT || 3333

app.use(express.json())
app.use(routes)

app.listen(port, () => console.log(`Server running at http://localhost:${port}`))
