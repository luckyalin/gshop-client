<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import { mapActions } from 'vuex'
export default {
  name: 'App.vue',
  components: {
    FooterGuide
  },
  methods: {
    ...mapActions(['getAddress'])
  },
  mounted () {
    this.getAddress()
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus">

</style>
