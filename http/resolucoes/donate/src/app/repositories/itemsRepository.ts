import { ObjectId } from "mongodb";

export class ItemsRepository {
  database: any

  constructor(database: any) {
    this.database = database.collection("items");
  }

  async create(item: any) {
    return this.database.insertOne(item)
  }

  async getById(id: string) {
    return this.database.findOne({ _id: new ObjectId(id) })
  }

  async updateDonateStatus(id: string) {
    return this.database.updateOne({ _id: new ObjectId(id) }, {
      $set: { isDonated: true }
    })
  }

  async getAll(city: string | null) {
    const query = city ? { city } : {}

    return this.database.find(query).toArray()
  }
}