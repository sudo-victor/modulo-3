import { Model } from "mongoose";
import { IBooking } from "../entities/Booking";
import { CreateBookingRepoDto } from "../dtos/createBookingDto";

class BookingRepository {

  constructor(private model: Model<IBooking>) {}

  async create(data: CreateBookingRepoDto) {
    return this.model.create(data)
  }

}

export { BookingRepository }