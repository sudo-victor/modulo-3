import "dotenv/config"
import express from "express"
import { taskRoute } from "./routes"
import { MongooseConfigDatabase } from "./database/MongooseConfigDatabase"

MongooseConfigDatabase.initialize()

const app = express()

app.use(express.json())
app.use(taskRoute)

app.listen(process.env.PORT, () => console.log("Server is running"))