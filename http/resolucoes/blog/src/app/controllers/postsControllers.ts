import { Request, Response } from "express";
import { database } from "../../database/config";
import { PostsService } from "../services/postsService";

export class PostsController {
  service: PostsService;

  constructor(service: PostsService) {
    this.service = service
  }

  async create(req: Request, res: Response) {
    const { body } = req;

    if(!(body.author && body.content)) {
      return res.status(400).json({
        error: true,
        message: "Invalid body"
      })
    }

    const result = await this.service.create(body)

    return res.status(201).json({
      error: false,
      data: result
    })
  }

}