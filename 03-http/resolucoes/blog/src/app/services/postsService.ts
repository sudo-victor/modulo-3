import { database } from "../../database/config";
import { PostsRepository } from "../repositories/postsRepository";

export class PostsService {
  repository: PostsRepository;

  constructor(repository: PostsRepository) {
    this.repository = repository;
  }

  async create(body: any) {
    const post = {
      content: body.content,
      author: body.author,
      createdAt: new Date(),
      likes: 0
    }

    return this.repository.create(post)
  }
}