import { Crypt } from "../../utils/Crypt.js"

class UserService {
  constructor(repository, photoRepository) {
    this.repository = repository
    this.photoRepository = photoRepository
  }

  async create(data) {
    const userAlreadyExists = await this.repository.findByEmail(data.email)
    if (userAlreadyExists) {
      return {
        error: true,
        message: "User already exists",
        status: 400
      }
    }

    const photo = await this.photoRepository.create(data.photo)

    const user = {
      ...data,
      password: Crypt.encrypt(data.password),
      photo: photo._id
    }
    return this.repository.create(user)
  }

  async findAll() {
    return this.repository.findAll()
  }

}

export { UserService }