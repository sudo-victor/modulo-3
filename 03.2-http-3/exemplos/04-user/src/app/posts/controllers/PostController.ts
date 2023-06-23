import { Request, Response } from "express";
import { makeCreatePostSchema } from "../schemas/createPostSchema";
import { PostService } from "../services/PostService";

class PostController {

  constructor(private service: PostService) {}

  async create(req: Request, res: Response) {
    const { body, params: { user_id } } = req
    const postToPersist = {
      content: body.content,
      user: user_id
    }

    try {
      await makeCreatePostSchema().validate(postToPersist)
    } catch (err:  any) {
      return res.status(400).json({ errors: err.errors})
    }
    

    const result = await this.service.create(postToPersist) as any
    if ('error' in result) {
      return res.status(result.status).json(result)
    }

    return res.status(201).json(result)
  }

  async findByUser(req: Request, res: Response) {
    const { user_id } = req.params

    const result = await this.service.findByUser(user_id) as any
    if ('error' in result) {
      return res.status(result.status).json(result)
    }

    return res.status(201).json(result)
  }

}

export { PostController }