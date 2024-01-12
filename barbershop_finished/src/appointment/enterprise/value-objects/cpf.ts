import { InvalidCpfError } from "@/core/domain/errors/invalid-cpf-error"

export class Cpf {
  private value: string

  constructor(value: string) {
    if(!this.validate(value)) {
      throw new InvalidCpfError()
    }
    this.value = this.clear(value)
  }

  toValue() {
    return this.value
  }

  isEqualTo(otherCpf: string) {
    const other = new Cpf(otherCpf)
    return other.toValue() === this.value
  }

  private validate(value: string) {
    value = value.replace(/\D/g, '');
    if (value.length !== 11) {
      return false;
    }
    if (/^(\d)\1+$/.test(value)) {
      return false;
    }
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(value.charAt(i)) * (10 - i);
    }
    let remainder = 11 - (sum % 11);
    let digit = remainder >= 10 ? 0 : remainder;
    if (digit !== parseInt(value.charAt(9))) {
      return false;
    }
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(value.charAt(i)) * (11 - i);
    }
    remainder = 11 - (sum % 11);
    digit = remainder >= 10 ? 0 : remainder;
    if (digit !== parseInt(value.charAt(10))) {
      return false;
    }
    return true;
  }

  private clear(value: string) {
    return value.replace(/\s/g, "")
  } 
}