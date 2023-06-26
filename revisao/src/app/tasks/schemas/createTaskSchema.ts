import * as yup from "yup"

const makeCreateTaskSchema = () => {
  return yup.object().shape({
    title: yup.string().required(),
    content: yup.string().required(),
    status: yup.string().required(),
  })
}

export { makeCreateTaskSchema }