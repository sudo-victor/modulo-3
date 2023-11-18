const { ObjectId } = require("mongodb")

class ProductRepository {
  constructor(collection) {
    this.collection = collection
  }

  create(product) {
    this.collection.insertOne(product)
  }

  save(product) {
    this.collection.updateOne(
      { _id: new ObjectId(product._id) },
      { $set: product }
    )
  }

  findById(id) {
    return this.collection.findOne({
      _id: new ObjectId(id)
    })
  }

  findByName(name) {
    return this.collection.findOne({ name })
  }

  findProductsThatContains(aName) {
    return this.collection.find({
      name: { $regex: aName, $options: 'i' }
    }).toArray()
  }

  findProductsByPriceRange(startPrice, endPrice) {
    return this.collection.find({
      price: { $gte: startPrice, $lte: endPrice }
    }).toArray()
  }
}

module.exports = ProductRepository