const buf1 = Buffer.from('hello')
const buf2 = Buffer.from('hello')
const together = Buffer.concat([buf1, buf2])
console.log(together.toString())
