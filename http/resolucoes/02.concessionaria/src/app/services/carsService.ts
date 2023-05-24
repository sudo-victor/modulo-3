import { makeCar } from "../../factories/carFactory"
import { CarsRepository } from "../repositories/carsRepository"

export class CarsService {
  repository: CarsRepository;

  constructor(repository: CarsRepository) {
    this.repository = repository
  }

  async create(body: any) {
    const car = makeCar(body)

    const respositoryResult = await this.repository.create(car)

    return respositoryResult
  }

  async updateIsSold(id: string) {
    const carAlreadyExists = await this.repository.findById(id)
    if(!carAlreadyExists) {
      return { error: true, message: 'Car not found' }
    }

    await this.repository.updateIsSold(id)

    return {}
  }

  async findByPlate(plate: string) {
    const car = await this.repository.findByPlate(plate)

    if(!car) {
      return { error: true, message: 'Car not found' }
    }

    return car
  }

}
