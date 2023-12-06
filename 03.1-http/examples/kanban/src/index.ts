import "dotenv/config";
import { connectionDatabase } from "./configs/connection";
import { app } from "./server";
import { env } from "./configs/env";

connectionDatabase()

app.listen(env.PORT, () => console.log("🌝 Server is running"))