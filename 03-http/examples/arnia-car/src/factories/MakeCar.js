import { CarRepository } from "../repositories/CarRepositories.js"
import { CarService } from "../services/CarService.js"
import { CarController } from "../controllers/CarController.js"

export class MakeCar {
  static build(collection) {
    const repository = new CarRepository(collection)
    const service = new CarService(repository)
    const controller = new CarController(service)
    return controller
  }
}
