import JWT from "jsonwebtoken"
import { CommonError } from "../../utils/CommonError.js"

class AuthMiddleware {
  static async handler(req, res, next) {
    // pegar o token no headers
    const { headers } = req 
    // verificar se existe um token no headers
    if(!headers.authorization) {
      return res.status(401).json(CommonError.build("Unauthorized", 401))
    }

    // validar o token
    const [, token] = headers.authorization.split(" ")

    try {
      JWT.verify(token, process.env.JWT_SECRET_KEY)
    } catch (err) {
      return res.status(401).json(CommonError.build("Unauthorized", 401))
    }

    // passar pro proximo mid
    next()
  }
}

export { AuthMiddleware }
