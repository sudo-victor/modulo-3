import bcrypt from "bcrypt"

class Crypt {
  static encrypt(text) {
    return bcrypt.hashSync(text, 8)
  }

  static compare(text, hash) {
    return bcrypt.compareSync(text, hash)
  }
}

export { Crypt }
