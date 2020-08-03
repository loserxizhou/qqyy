<template>
  <div>
    <router-view />

    <van-tabbar route active-color="#eb4d4b">
      <van-tabbar-item replace to="/home" icon="home-o">
        首页
      </van-tabbar-item>
      <van-tabbar-item replace to="/rank" icon="search">
        排行
      </van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="search">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped></style>
