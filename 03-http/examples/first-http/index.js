const express = require("express")

// instanciar
const app = express()
// habilitar json
app.use(express.json())
// GET http://localhost:3333/users

app.get("/users", (request, response) => {
  response.json({ name: "Victor" })
})

app.post("/users", (request, response) => {
  const { body, params, query, headers } = request
  console.log(headers)
  response.json()
})

// rodar
app.listen(3333, () => console.log("Servidor rodando"))
