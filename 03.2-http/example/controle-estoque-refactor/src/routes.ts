import { Router } from "express"

import { makeProduct } from "./factories/makeProduct"
import { logMiddleware } from "./middlewares/LogMiddleware"
import { createProductValidateMiddleware } from "./middlewares/CreateProductValidateMiddleware"

const productController = makeProduct()

const productRoutes = Router()

productRoutes.post("/products", logMiddleware, createProductValidateMiddleware, productController.create.bind(productController))
productRoutes.get("/products", logMiddleware, productController.list.bind(productController))

export { productRoutes }