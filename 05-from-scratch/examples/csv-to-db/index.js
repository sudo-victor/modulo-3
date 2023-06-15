const fs = require('fs');
const { CsvToJson } = require('./CsvToJson')

const path = './data/digimons.csv'

fs.readFile(path, 'utf8', (err, csv) => {
  const dataToPersist = CsvToJson.toJSON(csv)

  fs.writeFile('./data/digimons.json', JSON.stringify(dataToPersist), (err) => {
    if (err) {
      console.log('DEU RUIM')
    }
  })
})