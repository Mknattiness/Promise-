const { readFile, readFileSync } = require('fs')

// 同步连续读取三个文件：顺序可以保证
// 少用同步操作：同步会阻塞，效率低
// 一个人：请自动首做，一个完了做下一个
// console.log(readFileSync('./data/a.txt', 'utf8'))
// console.log(readFileSync('./data/b.txt', 'utf8'))
// console.log(readFileSync('./data/c.txt', 'utf8'))

// 找了三个人：每个人分配一个任务，任务完成包结果丢到回调函数中
// readFile('./data/a.txt', (err, data) => {
//   if (err) {
//     throw err
//   }
//   console.log(data.toString())
// })

// readFile('./data/b.txt', (err, data) => {
//   if (err) {
//     throw err
//   }
//   console.log(data.toString())
// })

// readFile('./data/c.txt', (err, data) => {
//   if (err) {
//     throw err
//   }
//   console.log(data.toString())
// })



// 找了一个人：这个人读完 a 再读 b 再读 c
readFile('./data/a.txt', (err, data) => {
  if (err) {
    throw err
  }
  console.log(data.toString())
  readFile('./data/b.txt', (err, data) => {
    if (err) {
      throw err
    }
    console.log(data.toString())
    readFile('./data/c.txt', (err, data) => {
      if (err) {
        throw err
      }
      console.log(data.toString())
    })
  })
})
