import express from "express"

import { orders } from "./database/configDatabase.js"
import OrderService from "./services/OrderService.js"
import OrderRepository from "./repositories/OrderRepository.js"

const repository = new OrderRepository(orders)
const service = new OrderService(repository)

// REST API
const app = express()

app.use(express.json())

// headers, body, params, query
app.post("/orders", async (req, res) => {
  const { body } = req

  await service.create(body)

  res.status(201).json()
})

app.get("/orders", async (req, res) => {
  const orders = await service.findAllPending()
  res.status(200).json(orders)
})

app.patch("/orders/:id", async (req, res) => {
  const { id } = req.params

  await service.changeStatusToDelivered(id)

  res.status(204).json()
})

app.listen(3000, () => console.log("🚀 Server is running!"))
