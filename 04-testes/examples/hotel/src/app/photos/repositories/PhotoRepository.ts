import { Model } from "mongoose";
import { IPhoto,  } from "../entities/Photo"

class PhotoRepository {
  constructor(private model: Model<IPhoto>) {}

  async create(data: { filename: string; mimetype: string }) {
    return this.model.create(data)
  }
}

export { PhotoRepository }