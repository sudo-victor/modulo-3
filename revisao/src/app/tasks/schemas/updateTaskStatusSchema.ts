import * as yup from "yup"

const makeUpdateTaskStatusSchema = () => {
  return yup.object().shape({
    id: yup.string().required(),
    status: yup.string().required(),
  })
}

export { makeUpdateTaskStatusSchema }