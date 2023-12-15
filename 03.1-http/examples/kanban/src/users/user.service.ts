import { hash } from "bcrypt"
import { IUser } from "./user";
import { CreateUserDTO } from "./user.dto";
import { UserRepository } from "./user.repository";
import { UserAlreadyExistsError } from "../shared/errors/user-already-exists.error";
import { UserNotFoundError } from "../shared/errors/user-not-found.error";
import { env } from "../configs/env";

export interface CreateUserResponse {
  error: boolean,
  message: string,
  status: number,
}

export class UserService {
  constructor(private repository: UserRepository) { }

  async create(data: CreateUserDTO): Promise<CreateUserResponse | IUser> {
    const userAlreadyExists = await this.repository.findByEmail(data.email)
    if (userAlreadyExists) {
      throw new UserAlreadyExistsError()
    }

    const payload = {
      ...data,
      password: await hash(data.password, 8)
    }

    const result = await this.repository.create(payload)

    return result
  }

  async updatePhoto(userId: string, filename: string) {
    const user = await this.repository.findById(userId)
    if(!user) {
      throw new UserNotFoundError()
    }

    const result = await this.repository.updatePhoto(userId, filename)

    return {
      ...result._doc,
      photo: `${env.URL_API}/uploads/${result.photo}`
    }
  }

}