<template>
  <div class="outdiv">
    <div class="playTop">
      <van-image
        @click="className == 'imgRunning'
        ? (className = 'imgPaused')
        : (className = 'imgRunning')"
        :class='className'
        fit='cover'
        ref="vanimg"
        round
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
    </div>
    <audio
      id="myAudio"
      src=""
    ></audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: "true",
      className: "imgRunning",
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.outdiv {
  height: 100%;
}
.playTop {
  padding-top: 13.333vw;
  display: flex;
  justify-content: center;
  align-items: center;
  .imgRunning {
    width: 70vw;
    height: 70vw;
    animation: Circle 8s linear infinite;
    animation-play-state: running;
  }
  .imgPaused {
    width: 70vw;
    height: 70vw;
    animation: Circle 8s linear infinite;
    animation-play-state: paused;
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