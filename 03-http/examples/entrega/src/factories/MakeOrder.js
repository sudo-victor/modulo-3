import { OrderService } from "../services/OrderService.js"
import { OrderRepository } from "../repositories/OrderRepository.js"
import { OrderController } from "../controllers/OrderController.js"

class MakeOrder {
  static getInstance(collection) {
    const repository = new OrderRepository(collection)
    const service = new OrderService(repository)
    const controller = new OrderController(service)
    return controller
  }
}

export { MakeOrder }
