<template>
  <div>
    <van-nav-bar
      class="navbar"
      :fixed='true'
      title="最新音乐"
      left-text="返回"
      left-arrow
      @click-left="$router.push('/home')"
    />
    <van-image
      fit="cover"
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="已经到底了"
      @load="onLoad"
    >
      <van-cell
        v-for="item in list"
        :key="item.id"
      >
        <div class="songs">
          <div class="songsinfo">
            <p>{{item.music_name}}</p>
            <p>{{item.author}}</p>
          </div>
          <span class="bofangicon iconfont icon-bofang"></span>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import { MusicApiService } from "../../../api/music/musicApiService";
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      page: 1,
      size: 10,
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      MusicApiService.getAllMusic(this.page, this.size).then((res) => {
        this.page++;
        this.list = res.results;
        this.loading = false;
        if (res.next == null) {
          this.finished = true;
        }
      });
    },
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

<style lang="less" scoped>
p {
  margin: 0;
  padding: 0;
}
.songs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .songsinfo {
    p:nth-of-type(1) {
      font-size: 4vw;
      color: #333333;
    }
    p:nth-of-type(2) {
      font-size: 2.5vw;
      color: #888888;
    }
  }
  .bofangicon {
    font-size: 7vw;
  }
}
.van-image {
  height: 65vw;
  margin-top: 10.7vw;
  padding: 0;
}
</style>