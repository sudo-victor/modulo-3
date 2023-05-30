import express from "express"
import dotenv from "dotenv"
dotenv.config()
import { initializeConnection } from "./database/connection.js"
import { productRouter } from "./routes/productRouter.js"

initializeConnection()

const app = express()

app.use(express.json())
app.use(productRouter)

app.listen(3333, () => console.log('listening on 3333'))