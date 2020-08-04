<template>
  <div>
    <van-grid :border="false" :column-num="3" :gutter="4">
      <van-grid-item text="文字" v-for="value in 6" :key="value">
        <van-image
          src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg" />
        <p>高合金钢合金钢脚后跟呱呱呱呱呱呱呱呱呱呱呱呱呱呱呱呱呱呱</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.van-grid-item {
  p {
    color: #333333;
    margin-top: 1vw;
    font-size: 3.2vw;
    width: 24vw;
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
    border-radius: 3vw;
    overflow: hidden;
  }
}
</style>