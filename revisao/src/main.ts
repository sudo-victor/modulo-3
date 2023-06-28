import express from "express";
import dotenv from "dotenv";
import path from "path";
dotenv.config()
import { initializeClient } from "./database/config";
import { router } from "./routes";

initializeClient()

const app = express();

app.use(express.static(path.resolve(__dirname, "..", "uploads")))
app.use(express.json())
app.use(router)

app.listen(3333, () => console.log('Server listening on port 3333'))
