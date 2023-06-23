import { CreatePostDTO } from "../dtos/createPostDto";
import { Post } from "../entities/Post";

class PostRepository {

  constructor(private model: typeof Post) {}

  async create(post: CreatePostDTO) {
    return this.model.create(post)
  }

  async findByUser(userId: string) {
    return this.model.find({ user: userId }).populate("user")
  }
}

export { PostRepository } 