import { Model } from "mongoose";
import { IBooking } from "../entities/Booking";
import { CreateBookingRepoDto } from "../dtos/createBookingDto";
import { makeError } from "@utils/makeError";
import { STATUS_CODE } from "@utils/statusCode";

class BookingRepository {

  constructor(private model: Model<IBooking>) {}

  async create(data: CreateBookingRepoDto) {
    return this.model.create(data)
  }

  async findById(id: string) {
    try {
      return await this.model.findOne({ _id: id })
    } catch (e: any) {
      console.log(e)
      return makeError(e.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
    }
  }

  async cancel(id: string) {
    return this.model.findByIdAndUpdate(id, {
      $set: { canceledAt: new Date() }
    })
  }

}

export { BookingRepository }