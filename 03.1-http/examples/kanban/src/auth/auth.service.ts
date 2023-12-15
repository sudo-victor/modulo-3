import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"

import { UserRepository } from "../users/user.repository";
import { LoginDTO } from "./auth.dto";
import { env } from "../configs/env";

export class AuthService {
  constructor(private userRepository: UserRepository) {}

  async login(data: LoginDTO) {
    // Validar se o email existe no banco
    const user = await this.userRepository.findByEmail(data.email)
    if (!user) {
      return {
        error: true,
        message: "Invalid credentials",
        status: 400
      }
    }

    // Validar a senha
    const password = data.password ?? ""
    const passwordIsValid = await compare(password, user.password)
    if (!passwordIsValid) {
      return {
        error: true,
        message: "Invalid credentials",
        status: 400
      }
    }

    // Gerar o token
    /** 
     * 1 -> Payload: Corpo da credencial
     * 2 -> Secret Key: Chave privada, para assinar nossa credencial
     * 3 -> Options: Configuracao extras, como: tempo de expiraçao e quando foi gerada
     */
    const payload = { id: user.id, email: user.email }
    const secretKey = env.JWT_SECRET_KEY
    const options = { expiresIn: '1h' }

    const token = sign(payload, secretKey, options)

    return { token, user}
  }
}

// Controller > Service > Repository