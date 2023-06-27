import * as yup from "yup"

const makeGetBoardByIdSchema = () => {
  return yup.object().shape({
    id: yup.string().required()
  })
}

export { makeGetBoardByIdSchema }