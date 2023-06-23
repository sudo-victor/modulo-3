import * as yup from "yup"

const makeLoginSchema = () => {
  return yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });
}

export { makeLoginSchema }