import { MongoClient } from 'mongodb';

const mongoURL = "mongodb+srv://victorarnia:vNOhJP9xkxniGWj1@arnia.3nx7vn4.mongodb.net/"
const databaseName = "delivery"
const collectionName = "orders"
const client = new MongoClient(mongoURL);

const orderCollection = client.db(databaseName).collection(collectionName)

export default orderCollection
