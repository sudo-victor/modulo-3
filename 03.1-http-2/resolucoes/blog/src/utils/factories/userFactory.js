import { UserRepository } from '../../app/repositories/UserRepository.js'
import { UserService } from '../../app/services/UserService.js'
import { UserController } from '../../app/controllers/UserController.js'
import { User } from '../../app/entities/User.js'

export const makeUserModule = () => {
  const repository = new UserRepository(User)
  const service = new UserService(repository)
  const controller = new UserController(service)
  return { controller, repository }
}