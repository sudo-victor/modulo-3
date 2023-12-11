
// export function log(req: Request) {
//   console.log("Method: ", req.method)
//   console.log("Url: ", req.url)
//   console.log("Body: ", req.body)
//   console.log("Params: ", req.params)
//   console.log("Query: ", req.query)
//   console.log("Headers: ", req.headers)
// }

import { NextFunction, Request, Response } from "express";

export function logMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log("Method: ", req.method)
  console.log("Url: ", req.url)
  console.log("Body: ", req.body)
  console.log("Params: ", req.params)
  console.log("Query: ", req.query)
  console.log("Headers: ", req.headers)
  
  next()
}