<template>
  <div>
    <div class="gedan">
      <div class="content">
        <div>自建歌单</div>
        <div @click="$router.push('/mySongsList')">查看更多></div>
      </div>
      <div class="scroll">
        <div class="mid">
          <img
            class="madeList"
            v-for="(item) in myList"
            :key="item.id"
            :src="'http://xiexizhou.top/'+item.group_image"
          />
        </div>
      </div>
    </div>
    <div class="gedan">
      <div class="content">
        <div>收藏歌单</div>
        <div @click="$router.push('/collection')">查看更多></div>
      </div>
      <div class="scroll">
        <div class="mid">
          <img
            class="madeList"
            v-for="(item) in myList"
            :key="item.id"
            :src="'http://xiexizhou.top/'+item.group_image"
          />
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import { MusicApiService } from "../../../api/music/musicApiService";
export default {
  data() {
    return {
      myList: [],
    };
  },
  methods: {
    getList() {
      MusicApiService.getAllMyGroup(1, 3).then((res) => {
        console.log(res);
        this.myList = res.results;
      });
    },
  },
  mounted: function () {
    this.getList();
  },
};
</script>

<style lang="less" scoped>
.gedan {
  .content {
    height: 20vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div:nth-of-type(1) {
      color: #333333;
      padding-left: 2vw;
      border-left: 1vw solid red;
    }
    div:nth-of-type(2) {
      color: #888888;
      font-size: 2.7vw;
      margin-right: 1.3vw;
    }
  }
  .scroll {
    overflow: hidden;
    overflow-x: scroll;
    width: 100%;
    height: 32vw;
    .mid {
      width: 100vw;
      height: 32vw;
    }
    .madeList {
      overflow-y: scroll;
      float: left;
      margin-left: 1.3vw;
      height: 32vw;
      width: 32vw;
      border-radius: 2.6vw;
    }
  }
}
</style>