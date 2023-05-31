import dotenv from 'dotenv';
dotenv.config()
import { database } from "./database/config";
import { carRouter } from './routes/carsRoute';

import express from "express";

const app = express();
const port = process.env.PORT;

app.use(express.json())
app.use(carRouter)

app.listen(port, () => console.log('listening on port ' + port))
