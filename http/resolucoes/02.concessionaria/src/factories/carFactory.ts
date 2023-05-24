import { CarsController } from "../app/controllers/carsController";
import { CarsRepository } from "../app/repositories/carsRepository";
import { CarsService } from "../app/services/carsService";

interface MakeCarProps {
  model: string;
  color: string;
  year: number;
  plate: string;
  brand: string;
  isUsed: boolean;
}

export const makeCar = (data: MakeCarProps) => {
  return {
    model: data.model,
    color: data.color,
    year: data.year,
    plate: data.plate,
    brand: data.brand,
    isUsed: data.isUsed,
    isSold: false,
    createAt: new Date()
  }
}

export const makeCarRoute = () => {
  const repository = new CarsRepository()
  const service = new CarsService(repository)
  const controller = new CarsController(service)

  return controller
}
