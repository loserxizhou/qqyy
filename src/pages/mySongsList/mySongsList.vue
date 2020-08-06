<template>
  <div class="out">
    <van-nav-bar class="navbar" :fixed='true' title="自建歌单" left-text="返回" left-arrow @click-left="$router.go(-1)" />
    <div class="songs">
      <div class="songsitem" @click="Jump()" v-for="(index) in 10" :key="index">
        <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="">
        <p>歌单名字</p>
        <p>歌曲数目</p>
        <p>></p>
      </div>
    </div>
    <img class="hoverbtn" @click="cresongs" src="../../assets/tianjia.png" />

    <!-- 弹出框 -->
    <van-dialog v-model="show" confirmButtonColor='#333333' cancelButtonColor='#888888' title="创建歌单" show-cancel-button>
      <van-field v-model="value" placeholder="歌单名称" />
    </van-dialog>

  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      value: "",
    };
  },
  methods: {
    Jump() {
      this.$router.push("/songspage");
    },
    cresongs() {
      console.log(1);
      this.show = true;
    },
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
.songs {
  margin-top: 15vw;
  width: 95%;
  .songsitem {
    position: relative;
    margin: 1vw 0;
    width: 100%;
    height: 20vw;
    background-color: #fefefe;
    img {
      position: absolute;
      object-fit: cover;
      top: 2vw;
      left: 4vw;
      height: 17vw;
      width: 17vw;
      border-radius: 1vw;
    }
    p {
      position: absolute;
    }
    p:nth-of-type(1) {
      top: 6vw;
      left: 22vw;
      font-size: 4vw;
      color: #333333;
    }
    p:nth-of-type(2) {
      top: 12vw;
      left: 22vw;
      font-size: 3vw;
      color: #888888;
    }
  }
  p:nth-of-type(3) {
    top: 9vw;
    right: 4vw;
    font-size: 4vw;
    color: #757575;
  }
}
.hoverbtn {
  background-color: #fefefe;
  position: fixed;
  z-index: 1;
  top: 90%;
  right: 5%;
  border-radius: 10vw;
}
</style>