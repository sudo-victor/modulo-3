import { MongoClient } from "mongodb"

const url = "mongodb+srv://victorarnia:vNOhJP9xkxniGWj1@arnia.3nx7vn4.mongodb.net/"
const databaseName = "concessionaria"
const collectionName = "cars"
const client = new MongoClient(url)

const database = client.db(databaseName).collection(collectionName)

export { database }
