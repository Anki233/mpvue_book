<script>
import request from './utils/request'

export default {
  mounted() {
    wx.login({
      success: async (res) => {
        // 1. 获取用户登录的临时凭证
        let code = res.code
        // 2. 发送code给服务器端
        let token = await request('getOpenId', {code})
        wx.setStorageSync('token',token)
      }
    })

    // // 测试地址token
    // let result = await request('/test')
    // console.log(result)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
page
  width 100%
  height 100%
</style>
