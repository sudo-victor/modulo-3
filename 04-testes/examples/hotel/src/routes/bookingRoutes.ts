import { Router } from "express";
import { BookingModule } from "../app/booking/BookingModule";

const bookingRoutes = Router()
const { controller } = BookingModule.getInstances()

bookingRoutes.post("/hotels/:hotelId/users/:userId", controller.create.bind(controller))

export { bookingRoutes }