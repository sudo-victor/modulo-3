const fs = require('fs');

const readableStream = fs.createReadStream("./texto.txt", "utf8")

readableStream.on("data", (chunk) => {
  console.log(chunk)
})

readableStream.on("end", () => {
  console.log("FIM")
})
