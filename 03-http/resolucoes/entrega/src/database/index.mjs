import { MongoClient } from 'mongodb';

const mongoURL = ""
const databaseName = "delivery"
const collectionName = "orders"
const client = new MongoClient(mongoURL);

const orderCollection = client.db(databaseName).collection(collectionName)

export default orderCollection
