export interface CreateProfileDTO {
  fullname: string
  bio: string
  currentOccupation?: string
  education?: string
  certifications?: string
  status: string
}

export interface PushExperienceDTO {
  company: string
  startedAt: Date,
  endedAt: Date,
  occupation: string
}