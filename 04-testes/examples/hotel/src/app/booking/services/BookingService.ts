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

    const decrementedHotel = await this.hotelRepository.decrementRoomsAvailable(data.hotelId)

    console.log(decrementedHotel)

    const result = {
      ...(booking as any as { _doc: IBooking })._doc,
      user: userUpdated,
      hotel: decrementedHotel
    }

    return result
  }

  async cancel(id: string) {
    // buscar reserva
    const booking = await this.bookingRepository.findById(id)
    if (!booking || 'error' in booking) {
      return makeError("Booking not found", STATUS_CODE.NOT_FOUND)
    }

    // validar a data
    const formattedCheckinAt = new Date(booking.checkinAt)
    if (formattedCheckinAt < new Date()) {
      return makeError("It's not possible cancel this booking", STATUS_CODE.BAD_REQUEST)
    }

    // incrementar a quantidade de quarto disponivel
    await this.hotelRepository.incrementRoomsAvailable(
      (booking.hotel as any).toString()
    )

    // adicionar a data de cancelamento no model Booking
    await this.bookingRepository.cancel(id)

    return { message: "success" }
  }

}

export { BookingService }