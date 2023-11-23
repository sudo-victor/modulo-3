
export class BaseDomain {
  constructor() {
    this.createdAt = new Date()
    this.updatedAt = null
    this.deletedAt = null
  }

  touch() {
    this.updatedAt = new Date()
  }

  delete() {
    this.deletedAt = new Date()
  }
}
