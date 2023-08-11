import { initializeDatabase } from "./database/databaseConfig.js";
import { MakeCar } from "./factories/MakeCar.js";

const { collection } = initializeDatabase()

const { service } = MakeCar.getInstance(collection)

;(async () => {
  // const result = await service.create({
  //   model: "207",
  //   releasedAt: 2017,
  //   brand: "Pegeut",
  //   price: 250 
  // })

  // const result = await service.findCarsByModel("20")

  const result = await service.findCarsByReleasedAt(2016)
  console.log(result)
})()
