const { MongoClient } = require("mongodb")

function initializeDB() {
  const client = new MongoClient("mongodb+srv://joaozin_minecraft:KoR657RFuhBCZBdZ@arniaturma5.hlqlsqm.mongodb.net/")
  const collection = client.db("turma5_commerce").collection("products")
  return { client, collection }
}

module.exports = initializeDB