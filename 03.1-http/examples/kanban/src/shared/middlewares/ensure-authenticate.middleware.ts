import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"
import { env } from "../../configs/env";

export function ensureAuthenticateMiddleware(req: Request, res: Response, next: NextFunction) {
  // Pegar o token da requisicao
  const autorization = req.headers["authorization"]
  if (!autorization) {
    return res.status(401).json({
      error: true,
      message: "Unauthorized",
      status: 401
    })
  }

  // Separar o token
  const token = autorization.replace("Bearer ", "")

  // Validar
  try {
    verify(token, env.JWT_SECRET_KEY)
  } catch(err) {
    return res.status(401).json({
      error: true,
      message: "Unauthorized",
      status: 401
    })
  }

  next()
}