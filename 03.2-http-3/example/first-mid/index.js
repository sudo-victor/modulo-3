import express from "express"

const server = express()

server.use(express.json())

function controller(req, res) {
  const result = [
    { name: "Camisa", price: 70 }
  ]

  console.log(req.user)

  res.json(result)
}

server.use(MiddlewareLog.handler)

server.get("/products", controller)

server.listen(3333, () => console.log("server running at 3333"))
