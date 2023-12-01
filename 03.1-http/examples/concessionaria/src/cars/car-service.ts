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

class CarRepository implements IRepository {
  create(car: ICreateCarParams) {
  }
}

class CarService {
  constructor(private repository: IRepository) {}

  create(car: ICreateCarParams) {
    this.repository.create(car)
  }
}