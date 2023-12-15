import multer from "multer"

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "uploads/")
  },
  filename(req, file, callback) {
    const filenameSplited = file.originalname.split(".")
    const extension = filenameSplited.pop()
    const filename = filenameSplited.join("") + "_" + Date.now() + "." + extension
    callback(null, filename)
  },
})

export const uploadMiddleware = multer({ storage })
