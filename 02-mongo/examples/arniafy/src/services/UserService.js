const User = require("../data/entities/User")
const UserRepository = require('../data/repositories/UserRepository')

const database = []
const repository = new UserRepository()

class UserService {
  create(username) {
    const user = new User(username)
    repository.create(user)
    return user
  }

  findAll() {
    return repository.find()
  }
}

module.exports = UserService
