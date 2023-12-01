import 'dotenv/config'
import express from "express"
import { env } from './env'
import { DBConnection } from './database/connection'

DBConnection.connect()
const app = express()

app.listen(env.PORT, () => console.log("🛼 Server is running"))