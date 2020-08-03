<template>
  <div>
    <div class="login-top">
      <div class="login-text">快速登陆</div>
    </div>
    <router-view />

    <van-tabbar route v-model="active" active-color="#eb4d4b">
      <van-tabbar-item name="home" replace to="/home" icon="home-o">
        首页
      </van-tabbar-item>
      <van-tabbar-item name="rank" replace to="/rank" icon="search">
        排行
      </van-tabbar-item>
      <van-tabbar-item name="mine" replace to="/mine" icon="search">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "home"
    };
  }
};
</script>

<style lang="stylus" scoped>
.login-top
  height 1.5rem
  width 100%
  background #eb4d4b
  color #fff
  font-weight 600
  line-height 1.5rem
  font-size .4rem
  .login-text
    height .8rem
    width 2rem
    background #fff
    border-radius .4rem
    color #eb4d4b
    line-height .8rem
    text-align center
</style>
