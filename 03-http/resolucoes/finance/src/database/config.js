import { MongoClient } from 'mongodb';

const mongoURL = ""
const databaseName = "finance"
const collectionName = "transactions"

const client = new MongoClient(mongoURL);

export const database = client.db(databaseName).collection(collectionName)
