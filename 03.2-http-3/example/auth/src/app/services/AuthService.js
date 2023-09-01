import JWT from "jsonwebtoken"
import { Crypt } from "../../utils/Crypt.js"
import { CommonError } from "../../utils/CommonError.js"

class AuthService {
  constructor(userRepository) {
    this.userRepository = userRepository
  }

  async login(data) {
    // Verificar se existe user
    const userAlreadyExists = await this.userRepository.findByEmail(data.email)
    if (!userAlreadyExists) {
      return CommonError.build("E-mail/password invalid", 404)
    }

    // Validar se a senha está correto
    const passwordIsValid = Crypt.compare(data.password, userAlreadyExists.password)
    if (!passwordIsValid) {
      return CommonError.build("E-mail/password invalid", 404)
    }

    // Gerar token
    const payload = { ...userAlreadyExists }
    const secretKey = process.env.JWT_SECRET_KEY
    const options = { expiresIn: '15m' }

    const token = JWT.sign(payload, secretKey, options)

    return  { token, user: userAlreadyExists }
  }

}

export { AuthService }