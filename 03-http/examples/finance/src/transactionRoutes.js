import { Router } from "express"
import { makeTransaction } from "./factories/make-transaction.js"
import {
  createTransaction,
  listTransactions
} from "./controllers/TransactionController.js"


const transactionRoute = Router()

transactionRoute.post("/transactions", createTransaction)
transactionRoute.get("/transactions", listTransactions)

export { transactionRoute }