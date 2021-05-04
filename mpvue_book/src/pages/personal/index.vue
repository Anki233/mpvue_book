<template>
  <div id="personContainer">
    <div class="header">
      <img :src="userInfo.avatarUrl ? userInfo.avatarUrl : '/static/imgs/personal/personal.png'" alt="个人头像">
      <button @tap="GetUserInfo">{{ userInfo.nickName ? userInfo.nickName : '登录' }}</button>
    </div>
    <div class="cardList">
      <div class="card" @click="scan">
        <span>扫码看书</span>
        <span class="more"> > </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {}
    }
  },
  methods: {
    GetUserInfo(e) {
      let that = this
      wx.getUserProfile({
        desc:'正在获取',//不写不弹提示框
        success:function(res){
          that.userInfo = res.userInfo
        },
        fail:function(err){
          console.log("获取失败: ",err)
        }
      })
    },
    scan() {
      wx.scanCode({
        success: (res) => {
          console.log(res.result)
        }
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #personContainer
    .header
      padding 40rpx
      background #02a774
      img
        width 100rpx
        height 100rpx
        vertical-align middle
        border-radius 50rpx
      button
        display inline-block
        height 60rpx
        line-height 60rpx
        font-size 36rpx
        background rgba(255,255,255,0.5)
        vertical-align middle
        margin-left 40rpx
        max-width 300rpx
    .cardList
      width 94%
      height 60rpx
      line-height 60rpx
      margin 10rpx auto
      border 1rpx solid #eee
      padding 10rpx
      .more
        float right
</style>
