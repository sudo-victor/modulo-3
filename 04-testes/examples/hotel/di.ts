interface Repository {
  create(data: any): Promise<{ _id: string }>
  findAll(): Promise<{ _id: string }[]>
}

class MongooseRepository implements Repository {
  constructor(private model: any) {}

  create(data: any): Promise<{ _id: string }> {
    return this.model.create(data)
  }

  findAll(): Promise<{ _id: string }[]> {
    throw new Error("Method not implemented.")
  }
}

class MongoDBRepository implements Repository {
  constructor(private model: any) {}

  create(data: any): Promise<{ _id: string }> {
    return this.model.insertOne(data)
  }
  findAll(): Promise<{ _id: string }[]> {
    throw new Error("Method not implemented.")
  }
  
}

class UserService {
  constructor(private repository: Repository) {}

  create(data: any) {
    this.repository.create(data)
  }
}

const mongooseRepository = new MongooseRepository({})
const mongoDBRepository = new MongoDBRepository({})
const service = new UserService(mongoDBRepository)
