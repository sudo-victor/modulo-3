import { Router } from "express";
import { MakeRaffle } from "./factories/MakeRaffle.js";

const routes = Router()
const controller = MakeRaffle.getInstace()

routes.post("/raffles", controller.create.bind(controller))
routes.get("/raffles/:id/result", controller.generateResult.bind(controller))

export { routes }
