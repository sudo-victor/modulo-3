class UserRepository {
  constructor(database, model) {
    this.database = database
    this.model = model
  }

  create(data) {
    const user = new this.model(data)
    this.database.push(user)
    return user
  }

  findAll() {
    return this.database
  }

  findByEmail(email) {
    return this.database.find((item) => item.email === email)
  }

  findById(id) {
    return this.database.find(item => item.id === id)
  }

  update(id, data) {
    const user = this.database.find(item => item.id === id)
    Object.assign(user, data)
    return user
  }
}

export { UserRepository }
