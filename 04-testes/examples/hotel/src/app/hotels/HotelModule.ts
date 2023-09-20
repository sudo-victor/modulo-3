import { PhotoModule } from "@app/photos/PhotoModule";
import { HotelController } from "./controllers/HotelController";
import { Hotel } from "./entities/Hotel";
import { HotelRepository } from "./repositories/HotelRepository";
import { HotelService } from "./services/HotelService";

class HotelModule {
  static getInstances() {
    const repository = new HotelRepository(Hotel)
    const photoRepository = PhotoModule.getInstances().repository
    const service = new HotelService(repository, photoRepository)
    const controller = new HotelController(service)

    return { repository, service, controller }
  }
}

export { HotelModule }