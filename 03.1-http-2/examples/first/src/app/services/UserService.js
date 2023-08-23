class UserService {
  constructor(respository) {
    this.respository = respository
  }

  async create(data) {
    const userAlreadyExists = this.respository.findByEmail(data.email)
    if (userAlreadyExists) {
      return { error: true, message: "User Already Exists." }
    }

    const result = await this.respository.create(data)
    return result
  }
}

export { UserService }
