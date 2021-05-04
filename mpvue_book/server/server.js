// 搭建服务器的核心文件

let Koa = require('koa')
let KoaRouter = require('koa-router')
let Fly = require('flyio/src/node')
let jwt = require('jsonwebtoken')
let datas = require('./datas/data.json')
// 1. 生成应用及路由器实例
const app = new Koa()
const router = new KoaRouter()
let fly = new Fly
// 核心代码
router.get('/', (ctx, next) => {
  // 1. 获取请求的参数

  // 2. 根据请求的地址和参数处理数据

  // 3. 响应数据
  ctx.body = '服务器返回的数据'
})

// 搜索图书的接口
router.get('/searchBooks', (ctx, next) => {
  // 1. 获取请求的参数
  let req = ctx.query.req
  // 2. 根据请求的地址和参数处理数据
  let booksArr = datas
  // 3. 响应数据
  ctx.body = booksArr
})

// 获取用户openId的接口
router.get('/getOpenId', async (ctx, next) => {
  // 1. 获取请求的参数
  let code = ctx.query.code
  let appId = '你的appId'
  let appSecret = '你的appSecret'
  // 2. 根据请求的地址和参数处理数据
  let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`
  // 发送请求给微信接口，获取openId
  let result = await fly.get(url)
  let userInfo = JSON.parse(result.data)
  // 将用户的openId存入数据库，openId

  // 自定义登录状态 就是根据用户的openId和sessionKey进行加密生成token 并返回给前端
  // 对openId和sessionKey进行加密
  let token = jwt.sign(userInfo,'jkl@zhuangbei.com')
  // 3. 响应数据
  ctx.body = token
})

// // 测试验证身份token的接口
// router.get('/test',(ctx,next) => {
//   // 获取token的值
//   let token = ctx.request.header.authorization
//   let result
//   try {
//     result = jwt.verify(token,'jkl@zhuangbei.com')
//     ctx.body = '验证成功'
//   }catch (e) {
//     ctx.body = '验证失败'
//   }
// })

// 2. 使用路由器及路由
app
  .use(router.routes()) // 声明使用路由
  .use(router.allowedMethods()) // 允许使用路由的方法

// 3. 监听端口
app.listen('3000', () => {
  console.log('服务器启动成功')
  console.log('服务器地址： http://localhost:3000')
})
