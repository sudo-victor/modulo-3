import { NextFunction, Request, Response } from "express";
import JWT from "jsonwebtoken"
import { makeError } from "../../utils/error-handle";

const ensureAuthenticate = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers
  if (!authorization) {
    return res.status(401).json(makeError('not authenticated', 401));
  }

  const [, token] = authorization.split(" ")

  try {
    JWT.verify(token, process.env.JWT_SECRET_KEY as string)
  } catch (err) {
    return res.status(401).json(makeError('not authenticated', 401));
  }

  next()
}

export { ensureAuthenticate }
