import { Transaction } from "../domain/transaction.js"

export class TransactionService {
  constructor(repository) {
    this.repository = repository
  }

  async create(data) {
    if (data.value < 0) {
      return { error: true, message: "Value invalid" }
    }

    // if (!(data.kind === "withdraw" || data.kind === "deposit")) {
    // if (data.kind !== "withdraw" && data.kind !== "deposit")) {
    if(!["withdraw", "deposit"].includes(data.kind)) {
      return { error: true, message: "Kind invalid"}
    }

    const transaction = new Transaction(data)

    await this.repository.create(transaction)
  }
}
