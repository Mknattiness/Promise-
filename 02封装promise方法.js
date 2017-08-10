// axios.get('')
//   .then(res => {

//   })

// function readFile() {
  
// }

const fs = require('fs')

function readFile (filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

readFile('./data/a.txt')
  .then(data => {
    console.log(data)
    return readFile('./data/b.txt')
  })
  .then(data => {
    console.log(data)
    return readFile('./data/c.txt')
  })
  .then(data => {
    console.log(data)
  })


// 这是一个异步函数
// async function readFiles() {
//   const dataA = await readFile('./data/a.txt')
//   console.log(dataA)
//   const dataB = await readFile('./data/b.txt')
//   console.log(dataB)
//   const dataC = await readFile('./data/c.txt')
//   console.log(dataC)
// }

// console.log(111)
// readFiles()
// console.log(222)
