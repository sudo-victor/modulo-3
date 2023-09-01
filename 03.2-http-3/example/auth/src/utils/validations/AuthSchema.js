import * as yup from "yup"

class AuthSchemaValidation {
  static async isValid(data) {
    const authSchema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    })

    try {
      await authSchema.validate(data)
      return { error: false }
    } catch (err) {
      return  { error: true, messages: err.errors }
    }
  }
}

export { AuthSchemaValidation }