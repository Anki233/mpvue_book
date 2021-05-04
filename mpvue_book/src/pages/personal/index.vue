<template>
  <div id="personContainer">
    <div class="header">
      <img src="/static/imgs/personal/personal.png" alt="">
      <button>登录</button>
    </div>
    <div class="cardList">
      <div class="card">
        <span>扫码看书</span>
        <span class="more"> > </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      button
        display inline-block
        height 60rpx
        line-height 60rpx
        background rgba(255,255,255,0.5)
        vertical-align middle
        margin-left 40rpx
        max-width 200rpx
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
