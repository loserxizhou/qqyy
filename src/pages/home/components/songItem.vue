<template>
  <div class="songsItem">
    <p>
      <span>推荐歌单</span>
      <span @click="$router.push('/listDetails')">查看更多></span>
    </p>
    <song-sheet></song-sheet>
  </div>

</template>

<script>
import songSheet from "./songSheet";
export default {
  components: {
    songSheet,
  },
};
</script>

<style lang="less" scoped>
p {
  margin-top: 2vw;
  display: flex;
  padding-left: 0.667vw;
  border-left: 0.5vw solid red;
  justify-content: space-between;
  span:nth-of-type(1) {
    color: #333333;
  }
  span:nth-of-type(2) {
    color: #888888;
    font-size: 1.867vw;
    margin-right: 0.667vw;
  }
}
</style>
