export const makeTransaction = (data) => {
  return {
    value: data.value,
    description: data.description,
    kind: data.kind,
    createdAt: new Date(),
    canceledAt: null
  }
}