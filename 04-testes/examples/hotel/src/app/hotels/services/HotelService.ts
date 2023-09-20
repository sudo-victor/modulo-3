import { PhotoRepository } from "@app/photos/repositories/PhotoRepository";
import { makeError } from "../../../utils/makeError";
import { STATUS_CODE } from "../../../utils/statusCode";
import { CreateHotelDto } from "../dtos/createHotelDto";
import { HotelRepository } from "../repositories/HotelRepository";

class HotelService {
  constructor(
    private repository: HotelRepository,
    private photoRepository: PhotoRepository,
  ) {}

  async create(data: CreateHotelDto) {
    try {
      const hotelAlreadyExists = await this.repository.findByName(data.name)
      if (hotelAlreadyExists) {
        return makeError("Hotel already exists", STATUS_CODE.BAD_REQUEST)
      }

      // Criar a photo
      const photo = await this.photoRepository.create(data.file)
      console.log("PHOTO 1: ", photo)


      const hotelPayload = {
        ...data,
        photo: photo.id
      }

      const result = await this.repository.create(hotelPayload)
      console.log("RESULT 1: ", result)
      result.photo = photo

      return result
    } catch(e: any) {
      return makeError(e.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
    }
  }
}

export { HotelService }

