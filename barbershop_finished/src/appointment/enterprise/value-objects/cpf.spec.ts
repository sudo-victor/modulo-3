import { describe, it, expect } from "vitest"
import { Cpf } from "./cpf"
import { InvalidCpfError } from "@/core/domain/errors/invalid-cpf-error"

describe("[Value Object] Cpf", () => {
  it
  .each([
    "123.456.789-09",
    "111.222.333-96"
  ])
  ("should be able to create a instance of a cfp when passing a valid value", (validCpf) => {
    const cpf = new Cpf(validCpf)
    const expected = validCpf.replace(/\s/g, "")
    expect(cpf.toValue()).toBe(expected)
  })

  it.todo
  it
  .each([
    "111.111.111-00",
    "999.999.999-99"
  ])
  ("should not be able to create a instance of a cfp if an invalid value", (invalidCpf) => {
    try {
      new Cpf(invalidCpf)
    } catch (error: any) {
      expect(error).toBeInstanceOf(InvalidCpfError)
    }
  })
})