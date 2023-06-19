import { connect, connection } from "mongoose";

function initializeConnection() {
  connection
    .on("error", (err) => {
      console.log(err);
    })
    .once("open", () => {
      console.log("Connected to MongoDB");
    })

  connect(process.env.DATABASE_URL as string)
}

export { initializeConnection }
