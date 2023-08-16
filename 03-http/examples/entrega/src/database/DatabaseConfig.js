import { MongoClient } from "mongodb";

class Database {
  static initialize() {
    const client = new MongoClient('mongodb+srv://turma4:arnia4turma@arnia.mjald23.mongodb.net/')
    const collection = client.db("ecommerce").collection("order")
    return { collection, client }
  }
}

export { Database }