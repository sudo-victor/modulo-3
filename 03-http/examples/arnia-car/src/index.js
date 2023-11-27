import express from "express"
import { carRoutes } from "./routes/carRoute.js"

const app = express()

app.use(express.json())
app.use(carRoutes)

app.listen(3333, () => console.log("🌚Server is running"))