class UserService {
  constructor(repository) {
    this.repository = repository
  }

  create(data) {
    const userAlreadyExists = this.repository.findByEmail(data.email)

    if (userAlreadyExists) {
      return "Usuário já existe"
    }

    return this.repository.create(data)
  }

  findAll() {
    return this.repository.findAll()
  }

  update(id, data) {
    const user = this.repository.findById(id)

    if (!user) {
      return "Usuário nao encontrado"
    }

    const userUpdated = this.repository.update(id, data)

    return userUpdated
  }
}

export { UserService }