import { makeError } from "../../../utils/error-handle";
import { CreatePostDTO } from "../dtos/createPostDto";
import { PostRepository } from "../repositories/PostRepository";

class PostService {
  constructor(private repository: PostRepository) {}

  async create(body: CreatePostDTO) {
    try {
      return this.repository.create(body)
    } catch (err) {
      return makeError('Internal server error', 500)
    }
  }

  async findByUser(userId: string) {
    try {
      return this.repository.findByUser(userId)
    } catch (err) {
      return makeError('Internal server error', 500)
    }
  }

}

export { PostService }