import { makeError } from "../../../utils/makeError";
import { STATUS_CODE } from "../../../utils/statusCode";
import { HotelRepository } from "../../hotels/repositories/HotelRepository";
import { UserRepository } from "../../users/repositories/UserRepository";
import { CreateBookingDto } from "../dtos/createBookingDto";
import { IBooking } from "../entities/Booking";
import { BookingRepository } from "../repositories/BookingRepository";

class BookingService {
  constructor(
    private bookingRepository: BookingRepository,
    private hotelRepository: HotelRepository,
    private userRepository: UserRepository
  ) {}

  async create(data: CreateBookingDto) {
    const hotel = await this.hotelRepository.findById(data.hotelId)
    if (!hotel) {
      return makeError("Hotel not found", STATUS_CODE.NOT_FOUND)
    }

    const user = await this.userRepository.findById(data.userId)
    if (!user) {
      return makeError("User not found", STATUS_CODE.NOT_FOUND)
    }

    if (hotel.roomsAvailables <= 0) {
      return makeError("Rooms are not available", STATUS_CODE.BAD_REQUEST)
    }

    const payload = {
      checkinAt: new Date(data.checkinAt),
      checkoutAt: new Date(data.checkoutAt),
      user: data.userId,
      hotel: data.hotelId
    }

    const booking = await this.bookingRepository.create(payload)

    const userUpdated = await this.userRepository.pushBooking(data.userId, booking.id)

    const result = {
      ...(booking as any as { _doc: IBooking })._doc,
      user: userUpdated,
      hotel
    }

    return result
  }

}

export { BookingService }