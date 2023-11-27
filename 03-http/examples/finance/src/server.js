import express from "express"
import { transactionRoute } from "./transactionRoutes.js"

const app = express()

app.use(express.json())
app.use(transactionRoute)

app.listen(3333, () => console.log("Server is running"))