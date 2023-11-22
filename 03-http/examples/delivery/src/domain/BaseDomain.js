
export class BaseDomain {
  constructor() {
    this.createdAt = new Date()
    this.updatedAt = null
    // soft delete
    this.deletedAt = null
  }

  touch() {
    //asdasdasd
    this.updatedAt = new Date()
  }

  delete() {
    this.deletedAt = new Date()
  }
}
