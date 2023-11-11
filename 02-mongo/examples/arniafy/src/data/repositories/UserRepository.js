
const database = []

class UserRepository {
  create(user) {
    database.push(user)
  }

  find() {
    return database
  }
}

module.exports = UserRepository
