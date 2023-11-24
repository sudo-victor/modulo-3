export class TransactionRepository {
  constructor(collection) {
    this.collection = collection
  }

  async create(transaction) {
    return this.collection.insertOne(transaction)
  }
}