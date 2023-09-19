import { Model, MongooseError } from "mongoose";
import { IUser } from "../entities/User";
import { makeError } from "../../../utils/makeError";

class UserRepository {
  constructor(private model: Model<IUser>) {}

  async findByEmail(email: string) {
    try {
      return this.model.findOne({ email }).select("+password")
    } catch(e: any) {
      return makeError(e.message, 500)
    }
  }
 
  async findAll() {
    try {
      return this.model.find()
        .populate("bookings")
        .populate({
          path: 'bookings', 
          model: 'Booking',
          populate: {
            path: 'hotel',
            model: 'Hotel',
          }
        })
    } catch(e: any) {
      return makeError(e.message, 500)
    }
  }

  async findById(id: string) {
    try {
      return this.model.findOne({ _id: id })
    } catch(e: any) {
      return makeError(e.message, 500)
    }
  }

  async create(data: IUser) {
    try {
      return this.model.create(data)
    } catch(e: any) {
      return makeError(e.message, 500)
    }
  }

  async pushBooking(userId: string, bookingId: string) {
    try {
      return this.model.findByIdAndUpdate(userId, {
        $push: {
          bookings: [bookingId]
        }
      }, { new: true })
    } catch(e: any) {
      return makeError(e.message, 500)
    }
  }
}

export { UserRepository }