import { Photo } from "./entities/Photo";
import { PhotoRepository } from "./repositories/PhotoRepository";

class PhotoModule {
  static getInstances() { 
    const repository = new PhotoRepository(Photo)
    return { repository }
  }
}

export { PhotoModule }