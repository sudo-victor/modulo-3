import express from "express"

import { transactionRoutes } from "./routes/transaction-routes.js"

const app = express()

app.use(express.json())
app.use(transactionRoutes)

app.listen(3333, () => console.log("Server is running"))