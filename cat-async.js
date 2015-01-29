var fs = require('fs')

function doSomethingWithTheText(err, textBuffer) {
  console.log(textBuffer.toString())
  console.log('all done!')
}

fs.readFile('text.txt', doSomethingWithTheText)
