const fs = require('fs');

const writableStream = fs.createWriteStream("text-2.txt")
writableStream.write("hello world 1\n")
writableStream.write("hello world 2\n")
writableStream.write("hello world 3\n")
writableStream.write("hello world 4\n")
writableStream.end()