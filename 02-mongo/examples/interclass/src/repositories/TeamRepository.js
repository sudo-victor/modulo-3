class TeamRepository {
  constructor(collection, model) {
    this.collection = collection
    this.model = model
  }

  async create(data) {
    const team = new this.model(data)
    return this.collection.insertOne(team)
  }

  findByName(name) {
    return this.collection.findOne({ name })
  }

  findByCategory(category) {
    return this.collection.find({
      category: { $regex: category, $options: "i" }
    }).toArray()
  }
}

export { TeamRepository }
