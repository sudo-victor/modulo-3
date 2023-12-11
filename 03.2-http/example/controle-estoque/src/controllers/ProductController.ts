import { Request, Response } from "express"
import { createProduct } from "../createProduct"

export async function createProductController(req: Request, res: Response) {
  const { body } = req

  const product = await createProduct({
    name: body.name,
    amount: body.amount
  })

  // json -> object || array
  // send -> string
  res.status(201).json(product)
}