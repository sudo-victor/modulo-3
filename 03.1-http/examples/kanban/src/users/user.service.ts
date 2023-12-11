import bcrypt from "bcrypt"
import { IUser } from "./user";
import { CreateUserDTO } from "./user.dto";
import { UserRepository } from "./user.repository";

export interface CreateUserResponse {
  error: boolean,
  message: string,
  status: number,
}

export class UserService {
  constructor(private repository: UserRepository) {}

  async create(data: CreateUserDTO): Promise<CreateUserResponse | IUser> {
    const userAlreadyExists = await this.repository.findByEmail(data.email)
    if (userAlreadyExists) {
      return { error: true, message: "User already exists", status: 409 }
    }

    const payload = {
      ...data,
      password: await bcrypt.hash(data.password, 8)
    }

    // const passwordIsValid = await bcrypt.compare("123456", "$2b$08$d1tPDehrUjdxBSqDYlxDSOzyYVZcmO5SRw69om/pIuPNPCgogQ7Rq")

    const result = await this.repository.create(payload)

    return result
  }

}