import { NextFunction, Request, Response } from "express";

export function createProductValidateMiddleware(req: Request, res: Response, next: NextFunction) {
  const { body } = req

  if (body.name === undefined) {
    return res.status(400).json({ message: "Name is missing" })
  }
  if (body.amount === undefined) {
    return res.status(400).json({ message: "Amount is missing" })
  }

  next()
}