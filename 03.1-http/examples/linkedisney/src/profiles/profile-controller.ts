import { Request, Response } from "express";
import z from "zod"
import { ProfileService } from "./profile-service";

const createBodySchema = z.object({
	fullname: z.string(),
	bio: z.string(),
	education: z.string().optional(),
	certifications: z.string().optional(),
	currentOccupation: z.string().optional(),
	status: z.string().optional(),
})

export class ProfileController {
  constructor (private service: ProfileService) {}

  async create(req: Request, res: Response) {
    const { body } = req

    try {
      const bodyParsed  = createBodySchema.parse(body)

      const result = await this.service.create(body)
      if ("error" in result) {
        return res.status(result.status).json(result)
      }
  
      return res.status(201).json(result)
    } catch (error) {
      return res.status(400).json(error)
    }
  }

  async pushNewJobExperience(req: Request, res: Response) {
    const { body, params } = req

    const result = await this.service.pushExperience(params.profileId, body)

    res.status(200).json(result)
  }

  async list(req: Request, res: Response) {
    const result = await this.service.list()
    res.status(200).json(result)
  }
}