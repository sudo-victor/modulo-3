import { MongoClient } from "mongodb"

export class ConfigDatabase {
  static initialize() {
    const client = new MongoClient(process.env.DATABASE_URL as string)
    const collection = client.db("kanban").collection("tasks")

    return { client, collection }
  }
}
