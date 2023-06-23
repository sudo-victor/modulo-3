import { UserRepository } from "../repositories/UserRepository"
import { makeError } from "../../../utils/error-handle"
import { makeUser } from "../factories/makeUser"
import { CreateUserDTO } from "../dtos/createUserDto"
import { GetMeDTO } from "../dtos/getMeDto"
import { IUser, UserMapper } from "../mappers/UserMapper"
import { PhotoRepository } from "../../photos/repositories/PhotoRepository"

class UserService {
  constructor(
    private repository: UserRepository,
    private photoRepository: PhotoRepository
  ) {}

  async create(body: CreateUserDTO) {
    const userAlreadyExists = await this.repository.findByEmail(body.email)

    if (userAlreadyExists) {
      return makeError('User already exists', 400)
    }

    const photo = await this.photoRepository.create(body.photo)

    const userToPersist = makeUser({...body, photo: photo._id })

    return this.repository.create({ ...userToPersist, photo })
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