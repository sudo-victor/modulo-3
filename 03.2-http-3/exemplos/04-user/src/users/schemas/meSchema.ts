import * as yup from "yup"

const makeMeSchema = () => {
  return yup.object().shape({
    id: yup.string().required(),
  })
}

export { makeMeSchema }
