import { User } from "./entities/User.js";
import { MakeUser } from "./factories/MakeUser.js"

import { MongoClient } from "mongodb"

const client = new MongoClient('mongodb+srv://turma4:arnia4turma@arnia.mjald23.mongodb.net/')

const livrosCollection = client.db("Arnia").collection("livros")

const user = new User({ 
   nickname: 'victor2',
   email: 'victor2@email.com',
   password: '123123',
})

;(async () => {
  await livrosCollection.insertOne(user)
  const result = await livrosCollection.find().toArray()
  console.log(result)
})()


// const logicaUser = MakeUser.getInstance()

// logicaUser.create({
//   nickname: 'victor',
//   email: 'victor@email.com',
//   password: '123123',
// })

// logicaUser.addPost(1, {
//   content: "lorem ipsum"
// })

// logicaUser.addPost(1, {
//   content: "lorem ipsum2"
// })

// logicaUser.addPost(1, {
//   content: "lorem ipsum3"
// })

// console.log(JSON.stringify(logicaUser.findAll()))

