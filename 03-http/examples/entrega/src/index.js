import express from "express"

import { Database } from "./database/databaseConfig.js";
import { MakeOrder } from "./factories/MakeOrder.js";

const { collection, client } = Database.initialize()

const service = MakeOrder.getInstance(collection)

const app = express()

app.use(express.json())

app.post("/products", async (req, res) => {
  const result = await service.create(req.body)

  res.status(200).json(result)
})

app.patch("/products/:id", async (req, res) => {
  const result = await service.update(req.params.id, req.body)

  res.json(result)
})

app.listen(3333, () => console.log("Está de pé"))

// Get - Buscar
// POST - criar
// PUT/PATCH - atualizar
// DELETE - deletar

// http://localhost:3333/products
// http://localhost:3333/products

// CLIENT - Requisiçao -> SERVER - Retorna Resposta -> CLIENT 

// BODY - estruturas complexas
// HEADER - 
// PARAMS -
// QUERY - 
