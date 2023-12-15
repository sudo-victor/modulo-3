import * as yup from "yup"

export function createTaskValidateSchema() {
  return yup.object({
    title: yup.string().required("Irmao tu esqueceu do title, tlgd"),
    content: yup.string().required(),
    userId: yup.string()
  })
}
