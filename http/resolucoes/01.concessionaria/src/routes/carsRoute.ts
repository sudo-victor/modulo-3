import { Request, Response, Router } from "express";
import { createCarController } from "../app/controllers/carsController";
import { ObjectId } from "mongodb";
import { database } from "../database/config";


const carsRouter = Router()

carsRouter.post('/cars', async (req: Request, res: Response) => {
  return createCarController(req, res);
})

// - Deve ser possível atualizar um carro no sistema, atualizando para vendido
carsRouter.patch('/cars/:id', async (req, res) => {
  const { params } = req

  const idIsValid = ObjectId.isValid(params.id)
  if(!idIsValid) {
    res.status(400).json({
      error: true,
      message: 'Invalid id'
    })
  }

  const carAlreadyExists = await database.findOne({
    _id: new ObjectId(params.id)
  })
  if (!carAlreadyExists) {
    res.status(404).json({
      error: true,
      message: 'Car not found'
    })
  }

  await database.updateOne({
    _id: new ObjectId(params.id)
  }, {
    $set: {
      isSold: true,
    }
  })

  res.status(204).json()
})

export { carsRouter }