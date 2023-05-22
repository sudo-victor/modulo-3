import { MongoClient } from 'mongodb';

const mongoURL = "mongodb+srv://victorarnia:vNOhJP9xkxniGWj1@arnia.3nx7vn4.mongodb.net/"
const databaseName = "finance"
const collectionName = "transactions"

const client = new MongoClient(mongoURL);

export const database = client.db(databaseName).collection(collectionName)
