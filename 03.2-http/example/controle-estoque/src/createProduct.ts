import { Product } from "./entities/Product";

interface CreateProductDTO { name: string; amount: number }

function generateCodeByProductName(productName: string) {
  const initial = productName.slice(0, 3)
  const currentDate = new Date().getTime()
  return `#${initial}${currentDate}`
}

export async function createProduct(data: CreateProductDTO) {
  // gerar o código
  const code = generateCodeByProductName(data.name)

  // adicionar o produto no banco
  // await Product.create({
  //   name: data.name,
  //   amount: data.amount,
  //   code: code
  // })
  const result = await Product.create({
    ...data,
    code
  })

  return result
}
