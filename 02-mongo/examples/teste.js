const numbers = [1,2,3,4,5,6]

console.log(
  numbers.filter((element, index) => {
    let arrayIndices = [];
    if (element % 2 === 0) {
      arrayIndices.push(index);
    }
    return arrayIndices;
  })
);

// tenho um array
const meuArray = [1,2,3,4]
// quero filtrar o array que sao pares
const newArray = meuArray.filter((item) => item % 2 === 0)
// criar outro array, com os items pares, porem só seus index
// [2,4]
const indexes = newArray.map((item) => {
  const index = meuArray.findIndex(itemOriginal => item === itemOriginal)

  return index
})

console.log(indexes, newArray)
