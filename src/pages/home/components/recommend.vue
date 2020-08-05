<template>
  <div class="songsItem">
    <p>
      <span>最新音乐</span>
      <span @click="$router.push('/songDetails')">查看更多></span>
    </p>
    <single-item></single-item>
  </div>
</template>

<script>
import singleItem from "./singleItem";
export default {
  components: {
    singleItem,
  },
};
</script>

<style lang="less" scoped>
p {
  margin: 0;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
}
.songsItem {
  margin-top: 0.3rem;
}
.songsItem > p {
  margin: 2vw 0 3.75vw 0;
  display: flex;
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