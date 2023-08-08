import { ObjectId } from "mongodb"

class BookRepository {
  constructor(collection, model) {
    this.collection = collection
    this.model = model
  }

  findByTitle(title) {
    return this.collection.findOne({ title })
  }

  create(data) {
    const book = new this.model(data)
    return this.collection.insertOne(book)
  }

  findById(id) {
    return this.collection.findOne({ _id: new ObjectId(id) })
  }


  findByAuthor(author) {
    return this.collection.find({ author }).toArray()
  }

  update(id, data) {
    return this.collection.updateOne({ _id: new ObjectId(id) }, {
      $set: data
    })
  }

  delete(id) {
    return this.collection.deleteOne({ _id: new ObjectId(id) })
  }
}

export { BookRepository }
