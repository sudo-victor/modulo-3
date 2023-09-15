import { HotelController } from "./controllers/HotelController";
import { Hotel } from "./entities/Hotel";
import { HotelRepository } from "./repositories/HotelRepository";
import { HotelService } from "./services/HotelService";

class HotelModule {
  static getInstances() {
    const repository = new HotelRepository(Hotel)
    const service = new HotelService(repository)
    const controller = new HotelController(service)

    return { repository, service, controller }
  }
}

export { HotelModule }