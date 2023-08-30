const http = require("http")

const handler = (req, res) => {
  const route = `${req.method}:${req.url}`

  const routesMapper = {
    "GET:/users": () => {},
    "POST:/": () => {}
  }

  routesMapper["GET:/users"]


  res.end("TERMINOU A REQUISICAO")
}

const app = http.createServer(handler)


app.listen(3333, () => console.log("server running at 3333"))

