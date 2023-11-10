const User = require('../data/user')
const UserRepository = require('../data/userRepository')
// Exportar -> module.exports
// Importar -> require

const repo = new UserRepository()

class UserService {
  create(name, email) {
    const user = new User(name, email)
    repo.create(user)
  }

  findAll() {
    return repo.findAll()
  }
}

module.exports = UserService