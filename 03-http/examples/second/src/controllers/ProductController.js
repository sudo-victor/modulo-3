class ProductController {
  findAll(req, res) {
    const { query } = req
    const products = [{ name: 'camisa' }, { name: 'short' }]

    if (query.name) {
      const result = products.filter(item => item.name === query.name)
      res.json(result)
    }

    res.json(products)
  }
}

module.exports = { ProductController }