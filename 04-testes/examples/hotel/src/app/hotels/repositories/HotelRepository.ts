import { IUser } from "../../users/entities/User"
import { CreateHotelDto } from "../dtos/createHotelDto"
import { IHotel } from "../entities/Hotel"

class HotelRepository {
  constructor(private model: any) {}

  async findById(id: string): Promise<IHotel | null> {
    return this.model.findOne({ _id: id })
  }

  async findByName(name: string) {
    return this.model.findOne({ name })
  }

  async create(data: CreateHotelDto) {
    const user = await this.model.create(data)
    return user
  }
}

export { HotelRepository }