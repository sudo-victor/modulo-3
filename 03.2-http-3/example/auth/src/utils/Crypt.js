import bcrypt from "bcrypt"

class Crypt {
  static encrypt(text) {
    return bcrypt.hashSync(text, 8)
  }
}

export { Crypt }
