import { Request, Response } from "express";
import { PhotoService } from "../services/PhotoService";
import { makeCreatePhotoSchema } from "../schemas/createPhotoSchema";

class PhotoController { 
  constructor(private service: PhotoService) {}

  async create(req: Request, res: Response) {
    const { body } = req

    try {
      await makeCreatePhotoSchema().validate(body)
    } catch (err: any) {
      return res.status(400).json({ error: err.errors })
    }

    const result = await this.service.create(body) as any
    if ('error' in result) {
      return res.status(result.status).json(result)
    }

    return res.status(201).json(result)
  }
}

export { PhotoController }