<template>
  <div>
    <van-nav-bar
      class="navbar"
      :fixed='true'
      title="歌单"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div class="content">
      <van-image
        fit="cover"
        :src="group_image"
      />
      <p>{{group_name}}</p>
      <p>{{username}}</p>
      <p>歌单简介:简介</p>
    </div>

    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="已经到底了"
      @load="onLoad"
    >
      <van-cell
        v-for="(item,i) in list"
        :key="item.id"
        @click="toplay(i)"
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
import { mapMutations, mapState, mapActions } from "vuex";
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
  props: {
    group_id: {
      type: Number,
      default: 1,
    },
    group_name: {
      type: String,
      default: "",
    },
    group_image: {
      type: String,
      default: "",
    },
    username: {
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapState([
      "music_list",
      "audio",
      "timer",
      "currentTime",
      "play",
      "index",
    ]),
  },
  methods: {
    getMusicList: function () {
      MusicApiService.getMusicListByGroupId(this.group_id).then((res) => {
        this.musicList = res.results;
      });
    },
    toplay: function (index_s) {
      this.$router.push({
        path: "/play",
        params: { music_id: this.list[index_s].id },
      });
      if (!this.play && index_s != this.index) {
        //获取当前的歌曲信息
        var music = this.list[index_s];
        //播放歌曲
        var url = "http://xiexizhou.top/" + music.music;
        this.audio.src = url;
        this.playAudio({
          audio: this.audio,
          timer: this.timer,
          currentTime: this.currentTime,
          url,
        });
        this.setIndex(index_s);
      }
      //正在播放歌曲时切换其他歌曲
      if (this.play && index_s != this.index) {
        //获取当前的歌曲信息
        var music = this.list[index_s];
        //播放歌曲
        var url = "http://xiexizhou.top/" + music.music;
        this.audio.src = url;
        this.playAudio({
          audio: this.audio,
          timer: this.timer,
          currentTime: this.currentTime,
          url,
        });
        this.setIndex(index_s);
      }
    },
    onLoad() {
      // 异步更新数据
      console.log("00000000000");
      console.log(this.group_id);
      MusicApiService.getMusicListByGroupId(
        this.group_id,
        this.page,
        this.size
      ).then((res) => {
        this.page++;
        console.log(res);
        this.list = res.results;
        this.loading = false;
        if (res.next == null) {
          this.finished = true;
        }
        //请求数据后将歌单添加到vuex
        this.addGroup(this.list);
      });
    },
    ...mapMutations(["addGroup", "setIndex", "changePageFlag"]),
    ...mapActions(["playAudio"]),
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
.content {
  position: relative;
  height: 55vw;
  background-image: linear-gradient(#e66465, #9198e5);
  width: 100%;
  margin-top: 10.7vw;
  padding: 0;
  .van-image:nth-of-type(1) {
    overflow: hidden;
    position: absolute;
    top: 15%;
    left: 5%;
    width: 35%;
    height: 60%;
    border-radius: 2vw;
  }
  .van-image:nth-of-type(2) {
    overflow: hidden;
    position: absolute;
    top: 30%;
    left: 50%;
    width: 5%;
    height: 10%;
  }
  p {
    color: #fefefe;
    position: absolute;
    left: 50%;
  }
  p:nth-of-type(1) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 4.5vw;
    width: 50%;
    top: 15%;
  }
  p:nth-of-type(2) {
    font-size: 3.5vw;
    top: 30%;
    left: 56%;
    width: 44%;
  }
  p:nth-of-type(3) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    // text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    width: 50%;
    font-size: 2.133vw;
    font-weight: 400;
    top: 61%;
  }
}
</style>