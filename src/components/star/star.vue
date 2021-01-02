<template>
  <div :class="'star star-'+size">
    <span class="star-item" v-for="(star,index) in starArr" :key="index" :class="star"></span>
  </div>
</template>

<script>
export default {
  name: 'star.vue',
  props: {
    // 表示用多大的图片
    size: Number,
    // 表示当前商家的分数
    score: Number
  },
  computed: {
    /* 表示星星样式分为三种 on表示一颗星 half表示半颗星 off表示没星 */
    // 根据传入的分数动态生成一个保存星星样式的数组 然后遍历数组 动态生成星星
    starArr () {
      const starArr = []
      const onNum = Math.floor(this.score)
      for (var i = 0; i < onNum; i++) {
        starArr.push('on')
      }
      if ((this.score * 10 - onNum * 10) >= 5) {
        starArr.push('half')
      }
      while (starArr.length < 5) {
        starArr.push('off')
      }
      return starArr
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/star48_on')
        &.half
          bg-image('./images/star48_half')
        &.off
          bg-image('./images/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star36_on')
        &.half
          bg-image('./images/star36_half')
        &.off
          bg-image('./images/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star24_on')
        &.half
          bg-image('./images/star24_half')
        &.off
          bg-image('./images/star24_off')
</style>
