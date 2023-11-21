const ProductService = require("./services/ProductService")
const ProductRepository = require("./repositories/ProductRepository")
const initializeDB = require("./database/config")

const { client, collection } = initializeDB()

const repository = new ProductRepository(collection)
const services = new ProductService(repository)

// const app = express()
// app.post("/products", async (req, res) => {
//   await services.create(req.body)
//   res.status(201).json()
// })

;(async () => {
  // Create
  // await services.create({
  //   name: "SNES - Super Nintendo",
  //   description: "Colecionável",
  //   price: 2300,
  //   category: "tech",
  // })

  // Search By Name
  // const result = await services.searchByName("js")

  // Search by price range
  // const result = await services.searchByPriceRange(980, 1200)
  // console.log(result)

  const result = await services.remove('6557f39f7ced7529fceb0c7e')
  console.log(result)

  // await client.close()
})()