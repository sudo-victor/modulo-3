import { makeError } from "../../utils/makeError";
import { STATUS_CODE } from "../../utils/statusCode";
import { CreateHotelDto } from "../dtos/createHotelDto";

class HotelService {
  constructor(private repository: any) {}

  // throw new Error
  async create(data: CreateHotelDto) {
    try {
      const hotelAlreadyExists = await this.repository.findByName(data.name)
      if (hotelAlreadyExists) {
        return makeError("Hotel already exists", STATUS_CODE.BAD_REQUEST)
      }

      const result = await this.repository.create(data)
      return result 
    } catch(e: any) {
      return makeError(e.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
    }
  }

}

export { HotelService }