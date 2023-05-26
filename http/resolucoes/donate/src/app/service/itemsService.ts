import { makeItem } from "../../factories/itemsFactory";
import { ItemsRepository } from "../repositories/itemsRepository";

export class ItemsService {
  repository: ItemsRepository

  constructor(repository: ItemsRepository) {
    this.repository = repository;
  }

  async create(body: any) {
    const item = makeItem(body)

    return this.repository.create(item)
  }

  async updateDonateStatus(id: string) {
    // verificar se existe o item
    const itemExists = await this.repository.getById(id)
    if (!itemExists) {
      return { error: true, message: 'Item not found' }
    }

    // atualizar
    await this.repository.updateDonateStatus(id)

    return {}
  }

  async getAll(city: string | null) {
    return this.repository.getAll(city)
  }
}