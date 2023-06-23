import * as yup from "yup"

const makeCreatePostSchema = () => {
  return yup.object().shape({
    content: yup.string().required(),
    user: yup.string().required()
  })
}

export { makeCreatePostSchema }