import { IUser } from "../../app/users/entities/User"

type IToApi =  IUser & { _id: string }

class AuthMapper {
  static toApi(user: IToApi) {
    return {
      id: user._id,
      email: user.email,
      name: user.name,
    }
  }
}

export { AuthMapper, IToApi }