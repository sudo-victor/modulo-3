import { Base } from "./base.js"

export class Transaction extends Base {
  constructor(props) {
    super()
    this.value = props.value
    this.description = props.description
    this.kind = props.kind
    this.canceledAt = props.canceledAt
  }
}