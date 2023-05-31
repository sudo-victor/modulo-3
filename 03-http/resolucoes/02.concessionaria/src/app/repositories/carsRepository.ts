import { ObjectId } from "mongodb";
import { database } from "../../database/config";

export class CarsRepository {
  async create(car: any) {
    const result = await database.insertOne(car)
    return result
  }

  async findById(id: string) {
    return database.findOne({
      _id: new ObjectId(id),
    })
  }

  async findByPlate(plate: string) {
    return database.findOne({
      plate
    })
  }

  async updateIsSold(id: string) {
    return database.updateOne({
      _id: new ObjectId(id),
    }, {
      $set: { isSold: true }
    })
  }
}