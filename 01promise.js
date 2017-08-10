// 在 ECMAScrit 6 中，新增了一个构造函数，也是对象
// 1. 发起一个 Promise 任务
// 传递一个 function
// function 会自动执行
// 2. 在 function 中编写你的异步任务
// 

const {readFile} = require('fs')

// 这里只是发起了一个承诺
const p1 = new Promise(function (resolve, reject) {
  console.log('pending...')
  readFile('./data/a.txt', 'utf8', (err, data) => {
    if (err) {
      // 异步任务失败了
      console.log('rejected')
      reject(err)
    } else {
      // 异步任务成功了
      console.log('resolved')
      resolve(data)
    }
  })
})

const p2 = new Promise(function (resolve, reject) {
  console.log('pending...')
  readFile('./data/b.txt', 'utf8', (err, data) => {
    if (err) {
      // 异步任务失败了
      console.log('rejected')
      reject(err)
    } else {
      // 异步任务成功了
      console.log('resolved')
      resolve(data)
    }
  })
})

const p3 = new Promise(function (resolve, reject) {
  console.log('pending...')
  readFile('./data/c.txt', 'utf8', (err, data) => {
    if (err) {
      // 异步任务失败了
      console.log('rejected')
      reject(err)
    } else {
      // 异步任务成功了
      console.log('resolved')
      resolve(data)
    }
  })
})

// 获取承诺的结果
// 每个 Promise 实例都有一个方法 then
p1
  .then(function (data) {
    console.log(data.toString())
    console.log(111)
    // return 1
    return p2 // 这里返回了一个 Promise 实例对象
  }, function (err) {
    console.log('Promise 操作失败了', err.message)
  })
  // 从第二个 then 开始，默认接收上一个 then 的第一个函数的返回值
  // return 可以显示的返回任意数据，都可以在下一个 then 中接收到
  // 对于其他数据其实没什么意义
  // 这里可以返回一个 Promise 对象
  // 注意：当上一个 then 的 resolve 函数返回一个 Promise 实例对象的时候
  // 则这里的 then 的resolve 函数将作为上面返回的 Promise 实例对象的 resolve 函数
  .then(function (data) {
    console.log(data.toString())
    // console.log(222)
    // console.log(data)
    // return function () {
    //   console.log(123)
    // }
    return p3
  })
  .then(function (data) {
    console.log(data.toString())
    // console.log(333)
    // console.log(data)
  })

// p2.then(function (data) {
//   console.log(data.toString())
// }, function (err) {
//   console.log('Promise 操作失败了', err.message)
// })


p1
  .then(data => {
    console.log(data.toString())
    return p2
  })
  .then(data => {
    console.log(data.toString())
    return p3
  })
  .then(data => {
    console.log(data.toString())
  })
