import { Router } from "express"

import { initializeDatabase } from "../database/config-database.js"
import { makeTransaction } from "../factories/make-transaction.js"

const { client, collection } = initializeDatabase()
const { service } = makeTransaction(collection)

const transactionRoutes = Router()

transactionRoutes.post("/transactions", async (req, res) => {
  const { body } = req

  const result = await service.create(body)
  if (result?.error) {
    return res.status(400).json(result)
  }

  res.status(201).json()
})

export { transactionRoutes }
