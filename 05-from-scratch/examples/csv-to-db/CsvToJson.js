class CsvToJson {
  data = []
  csv = ""

  constructor(csv) {
    this.csv = csv
  }

  static toJSON(csv) {
    const csvToJson = new CsvToJson(csv)
    return csvToJson
      .separateRows()
      .removeEmptyRows()
      .parseRowsToJson()
      .build()
  }

  separateRows() {
    this.csv = this.csv.split('\n')
    return this
  }

  removeEmptyRows() {
    this.csv = this.csv.filter(row => row !== '')
    return this
  }

  parseRowsToJson() {
    const [stringHeader, ...contents] = this.csv
    const headers = stringHeader.split(',')

    this.data = contents.map((stringRow) => {
      const cells = stringRow.split(',')
      return {
        [headers[0]]: cells[0],
        [headers[1]]: cells[1],
        [headers[2]]: cells[2],
      }
    })

    return this
  }

  build() {
    return this.data
  }
}

module.exports = { CsvToJson }
