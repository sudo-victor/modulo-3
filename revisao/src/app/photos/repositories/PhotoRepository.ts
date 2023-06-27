import { CreatePhotoDTO } from "../dtos/createPhotoDto";
import { Photo } from "../entities/Photo";

class PhotoRepository {
  constructor(private model: typeof Photo) {}

  async create(photo: CreatePhotoDTO) {
    return this.model.create(photo);
  }
}

export { PhotoRepository }