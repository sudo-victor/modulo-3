import * as yup from "yup"

const makeCreatePhotoSchema = () => {
  return yup.object().shape({
    filename: yup.string().required(),
    mimetype: yup.string().required(),
  })
}

export { makeCreatePhotoSchema }
