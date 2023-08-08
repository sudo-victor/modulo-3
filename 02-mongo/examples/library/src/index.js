import { MongoClient } from "mongodb"

import { MakeBook } from "./factories/MakeBook.js"

const client = new MongoClient('mongodb+srv://turma4:arnia4turma@arnia.mjald23.mongodb.net/')
const collection = client.db("Arnia").collection("books")

const service = MakeBook.getInstance(collection)

;(async () => {
  // const book = await service.create({
  //   title: 'Titulo 2',
  //   description: "asdasd",
  //   releasedAt: "10-10-2020",
  //   author: "author 1",
  //   category: "acao",
  // })
  // console.log(book)

  const book = await service.delete("64d2b99fa60043c5fd098e1d")
  console.log(book)
  client.close()
})()

