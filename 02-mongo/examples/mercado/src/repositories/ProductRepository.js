import { ObjectId } from "mongodb"

class ProductRepository {
  constructor(collection, entity) {
    this.collection = collection
    this.entity = entity
  }

  create(data) {
    const product = new this.entity(data)
    return this.collection.insertOne(product)
  }

  findById(id) {
    return this.collection.findOne({ _id: new ObjectId(id) })
  }

  findByName(name) {
    return this.collection.findOne({ name })
  }

  findByCategory(category) {
    return this.collection.find({ category }).toArray()
  }

  delete(id) {
    return this.collection.deleteOne({ _id: new ObjectId(id) })
  }

  update(id, data) {
    return this.collection.updateOne({ _id: new ObjectId(id) }, {
      $set: data
    })
  }
}

export { ProductRepository }
