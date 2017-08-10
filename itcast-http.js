const https = require('https')
const {parse} = require('url')
const itcast = {}

itcast.get = (url) => {
  return new Promise((resolve, reject) => {
    url = parse(url)
    const options = {
      hostname: url.host,
      port: 443,
      path: url.path,
      method: 'GET',
      // 欺骗对方服务器，我是一个 PC 浏览器，你把 PC 内容响应给我
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.78 Safari/537.36'
      }
    }
    https.get(options, (res) => {

      // 接收对方服务器的响应结果
      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => rawData += chunk);
      res.on('end', () => {
        resolve(rawData)
      })
    }).on('error', (e) => {
      reject(e)
    });
  })
}

module.exports = itcast
