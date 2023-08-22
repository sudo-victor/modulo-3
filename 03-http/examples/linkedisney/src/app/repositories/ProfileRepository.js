class ProfileRepository {
  constructor(collection, model) {
    this.collection = collection
    this.model = model
  }

  create(data) {
    const profile = new this.model(data)
    return this.collection.insertOne(profile)
  }
}

export { ProfileRepository }