import crypto from "crypto";

export class UniqueId {
  private value: string;

  constructor(value?: string) {
    this.value = value ?? crypto.randomUUID()
  }

  toValue() {
    return this.value
  }
}