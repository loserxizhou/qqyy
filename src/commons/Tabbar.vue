<template>
  <div>
    <router-view />

    <van-tabbar
      route
      v-model="active"
      active-color="#eb4d4b"
    >
      <van-tabbar-item
        name="home"
        replace
        to="/home"
        icon="home-o"
      >
        首页
      </van-tabbar-item>
      <van-tabbar-item
        name="rank"
        replace
        to="/rank"
        icon="search"
      >
        排行
      </van-tabbar-item>
      <van-tabbar-item
        name="mine"
        replace
        to="/mine"
        icon="search"
      >
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "home",
    };
  },
};
</script>

<style lang="stylus" scoped></style>
