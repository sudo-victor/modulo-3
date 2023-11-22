import { MongoClient } from "mongodb"

const client = new MongoClient("mongodb+srv://joaozin_minecraft:KoR657RFuhBCZBdZ@arniaturma5.hlqlsqm.mongodb.net/")

const orders = client.db("delivery").collection("orders")

export { orders, client }