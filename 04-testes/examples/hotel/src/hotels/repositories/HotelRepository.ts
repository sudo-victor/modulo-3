import { CreateHotelDto } from "../dtos/createHotelDto"

class HotelRepository {
  constructor(private model: any) {}

  async findByName(name: string) {
    return this.model.findOne({ name })
  }

  async create(data: CreateHotelDto) {
    return this.model.create(data)
  }
}

export { HotelRepository }