import { UserRepository } from "../repositories/UserRepository"
import { makeError } from "../../utils/error-handle"
import { makeUser } from "../factories/makeUser"
import { CreateUserDTO } from "../dtos/createUserDto"
import { GetMeDTO } from "../dtos/getMeDto"
import { IUser, UserMapper } from "../mappers/UserMapper"

class UserService {
  constructor(private repository: UserRepository) {}

  async create(body: CreateUserDTO) {
    const userAlreadyExists = await this.repository.findByEmail(body.email)

    if (userAlreadyExists) {
      return makeError('User already exists', 400)
    }

    const userToPersist = makeUser(body)

    return this.repository.create(userToPersist)
  }

  async me(body: GetMeDTO) {
    const user = await this.repository.findById(body.id)

    if (!user) {
      return makeError('User not found', 404)
    }

    return UserMapper.toClient(user as unknown as IUser)
  }

}

export { UserService }