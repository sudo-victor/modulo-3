import { CreatePhotoDTO } from "../dtos/createPhotoDto";
import { PhotoRepository } from "../repositories/PhotoRepository";

class PhotoService {
  constructor(private repository: PhotoRepository) {}

  async create(body: CreatePhotoDTO) {
    return this.repository.create(body);
  }

}

export { PhotoService }