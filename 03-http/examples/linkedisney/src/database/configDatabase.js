import { MongoClient } from "mongodb";
import { config } from "dotenv"
config()

function initializeDatabase() {
  const client = new MongoClient(process.env.DATABASE_URL)
  const collection = client.db(process.env.DATABASE_NAME).collection("profiles")
  return { client, collection }
}

export { initializeDatabase }