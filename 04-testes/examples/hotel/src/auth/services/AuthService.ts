import JWT from "jsonwebtoken"
import { compareSync } from "bcrypt";

import { UserRepository } from "../../users/repositories/UserRepository";
import { makeError } from "../../utils/makeError";
import { CreateUserDto } from "../dtos/createUserDto";
import { IUser } from "../../users/entities/User";

type IToApi =  IUser & { _id: string }

function toApi(user: IToApi) {
  return {
    id: user._id,
    email: user.email,
    name: user.name,
  }
}

class AuthService {
  constructor(private userRepository: UserRepository) {}

  async login(data: CreateUserDto) {
    // Procurar o usuario no banco pelo email
    const user = await this.userRepository.findByEmail(data.email)
    if (!user) {
      return makeError("E-mail/password is invalid", 400)
    }


    // Validar a senha
    const passwordIsValid = compareSync(data.password, (user as IUser).password)
    if (!passwordIsValid) {
      return makeError("E-mail/password is invalid", 400)
    }

    if ((user as IUser).password) {
      delete (user as any).password
    }


    // Gerar o JWT
    const payload = { ...toApi(user as any as IToApi) }
    const secretKey = process.env.JWT_SECRET_KEY as string
    const options = { expiresIn: "15min" }

    const tokinho = JWT.sign(payload, secretKey, options)

    return { tokinho, user: toApi(user as any as IToApi) }
  }
}

export { AuthService }