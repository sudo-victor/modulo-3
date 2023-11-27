export class CarRepository {
  constructor(collection) {
    this.collection = collection
  }
  
  async create(car) {
    await this.collection.insertOne(car)
  }
}