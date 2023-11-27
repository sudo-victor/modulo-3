import { MongoClient } from "mongodb"

export class ConfigDatabase {
  static initialize() {
    const client = new MongoClient("mongodb+srv://joaozin_minecraft:KoR657RFuhBCZBdZ@arniaturma5.hlqlsqm.mongodb.net/")
    
    const carCollection = client.db("arnia-car").collection("cars")

    return { client, carCollection }
  }
}
