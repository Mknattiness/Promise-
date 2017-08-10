const itcast = require('./itcast-http')
const cheerio = require('cheerio')
const path = require('path')

// 爬取到一页的数据
// 得到所有的链接
// 便利文章链接
// 针对每个链接发起请求
//    得到相应内容
//    解析内容，写入文件
// 当一页的数据抓取结束，然后进入下一页

// 先爬取所有的链接
// 便利这些链接，得到文章内容，然后写入文件

function go(page) {
  itcast.get(page)
    .then(data => {
      const $ = cheerio.load(data)
      // 接下来就像使用 jQuery 一样选择查找你的 data 中的数据
      $('.article').each((i, item) => {
        const $item = $(item)
        console.log($item.find('.author h2').text())
      })
      // 当前页查找输出结束，查看是否具有下一页
      // 如果有下一页,则拿到下一页的链接,然后请求
      // 如果没有下一页,则停止爬取
      const $next =  $('.pagination .next')
      if ($next.text().trim() === '下一页') {
        // 拿到父元素，获取下一页的 herf 链接，然后请求
        const nextPage = `https://www.qiushibaike.com${$next.parent().attr('href')}`
        go(nextPage)
      } else {
        console.log('获取所有页码数据结束')
      }
    })
}

go('https://www.qiushibaike.com/8hr/page/1/')
