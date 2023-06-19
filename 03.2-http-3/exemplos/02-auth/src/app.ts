import express from "express"
import { config } from "dotenv";
config()
import { initializeConnection } from "./database/connection";
import { router } from "./routes";

initializeConnection()

const app = express();

app.use(express.json())

app.use(router)


app.listen(3333, () => {
  console.log("Server is running on port 3333");
})
