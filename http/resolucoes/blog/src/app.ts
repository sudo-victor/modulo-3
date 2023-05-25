import express from "express"
import { config } from "dotenv"
config();

import { carsRouter } from "./routes/carsRoute";

const app = express();

app.use(express.json());
app.use(carsRouter);

app.listen(3334, () => console.log('listening on port 3334'))
