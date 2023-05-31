export const getRandom = (min, max) => {
  const randomValue = Math.random() * (max - min) + min
  return Math.floor(randomValue)
}