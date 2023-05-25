import { PostsController } from "../app/controllers/postsControllers"
import { PostsRepository } from "../app/repositories/postsRepository"
import { PostsService } from "../app/services/postsService"
import { database } from "../database/config"

export const makePostDomain = () => {
  const postsRepository = new PostsRepository(database)
  const postsService = new PostsService(postsRepository)
  const postsController = new PostsController(postsService)
  
  return postsController
}