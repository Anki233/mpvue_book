<script>
import request from './utils/request'

export default {
  mounted() {
    wx.login({
      success: async (res) => {
        // 1. 获取用户登录的临时凭证
        let code = res.code
        // 2. 发送code给服务器端
        let result = await request('getOpenId', {code})
      }
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
page
  width 100%
  height 100%
</style>
