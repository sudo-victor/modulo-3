import { config } from "dotenv"
config()
import express from "express"
import { itemRouter } from "./routes/itemsRoute"

const app = express()

app.use(express.json())
app.use(itemRouter)

app.listen(3434, () => console.log("listening on port 3434"))