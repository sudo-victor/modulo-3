import { ObjectId } from "mongodb"
import { Order } from "../domain/Order.js"

class OrderRepository {
  constructor(collection) {
    this.collection = collection
  }

  create(data) {
    const order = new Order(data)
    return this.collection.insertOne(order)
  }

  getById(id) {
    return this.collection.findOne({ _id: new ObjectId(id) })
  }

  update(id, data) {
    return this.collection.updateOne({
      _id: new ObjectId(id)
    }, {
      $set: {
        data
      }
    })
  }
}

export { OrderRepository }