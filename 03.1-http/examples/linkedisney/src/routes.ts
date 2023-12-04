import { Router } from "express"
import { ProfileModule } from "./profiles"

const profileRoutes = Router()
const { controller } = ProfileModule.make()

profileRoutes.post("/profiles", controller.create.bind(controller))


export { profileRoutes }