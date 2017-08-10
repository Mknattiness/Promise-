const https = require('https')
const fs = require('fs')

const options = {
  hostname: 'www.qiushibaike.com',
  port: 443,
  path: '/8hr/page/1/',
  method: 'GET',
  // 欺骗对方服务器，我是一个 PC 浏览器，你把 PC 内容响应给我
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.78 Safari/537.36'
  }
}

// 这里 Node 充当了一个客户端的作用
// 使用 http 模块的 get 方法发起一个请求
// 通过 res 相应对象得到对方服务器响应的结果内容
// 注意：res 用来获取响应结果
https.get(options, (res) => {

  // 接收对方服务器的响应结果
  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => rawData += chunk);
  res.on('end', () => {
    fs.writeFile('./qiubai.html', rawData, err => {
      if (err) {
        throw err
      }
      console.log('success')
    })
  });
}).on('error', (e) => {
  console.log(`Got error: ${e.message}`);
});
