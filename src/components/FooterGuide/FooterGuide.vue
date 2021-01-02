<!-- 底部组件Vue -->
<template>
  <mt-tabbar v-model = 'selected' class="footer">
    <mt-tab-item id="msite" @click.native="goto('/'+selected)">
      <img slot="icon" src="../../../static/img/mmLogo.png">
      外卖
    </mt-tab-item>
    <mt-tab-item id="search" @click.native="goto('/'+selected)">
      <img slot="icon" src="../../../static/img/findLogo.png">
      搜索
    </mt-tab-item>
    <mt-tab-item id="order" @click.native="goto('/'+selected)">
      <img slot="icon" src="../../../static/img/orderLogo.png">
      订单
    </mt-tab-item>
    <mt-tab-item id="profile" @click.native="goto('/'+selected)">
      <img slot="icon" src="../../../static/img/myLogo.png">
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  name: 'FooterGuide.vue',
  data () {
    return {
      selected: this.$route.path.substring(1)
    }
  },
  watch: {
    $route: function () {
      this.selected = this.$route.path.substring(1)
    }
  },
  methods: {
    goto: function (url) {
      this.$router.replace(url)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
</style>
