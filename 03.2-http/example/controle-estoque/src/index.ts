import "dotenv/config"
import express from "express"

import { connectionDatabase } from "./database/connection"
import { createProductController } from "./controllers/ProductController"

connectionDatabase()

const app = express()

// Habilita o json no servidor(nas rotas)
app.use(express.json())

app.post("/products", createProductController)

app.listen(3000, () => console.log("Server is running"))