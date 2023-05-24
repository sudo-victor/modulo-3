export const createCarBodyValidator = (body: any) => {
  const keys = Object.keys(body)
  const necessaryKeys = ['model', 'color', 'plate', 'brand', 'year', 'isUsed']

  let isValid = true

  necessaryKeys.forEach(necessaryKey => {
    const hasKey = keys.includes(necessaryKey)
    if(!hasKey) {
      isValid = false
    }
  })

  return isValid
} 