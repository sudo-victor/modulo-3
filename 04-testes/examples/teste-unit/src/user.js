class UserService {
  constructor(repository) {
    this.repository = repository
  }

  create(user) {
    const userAlreadyExists = this.repository.findByEmail(user.email)
    if(userAlreadyExists) {
      throw new Error(`User ${user.email} already exists`)
    }

    return this.repository.create(user)
  }
}

class UserRepository {
  users = []

  create(user) {
    console.log(`CREATE`)
    this.users.push(user);
    return user
  }

  findByEmail(email) {
    console.log(`findByEmail`)
    this.users.find(user => user.email === email)
  }
}

module.exports = { UserService, UserRepository }

