import { Router } from "express"
import { ProfileModule } from "./profiles"

const profileRoutes = Router()
const { controller } = ProfileModule.make()

profileRoutes.post("/profiles", controller.create.bind(controller))
profileRoutes.post("/profiles/:profileId/jobs", controller.pushNewJobExperience.bind(controller))
profileRoutes.get("/profiles", controller.list.bind(controller))


export { profileRoutes }