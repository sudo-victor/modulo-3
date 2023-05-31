export class PostsRepository {
  database: any;

  constructor(database: any) {
    this.database = database.collection('posts')
  }

  async create(post: any) {
    await this.database.insertOne(post);

    return post
  }
}