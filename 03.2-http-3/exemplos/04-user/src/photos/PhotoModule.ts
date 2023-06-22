import { PhotoController } from "./controller/PhotoController";
import { Photo } from "./entities/Photo";
import { PhotoRepository } from "./repositories/PhotoRepository";
import { PhotoService } from "./services/PhotoService";

class PhotoModule {
  static build() {
    const repository = new PhotoRepository(Photo)
    const service = new PhotoService(repository)
    const controller = new PhotoController(service)

    return { repository, service, controller }
  }
}

export { PhotoModule }