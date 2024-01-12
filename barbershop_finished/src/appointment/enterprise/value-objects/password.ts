import { InvalidPasswordError } from "@/core/domain/errors/invalid-password-error"

export class Password {
  private value: string

  constructor(value: string) {
    if (!this.validate(value)) {
      throw new InvalidPasswordError()
    }

    this.value = value
  }

  private validate(value: string) {
    return value.length <= 5 ? false : true
  }

  getValue() {
    return this.value
  }
}