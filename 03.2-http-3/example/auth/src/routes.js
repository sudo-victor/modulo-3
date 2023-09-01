import { Router } from "express";
import multer from "multer"
import { MakeUser } from "./factories/MakeUser.js"
import { MakeAuth } from "./factories/MakeAuth.js"
import { AuthMiddleware } from "./app/middlewares/AuthMiddleware.js";

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "uploads/")
  },
  filename: (req, file, callback) => {
    const [filename, extension] = file.originalname.split(".")
    const { mimetype } = file

    if (mimetype !== "image/png") {
      callback(new Error("Invalid mimetype"))
    }

    callback(null, `${filename}_${Date.now()}.${extension}`)
  },
})

const upload = multer({ storage })

const router = Router()
const userController = MakeUser.getInstance()
const authController = MakeAuth.getInstance()

router.post("/users", upload.single("file"), userController.create.bind(userController))
router.post("/auth", authController.login.bind(authController))

// Tudo que estiver abaixo do "use"
// está utilizando o middleware "AuthMiddleware.handler"
router.use(AuthMiddleware.handler)
router.get("/users", userController.findAll.bind(userController))

export { router }
