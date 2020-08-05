<template>
  <div class="sheet">
    <div
      v-for="(item,index) in groupList"
      :key="index"
      class="item"
    >
      <van-image :src="'http://xiexizhou.top/'+item.group_info.group_image" />
      <div class="p">{{item.group_info.group_name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    groupList: {
      type: Array,
      defalut: [],
    },
  },
  mounted: function () {
    console.log(this.groupList);
  },
};
</script>


<style lang="stylus" scoped>
.sheet
  display: flex
  justify-content: space-between
  padding: 0rem 0.3rem
  flex-wrap: wrap
  .item
    width: 30%
    margin-top: 0.2rem
    .p
      color: #333333
      line-height: 0.35rem
      font-size: 3.2vw
      overflow: hidden /* 溢出隐藏 */
      text-overflow: ellipsis /* 文本溢出 显示省略号 */
      /* 弹性伸缩盒子模型显示 */
      display: -webkit-box /* 存在兼 容性 */
      /* 限制文本的行数 */
      -webkit-line-clamp: 2
      /* 设置或检索伸缩盒子对象的子元素排列方式 */
      -webkit-box-orient: vertical
    .van-image
      height: 26vw
      border-radius: 3vw
      overflow: hidden
</style>