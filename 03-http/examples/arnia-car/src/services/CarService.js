import { Car } from "../entities/Car.js"

export class CarService {
  constructor(repository) {
    this.repository = repository
  }

  async create(data) {
    const car = new Car(data)
    await this.repository.create(car)
  }
}