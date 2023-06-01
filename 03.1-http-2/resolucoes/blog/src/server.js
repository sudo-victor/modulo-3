import dotenv from "dotenv"
dotenv.config()
import express from "express"

import { connectionDatabase } from "./database/config.js"
import { userRouter } from "./routes/userRoute.js"
import { postRouter } from "./routes/postRoute.js"
connectionDatabase()

const app = express()

app.use(express.json())
app.use(postRouter)
app.use(userRouter)

app.listen(3333, () => console.log('listening on port 3333'))
