import { MongoClient } from 'mongodb'

const url = process.env.MONGO_URL as string
const databaseName = "concessionaria02"
const collectionName = "cars"

const client = new MongoClient(url);

const database = client.db(databaseName).collection(collectionName)

export { database }
