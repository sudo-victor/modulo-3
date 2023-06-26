import JWT from "jsonwebtoken";
import { UserRepository } from "../../users/repositories/UserRepository";
import { Crypt } from "../../../utils/crypt";
import { makeError } from "../../../utils/error-handle";
import { CreateLoginDTO } from "../dtos/createLoginDto";
import { UserMapper } from "../../users/mappers/UserMapper";

class AuthService {
  constructor(private userRepository: UserRepository) {}

  async login(body: CreateLoginDTO) {
    // verificar email
    const userAlreadyExists = await this.userRepository.findByEmail(body.email)
    if(!userAlreadyExists) {
      return makeError('E-mail/password is invalid', 400)
    }

    // verificar senha
    const passwordIsValid = Crypt.compare(body.password, userAlreadyExists.password)
    if(!passwordIsValid) {
      return makeError('E-mail/password is invalid', 400)
    }

    // criar o token
    // payload
    const payload = { id: userAlreadyExists.id , email: userAlreadyExists.email }
    // secret key
    const secret = process.env.JWT_SECRET_KEY as string
    // options
    const options = { expiresIn: '15m', }

    const token = JWT.sign(payload, secret, options)

    return { token, user: UserMapper.toClient(userAlreadyExists as any) }
  }
}

export { AuthService }