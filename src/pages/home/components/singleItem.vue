<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text=""
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
      MusicApiService.getAllMusic(this.page, this.size).then((res) => {
        this.page++;
        this.list = res.results;
        this.loading = false;
        if (res.next == null) {
          this.finished = true;
        }
      });

      // // 异步更新数据
      // // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      // setTimeout(() => {
      //   for (let i = 0; i < 10; i++) {
      //     this.list.push(this.list.length + 1);
      //   }
      //   // 加载状态结束
      //   this.loading = false;
      //   // 数据全部加载完成
      //   if (this.list.length >= 20) {
      //     this.finished = true;
      //   }
      // }, 1000);
    },
  },
};
</script>

<style lang="less">
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
.van-list {
  margin-bottom: 12.5vw;
}
</style>