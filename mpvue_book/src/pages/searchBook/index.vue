<template>
  <div id="searchContainer">
    <div class="searchHeader">
      <input confirm-type="搜索" @confirm="handleSearch" v-model="searchContent" type="text" placeholder="书中自有黄金屋"
             placeholder-class="placeholder">
      <span @click="handleClear" v-show="searchContent" class="clear">X</span>
    </div>
    <div class="bookL">一共搜索到{{ booksArr.length }}本图书</div>
    <div v-if="booksArr.length">
      <BooksList :booksArr="booksArr"/>
    </div>
  </div>
</template>

<script>
import BooksList from '../booksList/index'
import request from '../../utils/request'

export default {
  components: {BooksList},
  data () {
    return {
      searchContent: '',
      booksArr: []
    }
  },
  methods: {
    handleClear () {
      this.searchContent = ''
      this.booksArr = []
    },
    async handleSearch () {
      // 搜索功能函数
      // 获取用户输入的内容
      let data = {req: this.searchContent}
      // 发送请求给服务器获取数据
      this.booksArr = await request('/searchBooks',data)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#searchContainer
  .searchHeader
    width 80%
    height 80rpx
    margin auto
    border-bottom 1rpx solid #02a774
    position relative
    input
      width 100%
      height 100%
      .placeholder
        color #02a774
        text-align center
        font-size 28rpx
    .clear
      position absolute
      top 20rpx
      right 20rpx
      z-index 99
  .bookL
    font-size 32rpx
    margin 10rpx 0
</style>
