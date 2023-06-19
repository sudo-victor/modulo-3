const express = require('express');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const extension = path.extname(file.originalname)
    const extensionsAvailable = [".png", ".jpg", ".jpeg"]

    let error = null

    if(!extensionsAvailable.includes(extension)) {
      error = `${extension} is not available`
    }

    cb(error, file.originalname + '-' + Date.now() + extension);
  }
});

const upload = multer({ storage });

const app = express();

app.use(express.json())

app.use(express.static(path.join(__dirname, "..", "uploads")))

const users = []

app.post('/uploads', upload.single('file'), (req, res) => {
  const { body } = req

  const user = {
    ...body,
    filename: req.file.filename
  }

  users.push(users)

  res.json({ user })
})

app.listen(3333, () => console.log("listening on port 3333"))
