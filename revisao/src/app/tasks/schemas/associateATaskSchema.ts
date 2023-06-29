import * as yup from "yup"

const makeAssociateATaksSchema = () => {
  return yup.object().shape({
    user_id: yup.string().required(),
    task_id: yup.string().required(),
  })
}

export { makeAssociateATaksSchema }