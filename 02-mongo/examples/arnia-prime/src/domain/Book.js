const BaseDomain = require("./Base");

class Book extends BaseDomain {
  constructor(title, description, releasedAt, author, category) {
    super()
    this.title = title
    this.description = description
    this.releasedAt = releasedAt
    this.author = author
    this.category = category
  }
}

module.exports = Book