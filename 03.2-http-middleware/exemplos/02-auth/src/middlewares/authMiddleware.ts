import { NextFunction, Request, Response } from "express"
import JWT from "jsonwebtoken"

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { headers } = req

  if(!headers?.authorization) {
    return res.status(401).send('Not authorized')
  }

  const [, token] = headers.authorization.split(' ')

  try {
    JWT.verify(token, process.env.SECRET_KEY as string)

    next()
  } catch (err) {
    return res.status(401).send('Not authorized')
  }
}