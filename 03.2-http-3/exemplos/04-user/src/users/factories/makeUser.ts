import { Crypt } from "../../utils/crypt";
import { CreateUserDTO } from "../dtos/createUserDto";

const makeUser = (user: CreateUserDTO) => {
  return {
    ...user,
    password: Crypt.encrypt(user.password)
  }
}

export { makeUser }