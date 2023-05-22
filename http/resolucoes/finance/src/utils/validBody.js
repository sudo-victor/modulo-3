export const createTransactionBodyIsValid = (body) => {
  return body.value && body.description && body.kind
}