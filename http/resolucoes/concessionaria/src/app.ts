import express from "express";
import { carsRouter } from "./routes/carsRoute";

const app = express();
const port = 3333

app.use(express.json())

app.use(carsRouter)

app.listen(port, () => {
  console.log("listening on port " + port)
})