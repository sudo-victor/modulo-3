class BaseDomain {
  constructor() {
    this.createdAt = new Date()
    this.updatedAt = null
    this.deletedAt = null
  }

  touch() {
    this.updatedAt = new Date()
  }

  remove() {
    this.deletedAt = new Date()
  }
}

module.exports = BaseDomain

// Domain
// Product
// Dados do banco
// Product