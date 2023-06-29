import { Request, Response } from "express";
import { BoardService } from "../services/BoardService";
import { makeCreateBoardSchema } from "../schemas/createBoardSchema";
import { makeGetBoardByIdSchema } from "../schemas/getBoardByIdSchema";

class BoardController {
  constructor(private service: BoardService) {}

  async create(req: Request, res: Response) {
    const { body } = req
    
    try {
      await makeCreateBoardSchema().validate(body)
    } catch(err: any) {
      return res.status(400).json({ errors: err.errors})
    }
    const result = await this.service.create(body)
    if('error' in result) {
      return res.status(result.status).json(result)
    }

    return res.status(201).json(result)
  }

  async getById(req: Request, res: Response) {
    const { params } = req

    try {
      await makeGetBoardByIdSchema().validate(params)
    } catch(err: any) {
      return res.status(400).json({ errors: err.errors})
    }
    const result = await this.service.getById(params.id) as any
    if('error' in result) {
      return res.status(result.status).json(result)
    }

    return res.status(201).json(result)
  }
}

export { BoardController }