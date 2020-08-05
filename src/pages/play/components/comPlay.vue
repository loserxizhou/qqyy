<template>
  <div class="outdiv">
    <!-- 转圈这个 -->
    <div class="playTop">
      <div class="outimg">
        <div class="midimg">
          <van-image @click="className == 'imgRunning'
          ? (className = 'imgPaused')
          : (className = 'imgRunning')" :class='className' fit='cover' round
            src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
      </div>
    </div>
    <!-- 歌手和歌名 -->
    <div class="songsname">
      <van-notice-bar scrollable text="歌的名字有点长" />
      <p>歌手名字</p>
    </div>
    <!-- audio控制组件 -->
    <div class="audioContent">
      <!-- 进度条 -->
      <div class="audiotop">
        <van-progress class="progressbar" color="#fefefe" stroke-width="4px" track-color="#bfbfbf"
          :percentage="percentage" />
        <span>01:01</span>
        <span>03:54</span>
      </div>
      <!-- audio -->
      <audio id="myAudio" src="http://xiexizhou.top/media/xizhou/%E7%88%B1%E5%9C%A8%E8%A5%BF%E5%85%83%E5%89%8D.mp3">
      </audio>
      <!-- 暂停,播放等 -->
      <div class="audiobottom">
        <van-image ref="imgsrc" class="changeimg" :src="imgList[cimg]" @click="imgchange" />
        <van-icon class="left" name="arrow-left" />
        <van-icon v-if="showicon" @click="bofang" class="mid" name="play-circle-o" />
        <van-icon v-else class="mid" @click="bofang" name="pause-circle-o" />
        <van-icon class="right" name="arrow" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      className: "imgRunning",
      percentage: "50",
      showicon: true,
      cimg: 0,
      imgList: [
        require("../../../assets/suiji.png"),
        require("../../../assets/xunhuan.png"),
        require("../../../assets/danqu.png"),
      ],
    };
  },
  methods: {
    bofang() {
      this.showicon = !this.showicon;
    },
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
    color: rgb(177, 175, 175);
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
      top: 60%;
      width: 80%;
    }
    span:nth-of-type(1) {
      position: absolute;
      top: 65%;
      left: 10%;
    }
    span:nth-of-type(2) {
      position: absolute;
      top: 65%;
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
      width: 8vw;
      height: 8vw;
      top: 23%;
      left: 5%;
    }
    .van-icon {
      position: absolute;
      font-size: 10vw;
      color: #fefefe;
    }
    .left {
      top: 20%;
      left: 20%;
    }
    .mid {
      top: 20%;
      left: 45%;
    }
    .right {
      top: 20%;
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