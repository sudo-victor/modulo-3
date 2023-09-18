import { Router } from "express";
import { HotelModule } from "../app/hotels/HotelModule";

const hotelRoutes = Router()
const { controller } = HotelModule.getInstances()

hotelRoutes.post("/", controller.create.bind(controller))

export { hotelRoutes }