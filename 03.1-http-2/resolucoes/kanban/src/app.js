import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { initializeConnection } from "./database/config.js"
import { userRouter } from "./routes/userRouter.js";

initializeConnection()

const app = express()

app.use(express.json())
app.use(userRouter)

app.listen(3333, () => console.log('Server running at http://localhost:3333'))
