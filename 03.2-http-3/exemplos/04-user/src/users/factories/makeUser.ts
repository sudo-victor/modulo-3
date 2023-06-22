import { Crypt } from "../../utils/crypt";

interface MakeUserProps {
  name: string;
  email: string;
  password: string;
  photo: any;
}

const makeUser = (user: MakeUserProps) => {
  return {
    ...user,
    password: Crypt.encrypt(user.password)
  }
}

export { makeUser }