import { NextFunction, Request, Response } from "express";

export function validateCreateTaskMiddleware(req: Request, res: Response, next: NextFunction) {
  const { body } = req

  if (body.title === undefined) {
    return res.status(400).json({
      error: true,
      message: "Title is missing"
    })
  }
  if (body.content === undefined) {
    return res.status(400).json({
      error: true,
      message: "Content is missing"
    })
  }

  next()
}