<template>
  <div>
    <van-nav-bar class="navbar" :fixed='true' title="推荐歌单" left-text="返回" left-arrow
      @click-left="$router.push('/home')" />
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->

      <van-grid :border="false" :column-num="3" :gutter="4">
        <van-grid-item v-for="value in list" to="/songContent" :key="value">
          <van-image fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <p>高合金钢合金钢脚后跟呱呱呱呱呱呱呱呱呱呱呱呱呱呱呱呱呱呱</p>
        </van-grid-item>
      </van-grid>
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
        for (let i = 0; i < 15; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.list.length >= 48) {
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
.van-list {
  margin-top: 10.7vw;
}
.van-grid-item {
  p {
    font-size: 1.733vw;
    width: 24vw;
    color: #888888;
    overflow: hidden; /*溢出隐藏*/
    text-overflow: ellipsis; /*文本溢出 显示省略号*/
    /* 弹性伸缩盒子模型显示 */
    display: -webkit-box; /*  存在兼 容性*/
    /*限制文本的行数*/
    -webkit-line-clamp: 2;
    /*设置或检索伸缩盒子对象的子元素排列方式*/
    -webkit-box-orient: vertical;
  }
  .van-image {
    height: 26vw;
    border-radius: 2.5vw;
    overflow: hidden;
  }
}
</style>