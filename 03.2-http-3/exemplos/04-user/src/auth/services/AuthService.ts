import JWT from "jsonwebtoken"
import { UserRepository } from "../../users/repositories/UserRepository";
import { Crypt } from "../../utils/crypt";
import { AuthView } from "../views/AuthView";

class AuthService {
  constructor(private userRepository: UserRepository) {}

  async login(user: any) {
    // verifcar existencia do user
    const userExists = await this.userRepository.findByEmail(user.email)
    if(!userExists) {
      return {
        error: true,
        message: 'User not found',
        status: 404
      }
    }

    // validar a senha
    const passwordIsValid = Crypt.compare(user.password, userExists.password)
    if(!passwordIsValid) {
      return {
        error: true,
        message: 'User not found',
        status: 404
      }
    }

    // retornar o token
    const payload = { email: userExists.email, id: userExists.id }
    const secretKey = process.env.JWT_SECRET_KEY as string
    const options = { expiresIn: '30m' }

    const token = JWT.sign(payload, secretKey, options)

    const result = { user: userExists, token }

    return AuthView.toClient(result)
  }
}

export { AuthService }