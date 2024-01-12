export class Duration {
  private value: number
  
  private constructor(value: number) {
    this.value = value
  }

  toValue() {
    return this.value
  }

  static generateByServiceDuration(durationInSeconds: number) {
    const finalDuration = durationInSeconds + this.getDurationMarginInSeconds()
    return new Duration(finalDuration)
  }

  static generate(durationInSeconds: number) {
    return new Duration(durationInSeconds)
  }

  static getDurationMarginInSeconds() {
    return 600
  }
}