import { Router } from "express"
import { makeProductDomain } from "../utils/factories/productFactory.js"

const productRouter = Router()

const product = makeProductDomain()

productRouter.post("/products", product.create.bind(product))
productRouter.patch("/products/increment/:id", product.incrementAmount.bind(product))

export { productRouter }
