import { hashSync } from "bcrypt" 
import { PhotoRepository } from "../../photos/repositories/PhotoRepository";
import { CreateUserServiceDTO } from "../dtos/createUserDto";
import { UserRepository } from "../repositories/UserRepository";

class UserService {
  constructor(
    private repository: UserRepository,
    private photoRepository: PhotoRepository
  ) {}

  async create(params: CreateUserServiceDTO) {
    // verificar se usuario ja existe
    const userAlreadyExist = await this.repository.findByEmail(params.email);
    if(userAlreadyExist) {
      return { error: true, message: 'User already exists', status: 400 }
    }

    // criar foto
    const photo = await this.photoRepository.create(params.photo)

    // criar user
    const payload = {
      ...params,
      password: hashSync(params.password, 8),
      photo: photo.id
    }

    const result = await this.repository.create(payload)

    return { ...(result as any)._doc, photo }
  }
}

export { UserService }