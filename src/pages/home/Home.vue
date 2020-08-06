<template>
  <div class="body">
    <van-nav-bar
      class="navbar"
      :fixed='true'
      title="首页"
    />
    <router-link to="/serach">
      <van-search
        shape="round"
        background="#fff"
        class="serach"
        placeholder="请输入搜索关键词"
      />
    </router-link>
    <song-item
      :groupList='groupList'
      class="song"
    ></song-item>
    <recommend></recommend>
  </div>
</template>

<script>
import songItem from "./components/songItem";
import recommend from "./components/recommend";
import { MusicApiService } from "../../api/music/musicApiService";
export default {
  data: function () {
    return {
      groupList: [],
    };
  },
  components: {
    songItem,
    recommend,
  },
  methods: {
    getGroupList: function () {
      MusicApiService.getHomeGroup().then((res) => {
        this.groupList = res.results;
      });
    },
  },
  mounted: function () {
    this.getGroupList();
  },
};
</script>

<style lang="less">
.navbar {
  background-color: #d43c33;
  .van-nav-bar__title,
  .van-nav-bar__arrow::before,
  .van-nav-bar__text {
    color: #fefefe;
  }
}
</style>

<style lang="stylus" scoped>
.body
  background: #fff
  .serach
    margin-bottom: 0.3rem
    margin-top: 1.1rem
    .serach >>> .van-search__content
      background-color: #fff
</style>
