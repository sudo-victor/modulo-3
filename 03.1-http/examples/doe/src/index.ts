import express from "express";
import { itemRoutes } from "./routes/itemRoute";

const app = express()

app.use(express.json())
app.use(itemRoutes)

app.listen(3333, () => console.log("Server is running"))