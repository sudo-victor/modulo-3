export class RaffleRepository {
  constructor(model) {
    this.model = model;
  }

  async create(raffle) {
    return this.model.create(raffle);
  }

  async findById(id) {
    return this.model.findById(id);
  }

  async update(id, data) {
    return this.model.findByIdAndUpdate(id, data, { new: true });
  }
}
