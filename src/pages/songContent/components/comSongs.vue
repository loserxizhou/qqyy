<template>
  <div>
    <van-nav-bar class="navbar" :fixed='true' title="歌单" left-text="返回" left-arrow @click-left="$router.go(-1)" />
    <div class="content">
      <van-image fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <p>歌单名称</p>
      <van-image fit="cover" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <p>歌单创建人</p>
      <p>歌单简介:啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
    </div>

    <van-list v-model="loading" :finished="finished" finished-text="已经到底了" @load="onLoad">
      <van-cell v-for="item in list" :key="item">
        <div class="songs">
          <div class="songsinfo">
            <p>歌曲名</p>
            <p>歌手</p>
          </div>
          <span class="bofangicon iconfont icon-bofang"></span>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.list.length >= 20) {
          this.finished = true;
        }
      }, 1000);
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