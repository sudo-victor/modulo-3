import { BaseDomain } from "./BaseDomain.js";

// - Nome do produto -> string
// - Endereço do comprador -> string
// - Nome do comprador -> string
// - Data do pedido -> string
// - Pedido entregue -> boolean
export class Order extends BaseDomain {
  constructor(props) {
    super()
    this.productName = props.product.name
    this.recipientAddress = props.recipient.address
    this.recipientName = props.recipient.name
    this.isDelivered = false
  }
}

// new Order({
//   product: { name: 'Caneca' },
//   recipient: { address: 'Rua tal', name: 'Tazio' }
// })