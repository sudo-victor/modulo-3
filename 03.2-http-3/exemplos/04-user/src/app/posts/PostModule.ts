import { PostController } from "./controllers/PostController";
import { Post } from "./entities/Post";
import { PostRepository } from "./repositories/PostRepository";
import { PostService } from "./services/PostService";

class PostModule {
  static build() {
    const repository = new PostRepository(Post)
    const service = new PostService(repository)
    const controller = new PostController(service)
    return { repository, service, controller }
  }
}

export { PostModule }
