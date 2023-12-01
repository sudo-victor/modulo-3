// interface -> 
interface ICreateCarParams {
  color: string;
  plate: string;
  releasedAt: number;
  carModel: string
}

interface IRepository {
  create: (car: ICreateCarParams) => void
}

class MongoDBCarRepository implements IRepository {
  create(car: ICreateCarParams) {
    this.collection.insertOne()
  }
}

class MongooseCarRepository implements IRepository {
  create(car: ICreateCarParams) {
    this.collection.create()
  }
}
// Typeorm -> prisma -> knex -> sequelize
class CarService {
  constructor(private repository: IRepository) {}

  create(car: ICreateCarParams) {
    this.repository.create(car)
  }
}