import { Car } from "../domain/Car.js";

class CarRepository {
  constructor(collection) {
    this.collection = collection
  }

  create(data) {
    const car = new Car(data)
    return this.collection.insertOne(car)
  }

  findCarsByModel(model) {
    return this.collection.find({ model: { $regex: model, $options: "i" } }).toArray()
  }

  findCarsByReleasedAt(releasedAt) {
    return this.collection.find({
      releasedAt: { $gte: releasedAt }
    }).toArray()
  }
}

export { CarRepository }
