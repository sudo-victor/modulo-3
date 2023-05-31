import { MongoClient } from "mongodb"

const url = ""
const databaseName = "concessionaria"
const collectionName = "cars"
const client = new MongoClient(url)

const database = client.db(databaseName).collection(collectionName)

export { database }
