export class PostRepository {
  constructor(model) {
    this.model = model;
  }

  async create(post) {
    return this.model.create(post);
  }
}