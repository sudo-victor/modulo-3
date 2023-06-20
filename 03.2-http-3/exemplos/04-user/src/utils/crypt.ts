import bcrypt from "bcrypt";

class Crypt {
  static encrypt(data: string) {
    return bcrypt.hashSync(data, 8)
  }

  static compare(data: string, hash: string) {
    return bcrypt.compareSync(data, hash)
  }
}

export { Crypt }