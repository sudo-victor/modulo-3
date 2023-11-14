const { MongoClient } = require("mongodb")

const client = new MongoClient("mongodb+srv://joaozin_minecraft:KoR657RFuhBCZBdZ@arniaturma5.hlqlsqm.mongodb.net/")

const dbName = "arnia-prime"

const books = client
  .db(dbName)
  .collection("books")

module.exports = { client, books }

