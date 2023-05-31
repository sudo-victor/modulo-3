import { MongoClient } from "mongodb";

const url = process.env.MONGO_CLIENT as string
const databaseName = "donate"

const client = new MongoClient(url);

const database = client.db(databaseName)

export { database }
