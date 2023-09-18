import JWT from "jsonwebtoken"
import bcrypt from "bcrypt";

import { UserRepository } from "../../users/repositories/UserRepository";
import { makeError } from "../../../utils/makeError";
import { IUser } from "../../users/entities/User";
import { AuthDto } from "../dtos/authDto";
import { AuthMapper, IToApi } from "../../../utils/mappers/AuthMapper";


class AuthService {
  constructor(private userRepository: UserRepository) {}

  async login(data: AuthDto) {
    // Procurar o usuario no banco pelo email
    const user = await this.userRepository.findByEmail(data.email)
    if (!user) {
      return makeError("E-mail/password is invalid", 400)
    }

    // Validar a senha
    const passwordIsValid = bcrypt.compareSync(data.password, (user as IUser).password)

    if (!passwordIsValid) {
      return makeError("E-mail/password is invalid", 400)
    }

    // Gerar o JWT
    const payload = { ...AuthMapper.toApi(user as any as IToApi) }
    const secretKey = process.env.JWT_SECRET_KEY as string
    const options = { expiresIn: "15min" }

    const tokinho = JWT.sign(payload, secretKey, options)

    return { tokinho, user: AuthMapper.toApi(user as any as IToApi) }
  }
}

export { AuthService }