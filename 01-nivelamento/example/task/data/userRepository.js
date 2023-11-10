const database = []

class UserRepository {
  create(user) {
    database.push(user)
  }

  findAll() {
    return database
  }
}

module.exports = UserRepository