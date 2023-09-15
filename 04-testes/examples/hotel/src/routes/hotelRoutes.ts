import { Router } from "express";
import { HotelModule } from "../hotels/HotelModule";

const hotelRoutes = Router()
const { controller } = HotelModule.getInstances()

hotelRoutes.post("/", controller.create.bind(controller))

export { hotelRoutes }