import { Request, Response } from "express"
import { ProductService } from "../services/ProductService"

export class ProductController {
  constructor(private productService: ProductService) {}

  async create(req: Request, res: Response) {
    const { body } = req

    const product = await this.productService.create({
      name: body.name,
      amount: body.amount
    })
  
    res.status(201).json(product)
  }

  async list(req: Request, res: Response) {
    const result = await this.productService.list()
    res.json(result)
  }
}
