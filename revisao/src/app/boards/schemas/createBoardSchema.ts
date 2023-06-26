import * as yup from "yup"

const makeCreateBoardSchema = () => {
  return yup.object().shape({
    title: yup.string().required()
  })
}

export { makeCreateBoardSchema }