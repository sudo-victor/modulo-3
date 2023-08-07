class UserService {
  constructor(
    repository,
  ) {
    this.repository = repository
  }

  create(data) {
    const user = this.repository.findByEmail(data.email)
    if (user) {
      return "User already exists"
    }

    return this.repository.create(data)
  }

  findAll() {
    return this.repository.findAll()
  }

  addPost(userId, data) {
    return this.repository.addPost(userId, data)
  }
}

export { UserService }