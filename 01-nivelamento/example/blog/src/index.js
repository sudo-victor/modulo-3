import { MakeUser } from "./factories/MakeUser.js"

const logicaUser = MakeUser.getInstance()

logicaUser.create({
  nickname: 'victor',
  email: 'victor@email.com',
  password: '123123',
})

logicaUser.addPost(1, {
  content: "lorem ipsum"
})

logicaUser.addPost(1, {
  content: "lorem ipsum2"
})

logicaUser.addPost(1, {
  content: "lorem ipsum3"
})

console.log(JSON.stringify(logicaUser.findAll()))

