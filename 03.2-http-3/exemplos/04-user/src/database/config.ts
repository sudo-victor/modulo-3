import mongoose from "mongoose";

const env = process.env as {
  DATABASE_URL: string
}

function initializeMongoose() {
  mongoose.connect(env.DATABASE_URL)
}

export { initializeMongoose }
