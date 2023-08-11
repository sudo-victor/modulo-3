class Team {
  constructor(data) {
    this.name = data.name
    this.point = data.point
    this.category = data.category
    this.playersAmount = data.playersAmount
    this.createdAt = new Date()
    this.updatedAt = new Date()
  }
}

export { Team }
