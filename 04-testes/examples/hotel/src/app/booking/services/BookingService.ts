import { makeError } from "../../../utils/makeError";
import { STATUS_CODE } from "../../../utils/statusCode";
import { HotelRepository } from "../../hotels/repositories/HotelRepository";
import { CreateBookingDto } from "../dtos/createBookingDto";
import { BookingRepository } from "../repositories/BookingRepository";

class BookingService {
  constructor(
    private bookingRepository: BookingRepository,
    private hotelRepository: HotelRepository
  ) {}

  async create(data: CreateBookingDto) {
    // Buscar o hotel
    const hotel = await this.hotelRepository.findById(data.hotelId)
    if (!hotel) {
      return makeError("Hotel not found", STATUS_CODE.NOT_FOUND)
    }

    // Validar quartos disponiveis
    if (hotel.roomsAvailables <= 0) {
      return makeError("Rooms are not available", STATUS_CODE.BAD_REQUEST)
    }

    const payload = {
      checkinAt: new Date(data.checkinAt),
      checkoutAt: new Date(data.checkoutAt),
      user: data.userId,
      hotel: data.hotelId
    }

    // Criar a reserva
    const booking = await this.bookingRepository.create(payload)

    return booking

  }

}

export { BookingService }