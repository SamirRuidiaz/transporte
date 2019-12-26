<template>
  <div class="main-layout">
    <top-nav/>
    <side-nav/>
    <div class="content-layout margin-left">
      <b-container fluid>
        <slot :name="tabSlot"></slot>
      </b-container>
    </div>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav'
import SideNav from '@/components/SideNav'
import * as RouteTypes from '@/router'

export default {
  name: 'layout',
  components: {
    TopNav,
    SideNav
  },
  data () {
    return {
      tabSlot: ''
    }
  },
  created () {
    const pathArray = this.$route.path.split('/')
    pathArray.shift()
    const headerRoute = pathArray.shift()
    const tabRoute = pathArray.shift()

    this.tabSlot = tabRoute
  }
}
</script>

<style lang="scss" scoped>
  .content-layout,
  .main-layout{
    height:100%;
  }
  .margin-left {
    margin-left: 50px;
  }

  .padding-top {
    padding-top: 120px;
  }
  .padding-top-lite {
    padding-top: 50px;
  }
</style>
