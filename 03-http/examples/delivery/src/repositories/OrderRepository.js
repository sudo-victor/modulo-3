import { ObjectId } from "mongodb"

export default class OrderRepository {
  constructor(collection) {
    this.collection = collection
  }

  create(order) {
    this.collection.insertOne(order)
  }

  findAllPending() {
    return this.collection.find({
      isDelivered: false
    }).toArray()
  }

  findById(id) {
    return this.collection.findOne({
      _id: new ObjectId(id)
    })
  }

  updateOrderStatusToDelivered(id) {
    return this.collection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: { isDelivered: true }
      }
    )
  }

}