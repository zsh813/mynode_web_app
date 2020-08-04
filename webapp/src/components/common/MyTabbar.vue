<template>
  <div class="my-tabbar">
    <van-tabbar v-model="active" route active-color="#ee0a24">
      <van-tabbar-item icon="home-o" to='/home'>首页</van-tabbar-item>
      <van-tabbar-item icon="search" to='/find'>发现</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to='/Cart'>购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to='/User'>用户</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
  data() {
    return {
      active: 0,
    };
  },
  components:{
    [Tabbar.name]:Tabbar,
    [TabbarItem.name]:TabbarItem
  }
}
</script>

<style lang='scss' scoped>

</style>
