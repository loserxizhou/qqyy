<template>
  <div class="body">
    <router-link to="/serach">
      <van-search
        v-model="value"
        shape="round"
        background="#f7f7f7"
        class="serach"
        placeholder="请输入搜索关键词"
      />
    </router-link>
    <user-card></user-card>
  </div>
</template>

<script>
import UserCard from "./components/UserCard";
export default {
  name: "Mine",
  components: {
    UserCard
  },
  methods: {}
};
</script>

<style lang="stylus" scoped>
.body
    background #f7f7f7
    height 10rem
    padding-top .4rem
    .serach
        margin-bottom .5rem
    .serach >>> .van-search__content
        background-color #fff
</style>
