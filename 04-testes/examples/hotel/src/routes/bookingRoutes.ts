import { Router } from "express";
import { BookingModule } from "../app/booking/BookingModule";
import { EnsureAuthenticate } from "src/common/middlewares/EnsureAuthenticate";

const bookingRoutes = Router()
const { controller } = BookingModule.getInstances()

bookingRoutes.post("/hotels/:hotelId/users/:userId", EnsureAuthenticate.execute, controller.create.bind(controller))
bookingRoutes.delete("/:id", EnsureAuthenticate.execute, controller.cancel.bind(controller))

export { bookingRoutes }