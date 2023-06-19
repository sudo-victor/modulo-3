import { Request, Response } from "express";
import { UserService } from "./UserService"
import bcrypt from "bcrypt"

export class UserController{
  service: UserService;

  constructor(service: UserService) {
    this.service = service;
  }

  async create(req: Request, res: Response) {
    const { body } = req;

    const result = await this.service.create(body) as any;
    if (result?.error) {
      return res.status(result.status).json({ result});
    }

    return res.status(201).json({ result });
  }

  async findAll(req: Request, res: Response) {
    const result = await this.service.findAll()
    res.status(200).json({ result })
  }
}