import { MongoClient } from "mongodb"

function initializeDatabase() {
  const client = new MongoClient('mongodb+srv://turma4:arnia4turma@arnia.mjald23.mongodb.net/')
  const collection = client.db("interclass").collection("teams")

  return { client, collection }
}

export { initializeDatabase }
