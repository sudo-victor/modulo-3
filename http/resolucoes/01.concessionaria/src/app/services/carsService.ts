import { makeCar } from "../../factories/carFactory"
import { createCarRepository } from "../repositories/carsRepository"

export async function createCarService(body: any) {
  const car = makeCar(body)

  const resultRepository = await createCarRepository(car)

  return resultRepository
}