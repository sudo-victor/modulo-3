import { Photo } from "./entities/Photo";
import { PhotoRepository } from "./repositories/PhotoRepository";

class PhotoModule {
  static build() {
    const repository = new PhotoRepository(Photo)
    return { repository }
  }
}

export { PhotoModule }