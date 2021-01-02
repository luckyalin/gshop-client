<!-- 首页组件vue -->
<template>
  <div class="on">
    <section class="msite">
      <!--首页头部-->
      <HeaderTop :title = "address.name">
        <span class="header_search" slot="left">
          <i class="iconfont icon-sousuo"></i>
        </span>
        <span class="header_login" slot="right">
          <span class="header_login_text">登录|注册</span>
        </span>
      </HeaderTop>
      <!--首页导航-->
      <nav class="msite_nav">
        <div class="swiper-container" v-if="categories.length">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(categories, index) in categoriesArr" :key="index">
              <a href="javascript:" class="link_to_food" v-for="(category,index) in categories" :key="index">
                <div class="food_container">
                  <img :src="imageUrl+category.image_url">
                </div>
                <span>{{category.title}}</span>
              </a>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
        <div v-else>
          <img src="./images/svg/msite_back.svg" alt="back">
        </div>
      </nav>
      <!--首页附近商家-->
      <div class="msite_shop_list">
        <div class="shop_header">
          <i class="iconfont icon-xuanxiang"></i>
          <span class="shop_header_title">附近商家</span>
        </div>
        <shop-list :shops="shops"></shop-list>
      </div>
    </section>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import ShopList from '../../components/ShopList/ShopList.vue'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Msite.vue',
  data () {
    return {
      imageUrl: 'https://fuss10.elemecdn.com'
    }
  },
  components: {
    HeaderTop,
    ShopList
  },
  methods: {
    ...mapActions(['getCategories', 'getShops'])
  },
  mounted () {
    this.getCategories()
    this.getShops()
  },
  computed: {
    ...mapState(['address', 'categories', 'shops']),
    // 处理首页分类轮播图  数据结构为一个二位数组  展示时双重循环遍历展示数据
    categoriesArr () {
      const arr = []
      let categoriesArr = []
      const {categories} = this
      categories.forEach(function (category) {
        if (categoriesArr.length === 8) {
          categoriesArr = []
        }
        if (categoriesArr.length === 0) {
          arr.push(categoriesArr)
        }
        categoriesArr.push(category)
      })
      return arr
    }
  },
  watch: {
    categories () {
      // 界面更新就立即创建Swiper对象
      this.$nextTick(() => { // 一旦完成界面更新, 立即调用(此条语句要写在数据更新之后)
        // 创建一个Swiper实例对象, 来实现轮播
        /* eslint-disable no-new */
        new Swiper('.swiper-container', {
          loop: true, // 可以循环轮播
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination'
          }
        })
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>
