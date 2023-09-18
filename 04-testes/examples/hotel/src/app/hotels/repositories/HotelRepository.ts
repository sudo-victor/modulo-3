import { IUser } from "../../users/entities/User"
import { CreateHotelDto } from "../dtos/createHotelDto"
import { IHotel } from "../entities/Hotel"

class HotelRepository {
  constructor(private model: any) {}

  async findById(id: string): Promise<IHotel | null> {
    return this.model.findOne({ id })
  }

  async findByName(name: string) {
    return this.model.findOne({ name })
  }

  async create(data: CreateHotelDto) {
    return this.model.create(data)
  }
}

export { HotelRepository }