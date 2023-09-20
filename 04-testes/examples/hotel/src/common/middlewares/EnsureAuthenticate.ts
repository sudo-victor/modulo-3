import { NextFunction, Request, Response } from "express";
import JWT from "jsonwebtoken"

import { makeError } from "@utils/makeError";
import { STATUS_CODE } from "@utils/statusCode";

class EnsureAuthenticate {
  static execute(req: Request, res: Response, next: NextFunction) {
    // Pegar o token req.headers
    const { authorization } = req.headers

    // Validar se existe o token no header
    if (!authorization) {
      return res.status(STATUS_CODE.NON_AUTHORIZED).json(
        makeError("Non-Authorized", STATUS_CODE.NON_AUTHORIZED)
      )
    }
    
    // Validar o token
    const [, token] = authorization.split(" ")

    try { 
      JWT.verify(token, process.env.JWT_SECRET_KEY as string)
    } catch (err) {
      return res.status(STATUS_CODE.NON_AUTHORIZED).json(
        makeError("Non-Authorized", STATUS_CODE.NON_AUTHORIZED)
      )
    }

    next()
  }
}

export { EnsureAuthenticate }
