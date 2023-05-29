import { config } from "dotenv";
config();
import { initializeDatabase } from "./database/config.js";

initializeDatabase()
