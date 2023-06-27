import * as yup from "yup"

const makeDeleteTaskSchema = () => {
  return yup.object().shape({
    id: yup.string().required(),
  })
}

export { makeDeleteTaskSchema }