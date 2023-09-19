import { Router } from "express";
import { userRoutes } from "./userRoutes";
import { authRoutes } from "./authRoutes";
import { hotelRoutes } from "./hotelRoutes";
import { bookingRoutes } from "./bookingRoutes";

const routes = Router()

routes.use("/users", userRoutes)
routes.use("/auth", authRoutes)
routes.use("/hotels", hotelRoutes)
routes.use("/bookings", bookingRoutes)

export { routes }