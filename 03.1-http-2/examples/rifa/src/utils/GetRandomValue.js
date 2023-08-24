class GetRandomValue {
  static between(min, max) {
    return Math.round(Math.random() * (max - min)) + min
  }
}

export { GetRandomValue }