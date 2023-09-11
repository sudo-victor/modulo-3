import { describe, expect, it } from "vitest";
import { greetings } from ".";

describe("Function Greetings", () => {
  it("should be able to say hello to Halluz", () => {
    const name = "Halluz"
    const expected = "Hello, Halluz"

    const result = greetings(name)

    expect(result).toEqual(expected)
  })

  it("should be able to ask a geleia pa glasi", () => {
    const name = "Glasi"
    const expected = "Me dá uma geleia"

    const result = greetings(name)

    expect(result).toEqual(expected)
  })
})