import { config } from "dotenv";
import { initializeDatabase } from "./database/config.js";
config();
await initializeDatabase()

const repository = makeProduct()

;(async () => {
  await repository.create({ name: 'Biscoito', description: 'lorem ipsum',  price: 10, amount: 10})
})()
