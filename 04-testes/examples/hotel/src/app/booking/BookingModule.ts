import { HotelModule } from "../hotels/HotelModule";
import { UserModule } from "../users/UserModule";
import { BookingController } from "./controllers/BookingController";
import { Booking } from "./entities/Booking";
import { BookingRepository } from "./repositories/BookingRepository";
import { BookingService } from "./services/BookingService";

class BookingModule {
  static getInstances() {
    const bookingRepository = new BookingRepository(Booking)
    const hotelModule = HotelModule.getInstances()
    const userModule = UserModule.getInstances()
    const service = new BookingService(
      bookingRepository,
      hotelModule.repository,
      userModule.repository
    )
    const controller = new BookingController(service)

    return { repository: bookingRepository, service, controller }
  }
}

export { BookingModule }