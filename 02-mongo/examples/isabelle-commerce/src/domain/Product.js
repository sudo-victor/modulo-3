const BaseDomain = require("./BaseDomain")

class Product extends BaseDomain {
  constructor(props, id = undefined) {
    super()
    // Se houver o parametro id ele irá preencher o _id
    // Se n o _id será undefined
    this._id = id
    this.name = props.name
    this.description = props.description
    this.price = props.price
    this.category = props.category
  }
}

module.exports = Product