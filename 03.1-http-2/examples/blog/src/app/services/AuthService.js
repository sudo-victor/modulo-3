import JWT from "jsonwebtoken"
import { compareSync } from "bcrypt"

class AuthService {
  constructor(userRepository) {
    this.userRepository = userRepository
  }

  async login(data) {
    // 1 - Verificar se o email/senha estao corretas
    const user = await this.userRepository.findByEmail(data.email)
    if (!user) {
      return {
        error: true,
        status: 400,
        message: "E-mail not found"
      }
    }

    const passwordIsValid = compareSync(data.password, user.password)
    if (!passwordIsValid) {
      return {
        error: true,
        status: 400,
        message: "Password is invalid"
      }
    }

  // 2 - Gerar JWT (Json Web Token)
    // 1 - Payload - { userId }
    // 2 - Secret Key - Assinatura
    // 3 - Options - { exp }
    const payload = { email: user.email }
    const secretKey = process.env.JWT_SECRET_KEY
    const options = { expiresIn: '5m' }

    const token = JWT.sign(payload, secretKey, options)

  // 3 - Retornar token
  return { token, user }
  }
}

export { AuthService }
