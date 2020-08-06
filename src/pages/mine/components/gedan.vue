<template>
  <div>
    <div class="gedan">
      <div class="content">
        <div>自建歌单</div>
        <div @click="$router.push('/mySongsList')">查看更多></div>
      </div>
      <div class="scroll">
        <div class="mid">
          <div class="madeList" v-for="(item,index) in 3" :key="index"></div>
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
          <div class="madeList" v-for="(item,index) in 3" :key="index"></div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {};
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
      background-color: red;
      border-radius: 2.6vw;
    }
  }
}
</style>