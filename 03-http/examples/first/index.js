import express from "express"

const app = express()

app.use(express.json())

app.post("/products", (req, res) => {
  const data = req.body
  // ...
  res.json()
})

app.listen(3333, () => console.log("Server running at http://localhost:3333"))
