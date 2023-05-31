import { Router } from "express";
import { makeCarRoute } from "../factories/carFactory";

const carDomain = makeCarRoute()
const carRouter = Router()

carRouter.post('/cars', async (req, res) => {
  return carDomain.create(req, res)
})

carRouter.patch('/cars/:id', async (req, res) => {
  return carDomain.updateIsSold(req, res)
})

carRouter.get('/cars/:plate', async (req, res) => {
  return carDomain.findByPlate(req, res)
})

export { carRouter }