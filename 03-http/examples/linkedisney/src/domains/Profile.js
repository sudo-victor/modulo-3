
class Profile {
  constructor(data) {
    this.fullname = data.fullname
    this.title = data.title
    this.bio = data.bio
    this.currentOccupation = data.currentOccupation
    this.education = data.education
    this.certifications = data.certifications
    this.status = data.status
    this.createdAt = new Date()
    this.deletedAt = null
  }
}

export { Profile }
