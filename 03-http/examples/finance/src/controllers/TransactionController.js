import { makeTransaction } from "../factories/make-transaction.js"
import { initializeDatabase } from "../database/config-database.js"

const { client, collection } = initializeDatabase()

const { service } = makeTransaction(collection)

const createTransaction = async (req, res) => {
  const { body } = req

  const result = await service.create(body)
  if (result?.error) {
    return res.status(400).json(result)
  }

  res.status(201).json()
}

const listTransactions =  (req, res) => {
  res.json([])
}

export { createTransaction, listTransactions }