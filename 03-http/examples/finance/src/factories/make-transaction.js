import { TransactionRepository } from "../repositories/transaction-repository.js"
import { TransactionService } from "../services/transaction-service.js"

export function makeTransaction(collection) {
  const repository = new TransactionRepository(collection)
  const service = new TransactionService(repository)
  return { service }
}
