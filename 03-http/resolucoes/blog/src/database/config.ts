import { MongoClient } from "mongodb";

const url = process.env.MONGO_URL as string
const databaseName = "blog"
const client = new MongoClient(url);

const database = client.db(databaseName)

export { database }
