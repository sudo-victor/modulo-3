import { CarRepository } from "../repositories/CarRepository.js";
import { CarService } from "../services/CarService.js";

class MakeCar {
  static getInstance(collection) {
    const repository = new CarRepository(collection)
    const service = new CarService(repository)
    return { service, repository }
  }
}

export { MakeCar }
