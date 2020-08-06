<template>
  <div class="body">
    <router-link to="/serach">
      <van-search shape="round" background="#f7f7f7" class="serach" placeholder="请输入搜索关键词" />
    </router-link>
    <user-card></user-card>
    <gedan></gedan>
    <div class="btn">
      <van-button type="primary" color="#eb4d4b" @click="mylogout">退出登陆</van-button>
    </div>
  </div>
</template>

<script>
import UserCard from "./components/UserCard";
import gedan from "./components/gedan";
import { mapMutations } from "vuex";
export default {
  name: "Mine",
  methods: {
    mylogout: function () {
      console.log("logout");
      //清除本地数据
      localStorage.clear();
      //清除vuex数据
      this.logout();
      //返回主页，路由守卫会返回到login
      this.$router.push("/login");
    },
    ...mapMutations(["logout"]),
  },
  components: {
    UserCard,
    gedan,
  },
};
</script>

<style lang="stylus" scoped>
.body
  background: #f7f7f7
  height: 10rem
  padding-top: 0.4rem
  .serach
    margin-bottom: 0.5rem
  .serach >>> .van-search__content
    background-color: #fff
  .btn
    width: 100%
    display: flex
    justify-content: center
    margin-top: 0.4rem
    .van-button
      width: 6rem
      height: 0.8rem
      border-radius: 0.4rem
</style>
