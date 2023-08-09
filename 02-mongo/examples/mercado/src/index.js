import { initializeDatabase } from "./database/databaseConfig.js";
import { MakeProduct } from "./factories/MakeProduct.js"

const { collection, client } = initializeDatabase()

const service = MakeProduct.getInstance(collection)

// IIFE (Immediately Invoked Function Expression)
;(async () => {
  // const result = await service.create({
  //   name: "Camisate do Iphone (Com detergente)",
  //   description: "baalbasdkhaldjkhasd",
  //   price: 100,
  //   amount: 1,
  //   category: "roupa-limpa",
  // })
  // console.log(result)

  // const result = await service.findByName("Camisate do Iphone (Com detergente)")
  // console.log(result)

  // const result = await service.findByCategory("roupa-limpa")
  // console.log(result)

  // const result = await service.delete("64d4086869727442cbac9cf6")
  // console.log(result)

  // const result = await service.update("64d40fbee2c5d2d6124b034b", {
  //   name: "TESTE"
  // })
  // console.log(result)
})()

Index > Service > Repository > Database
