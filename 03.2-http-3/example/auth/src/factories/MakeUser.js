import { UserRepository } from "../app/repositories/UserRepository.js"
import { PhotoRepository } from "../app/repositories/PhotoRepository.js"
import { UserService } from "../app/services/UserService.js"
import { UserController } from "../app/controllers/UserController.js"
import { User } from "../domain/User.js"
import { Photo } from "../domain/Photo.js"

class MakeUser {
  static getInstance() {
    const repository = new UserRepository(User)
    const photoRepository = new PhotoRepository(Photo)
    const service = new UserService(repository, photoRepository)
    const controller = new UserController(service)
    return controller
  }
}

export { MakeUser }