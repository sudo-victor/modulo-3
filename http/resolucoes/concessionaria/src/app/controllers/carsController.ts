import { Request, Response } from 'express'
import { createCarBodyValidator } from "../../utils/bodyValidate"
import { createCarService } from "../services/carsService"

export async function createCarController(req: Request, res: Response) {
  const { body } = req

  const bodyIsValid = createCarBodyValidator(body)
  if(!bodyIsValid) {
    res.status(400).json({
      error: true,
      message: 'Invalid body'
    })
  }

  const car = await createCarService(body)

  res.status(201).json({
    error: false,
    data: car
  })
}