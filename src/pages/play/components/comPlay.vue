<template>
  <div class="outdiv">
    <!-- 歌手和歌名 -->
    <van-icon
      class="fanhui"
      @click="$router.go(-1)"
      name="arrow-left"
    />
    <div class="songsname">
      <van-notice-bar
        scrollable
        :text="music_list[index].music_name"
      />
      <p>{{music_list[index].author}}</p>
    </div>
    <!-- 转圈这个 -->
    <div class="playTop">
      <div class="outimg">
        <div class="midimg">
          <van-image
            @click="className == 'imgRunning'
          ? (className = 'imgPaused')
          : (className = 'imgRunning')"
            :class='className'
            fit='cover'
            round
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
      </div>
    </div>
    <!-- audio控制组件 -->
    <div class="audioContent">
      <!-- 进度条 -->
      <div class="audiotop">
        <van-progress
          class="progressbar"
          color="#fefefe"
          stroke-width="4px"
          track-color="#bfbfbf"
          :percentage="parseInt((currentTime/timeLength)*100)"
        />
        <span>{{formatSeconds(currentTime)}}</span>
        <span>{{formatSeconds(timeLength)}}</span>
      </div>
      <!-- audio -->
      <!-- 暂停,播放等 -->
      <div class="audiobottom">
        <van-icon
          class="left"
          name="arrow-left"
        />
        <van-icon
          v-if="showicon"
          @click="playmusic('http://xiexizhou.top/'+music_list[index].music)"
          class="mid"
          name="play-circle-o"
        />
        <van-icon
          v-else
          class="mid"
          @click="stopmusic"
          name="pause-circle-o"
        />
        <van-icon
          class="right"
          name="arrow"
          @click="nextMusic"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { MusicApiService } from "../../../api/music/musicApiService";
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      className: "imgRunning",
      percentage: "50",
      showicon: false,
      cimg: 0,
      imgList: [
        require("../../../assets/suiji.png"),
        require("../../../assets/xunhuan.png"),
        require("../../../assets/danqu.png"),
      ],
    };
  },
  computed: {
    ...mapState([
      "audio",
      "timer",
      "currentTime",
      "music_list",
      "index",
      "total",
      "timeLength",
    ]),
  },
  methods: {
    imgchange() {
      if (this.cimg % 3 == 0) {
        // this.$refs.imgsrc.src = "../../../assets/suiji.png";
        this.cimg += 1;
      } else if (this.cimg % 3 == 1) {
        // this.$refs.imgsrc.src = "../../../assets/xunhuan.png";
        this.cimg += 1;
      } else if (this.cimg % 3 == 2) {
        // this.$refs.imgsrc.src = "../../../assets/danqu.png";
        this.cimg = 0;
      }
    },
    nextMusic() {
      //切换下一首歌，首先获取下一首歌的url
      console.log(this.index + "下一首" + this.total);
      if (this.index == this.total - 1) {
        var url = this.music_list[0].music;
        this.playmusic(url);
        this.setIndex(0);
      } else {
        var url = this.music_list[this.index + 1].music;
        this.playmusic(url);
        this.setIndex(this.index + 1);
      }
    },
    playmusic: function (url) {
      this.showicon = false;
      this.audio.src = url;
      this.playAudio({
        audio: this.audio,
        timer: this.timer,
        currentTime: this.currentTime,
        url,
      });
    },
    stopmusic: function () {
      this.showicon = true;
      this.stopAudio(this.audio);
    },
    ...mapActions(["playAudio", "stopAudio"]),
    ...mapMutations(["setIndex", "changePageFlag", "delPageFlag"]),
    formatSeconds(value) {
      let result = parseInt(value);
      let h =
        Math.floor(result / 3600) < 10
          ? "0" + Math.floor(result / 3600)
          : Math.floor(result / 3600);
      let m =
        Math.floor((result / 60) % 60) < 10
          ? "0" + Math.floor((result / 60) % 60)
          : Math.floor((result / 60) % 60);
      let s =
        Math.floor(result % 60) < 10
          ? "0" + Math.floor(result % 60)
          : Math.floor(result % 60);

      let res = "";
      if (h !== "00") res += `${h}h`;
      if (m !== "00") res += `${m}:`;
      res += `${s}`;
      return res;
    },
  },
  mounted: function () {
    this.changePageFlag();
  },
  beforeDestroy: function () {
    console.log("delPageFlag");
    this.delPageFlag();
  },
};
</script>

<style lang="less" scoped>
.outdiv {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#f19cc7, #757575);
}

// 返回按钮
.fanhui {
  position: absolute;
  top: 4vw;
  left: 2vw;
  font-size: 6vw;
  color: #fefefe;
}

// 转圈这个
.playTop {
  padding-top: 15%;
  height: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  .outimg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70vw;
    height: 70vw;
    background-color: rgb(37, 37, 37);
    border-radius: 35vw;
    z-index: 0;
    .midimg {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 64vw;
      height: 64vw;
      background-color: rgb(50, 50, 50);
      border-radius: 32vw;
      z-index: 1;
      .imgRunning {
        width: 45vw;
        height: 45vw;
        animation: Circle 8s linear infinite;
        animation-play-state: running;
        z-index: 2;
      }
      .imgPaused {
        width: 45vw;
        height: 45vw;
        animation: Circle 8s linear infinite;
        animation-play-state: paused;
        z-index: 2;
      }
    }
  }
}

// 歌名和歌手
.songsname {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10%;
  width: 100%;
  .van-notice-bar {
    width: 80%;
    font-size: 5vw;
    color: #fefefe;
    background: rgba(0, 0, 0, 0);
  }
  p {
    margin-top: 3%;
    height: 20%;
    font-size: 4vw;
    color: rgb(134, 133, 133);
  }
}

.audioContent {
  height: 45%;

  // 进度条与时间
  .audiotop {
    position: relative;
    height: 50%;
    .van-progress {
      position: absolute;
      left: 10%;
      top: 80%;
      width: 80%;
    }
    span:nth-of-type(1) {
      position: absolute;
      top: 86%;
      left: 10%;
    }
    span:nth-of-type(2) {
      position: absolute;
      top: 86%;
      right: 10%;
    }
  }

  // 暂停,播放等
  .audiobottom {
    display: flex;
    justify-content: space-between;
    height: 50%;
    position: relative;
    .changeimg {
      position: absolute;
      width: 6vw;
      height: 6vw;
      top: 40%;
      left: 5%;
    }
    .van-icon {
      position: absolute;
      font-size: 8vw;
      color: #fefefe;
    }
    .left {
      top: 38%;
      left: 20%;
    }
    .mid {
      top: 38%;
      left: 45%;
    }
    .right {
      top: 38%;
      left: 70%;
    }
  }
}

@keyframes Circle {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>