<template>
  <div class="music_bom">
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
      <div class="name">东风破-周杰伦</div>
    </div>
    <div class="stop">
      <van-icon
        name="play"
        size=".4rem"
        color="#fff"
      />
    </div>
    <van-icon
      name="ascending"
      size=".5rem"
      color="#fff"
    />
  </div>
</template>

<script>
export default {
  name: "BottomMusic",
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