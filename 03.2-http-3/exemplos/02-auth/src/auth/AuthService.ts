import { Request, Response } from "express"
import bcrypt from "bcrypt"
import JWT from "jsonwebtoken"
import { UserRepository } from "../users/UserRepository";

export class AuthService {
  userRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async auth(body: any) {
    // verificar se usuario existe
    const userExists = await this.userRepository.findByEmail(body.email);
    if(!userExists) {
      return { error: true, message: 'User does not exist', status: 404 }
    }

    // validar senha
    const passwordIsValid = bcrypt.compareSync(body.password, userExists.password)
    if (!passwordIsValid) {
      return { error: true, message: 'User does not exist', status: 404 }
    }

    // gerar a token
    const payload = { ...userExists }
    const secretKey =  process.env.SECRET_KEY as string
    const options = {
      expiresIn: "2m"
    }
  
    const token = JWT.sign(payload, secretKey, options)
    return { token }
  }
}