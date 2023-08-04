import { database } from "./database/database.js"
import { makeUser } from "./factories/UserFactory.js"

const logica = makeUser(database)

logica.create({
  name: "Victor",
  email: "a@b.com",
  password: "1234",
})

logica.update(1, {
  name: "Teste",
})

console.log(logica.findAll())

