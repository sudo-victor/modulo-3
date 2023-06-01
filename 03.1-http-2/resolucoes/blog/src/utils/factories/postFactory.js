import { PostRepository } from '../../app/repositories/PostRepository.js'
import { PostService } from '../../app/services/PostService.js'
import { PostController } from '../../app/controllers/PostController.js'
import { Post } from '../../app/entities/Post.js'
import { makeUserModule } from "./userFactory.js"

export const makePostModule = () => {
  const repository = new PostRepository(Post)
  const service = new PostService(repository, makeUserModule().repository)
  const controller = new PostController(service)
  return { controller }
}
