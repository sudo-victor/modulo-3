import * as yup from "yup"

class UserSchemaValidation {
  static async isValid(data) {
    const userSchema = yup.object().shape({
      fullname: yup.string().required(),
      nickname: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required(),
    })

    try {
      await userSchema.validate(data)
      return { error: false }
    } catch (err) {
      return  { error: true, messages: err.errors }
    }
  }
}

export { UserSchemaValidation }