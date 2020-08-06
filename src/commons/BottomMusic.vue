<template>
  <div
    class="music_bom"
    v-if="total != 0 && !isMusicPage"
    @click="toPlay"
  >
    <div class="img">
      <van-image
        class='imgRunning'
        fit='cover'
        ref="vanimg"
        round
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
    </div>
    <div class="music_name">
      <div
        class="name"
        v-if="index == -1"
      >{{music_list[0].music_name}}-{{music_list[0].author}}</div>
      <div
        class="name"
        v-else
      >{{music_list[index].music_name}}-{{music_list[index].author}}</div>
    </div>
    <div class="stop">
      <van-icon
        name="play"
        size=".4rem"
        color="#fff"
        v-if="!play"
        @click.stop="playmusic"
      />
      <van-icon
        name="pause"
        size=".4rem"
        color="#fff"
        v-else
        @click.stop="stopmusic"
      />
    </div>
    <van-icon
      name="ascending"
      size=".5rem"
      color="#fff"
      @click.stop="showPop"
    />
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  name: "BottomMusic",
  data: function () {
    return {};
  },
  computed: {
    ...mapState([
      "play",
      "music_list",
      "index",
      "audio",
      "total",
      "currentTime",
      "isMusicPage",
    ]),
  },
  methods: {
    playmusic() {
      if (this.index == -1) {
        this.audio.src = "http://xiexizhou.top/" + this.music_list[0].music;
        this.playAudio({
          audio: this.audio,
          timer: this.timer,
          currentTime: this.currentTime,
        });
        this.setIndex(0);
      } else {
        this.audio.src =
          "http://xiexizhou.top/" + this.music_list[this.index].music;
        this.playAudio({
          audio: this.audio,
          timer: this.timer,
          currentTime: this.currentTime,
        });
      }
    },
    toPlay() {
      this.$router.push({
        path: "/play",
        params: { music_id: this.music_list[this.index].id },
      });
    },
    stopmusic() {
      this.stopAudio(this.audio);
    },
    showPop: function () {
      this.$emit("changeShow");
    },
    ...mapActions(["playAudio", "stopAudio"]),
    ...mapMutations(["setIndex"]),
  },
  mounted: function () {
    console.log(this.play);
  },
};
</script>

<style lang="stylus" scoped>
@keyframes Circle
  0%
    -webkit-transform: rotate(0deg)
  25%
    -webkit-transform: rotate(90deg)
  50%
    -webkit-transform: rotate(180deg)
  75%
    -webkit-transform: rotate(270deg)
  100%
    -webkit-transform: rotate(360deg)
.music_bom
  position: fixed
  bottom: 1rem
  width: 96%
  left: 50%
  transform: translateX(-50%)
  height: 0.8rem
  background: #eb4d4b
  border-radius: 0.4rem
  display: flex
  align-items: center
  justify-content: space-between
  padding: 0 0.2rem
  .music_name
    flex: 1
    display: flex
    align-items: center
    padding-left: 0.3rem
    color: #fff
  .stop
    width: 0.55rem
    height: 0.55rem
    border-radius: 50%
    border: 0.04rem solid #fff
    display: flex
    justify-content: center
    align-items: center
    .van-icon
      margin-left: 0
  .van-icon
    margin-left: 0.3rem
  .img
    width: 0.7rem
    height: 0.7rem
    .imgRunning
      width: 100%
      height: 100%
      animation: Circle 12s linear infinite
      animation-play-state: running
</style>