import { compareSync } from "bcrypt"
import * as JWT from "jsonwebtoken"

import { UserRepository } from "../../users/repositories/UserRepository";
import { LoginDTO } from "../dtos/loginDto";

class AuthService {
  constructor(private userRepository: UserRepository) {}

  async login(params: LoginDTO) {
    // Verificar email
    const user = await this.userRepository.findByEmail(params.email);
    if(!user) {
      return { error: true, message: 'E-mail/password invalid', status: 400 }
    }

    // Verificar password
    const passwordIsValid = compareSync(params.password, user.password);
    if (!passwordIsValid) {
      return { error: true, message: 'E-mail/password invalid', status: 400 }
    }

    // token
    const payload = { id: user.id }
    const secretKey = process.env.SECRET_KEY as string
    const options = { expiresIn: '15m' }

    const token = JWT.sign(payload, secretKey, options)

    return { token, user }
  }
}

export { AuthService }