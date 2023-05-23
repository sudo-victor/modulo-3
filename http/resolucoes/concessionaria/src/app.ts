import express from "express";
import { database } from "./database/config"
import { makeCar } from "./factories/carFactory";
import { createCarBodyValidator } from "./utils/bodyValidate";
import { ObjectId } from "mongodb";
import { createCarController } from "./app/controllers/carsController";

const app = express();
const port = 3333

app.use(express.json())

app.post('/cars', async (req, res) => {
  return createCarController(req, res);
})

// - Deve ser possível atualizar um carro no sistema, atualizando para vendido
app.patch('/cars/:id', async (req, res) => {
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

app.listen(port, () => {
  console.log("listening on port " + port)
})