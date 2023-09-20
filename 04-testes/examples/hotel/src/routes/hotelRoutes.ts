import { Router } from "express";
import multer, { diskStorage } from "multer"

import { HotelModule } from "../app/hotels/HotelModule";
import { EnsureAuthenticate } from "src/common/middlewares/EnsureAuthenticate";

const hotelRoutes = Router()
const { controller } = HotelModule.getInstances()

const multerConfig = diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    const [filename, extension] = file.originalname.split(".")
    const formattedFilename = `${filename}-${Date.now()}.${extension}`
    cb(null, formattedFilename)
  },
})

const upload = multer({ storage: multerConfig })

hotelRoutes.post("/", upload.single("file"), EnsureAuthenticate.execute, controller.create.bind(controller))

export { hotelRoutes }