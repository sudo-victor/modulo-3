const { Router } = require("express")
const { ProductController } = require("./controllers/ProductController")

const router = Router()
const controller = new ProductController()

router.get("/products", controller.findAll)

router.get("/products/:id", (req, res) => {
  res.send("ok")
})

module.exports = { router }

