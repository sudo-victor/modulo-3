import { ItemsController } from "../app/controllers/itemsController"
import { ItemsRepository } from "../app/repositories/itemsRepository"
import { ItemsService } from "../app/service/itemsService"
import { database } from "../config/database"

export const makeItem = (data: any) => {
  return {
    title: data.title,
    description: data.description,
    location: data.location,
    city: data.city,
    phoneNumber: data.phoneNumber,
    isDonated: false,
    createdAt: new Date()
  }
}

export const makeItemApp = () => {
  const itemsRepository = new ItemsRepository(database)
  const itemsService = new ItemsService(itemsRepository)
  const itemsController = new ItemsController(itemsService)
  return itemsController
}
