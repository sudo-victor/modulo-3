import JWT from "jsonwebtoken"

class AuthMiddleware {
  static handler(req, res, halluz) {
    const { headers } = req

    if (!headers.authorization) {
      return res.status(401).json({ error: true, message: "Not authorized" })
    }

    const [, token] = headers.authorization.split(" ")

    try {
      const secretKey = process.env.JWT_SECRET_KEY
      JWT.verify(token, secretKey)
    } catch (err) {
      return res.status(401).json({ error: true, message: "Not authorized" })
    }
    
    halluz()
  }
}

export { AuthMiddleware }
