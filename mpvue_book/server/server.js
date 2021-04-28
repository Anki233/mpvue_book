// 搭建服务器的核心文件

let Koa = require('koa')
let KoaRouter = require('koa-router')

// 1. 生成应用及路由器实例
const app = new Koa()
const router = new KoaRouter()

// 核心代码
router.get('/',(ctx,next) => {
  // 1. 获取请求的参数

  // 2. 根据请求的地址和参数处理数据

  // 3. 响应数据
  ctx.body = '服务器返回的数据'
})


// 2. 使用路由器及路由
app
  .use(router.routes()) // 声明使用路由
  .use(router.allowedMethods()) // 允许使用路由的方法

// 3. 监听端口
app.listen('3000', () => {
  console.log('服务器启动成功')
  console.log('服务器地址： http://localhost:3000')
})
