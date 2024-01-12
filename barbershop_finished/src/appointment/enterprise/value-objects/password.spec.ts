import { describe, it, expect } from 'vitest'
import { Password } from './password'
import { InvalidPasswordError } from '@/core/domain/errors/invalid-password-error'

describe("[Value Object] Password", () => {
  it.each([
    "123456",
    "senha_valida"
  ])
  ("should be able to create a password", (validPassword) => {
    const password = new Password(validPassword)
    expect(password.getValue()).toBe(validPassword)
  })
  it.each([
    "123",
    "asd"
  ])
  ("should be able to create a password", (invalidPassword) => {
    try {
      new Password(invalidPassword)
    } catch (error: any) {
      expect(error).toBeInstanceOf(InvalidPasswordError)
    }
  })
})