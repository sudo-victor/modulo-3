import * as yup from "yup"

const makeCreateUserSchema = () => {
  return yup.object().shape({
    name: yup.string().required(),
    nickname: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
}

export { makeCreateUserSchema }