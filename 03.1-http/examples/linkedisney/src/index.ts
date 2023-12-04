import 'dotenv/config'
import { app } from "./server"
import { env } from './configs/env'
import { MongooseConfig } from './configs/database'

MongooseConfig.initialize()

app.listen(env.PORT, () => console.log("🐭 Server is running"))
