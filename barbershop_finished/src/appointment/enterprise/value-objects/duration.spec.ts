import { Duration } from "./duration"

describe("[Value Object] Duration", () => {
  it("should be able to generate a common duration", () => {
    const TEN_MINUTES_IN_SECONDS = 600
    const duration = Duration.generate(10 * 60)
    expect(duration.toValue()).toEqual(TEN_MINUTES_IN_SECONDS)
  })
  it("should be able to generate a duration to an appointment if margin", () => {
    const TEN_MINUTES_IN_SECONDS = 600
    const APPOINTMENT_MARGIN = 600
    const duration = Duration.generateByServiceDuration(10 * 60)
    expect(duration.toValue()).toEqual(TEN_MINUTES_IN_SECONDS + APPOINTMENT_MARGIN)
  })
})