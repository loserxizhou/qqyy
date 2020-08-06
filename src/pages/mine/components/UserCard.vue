<template>
  <div class="user-card">
    <div class="top">
      <img class="user-icon"
        src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3427474780,1396133226&fm=26&gp=0.jpg" />
      <div class="username">name</div>
    </div>
    <div class="bottom">
      <div class="bo-item">关注 7</div>
      <div class="bo-item">粉丝 7</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
};
</script>


<style lang="stylus" scoped>
.user-card
  margin: 0 0.2rem
  height: 1.4rem
  background: #fff
  display: flex
  flex-direction: column
  // border .02rem solid #ccc
  border-radius: 0.2rem
  justify-content: space-around
  padding: 0 0.2rem
  .top
    display: flex
    position: relative
    .user-icon
      width: 0.9rem
      height: 0.9rem
      border-radius: 50%
      bottom: -0.2rem
      position: absolute
    .username
      margin-left: 1.2rem
      font-weight: 600
  .bottom
    display: flex
    .bo-item
      width: 1.1rem
      border-right: 0.02rem solid #ccc
      margin-right: 0.3rem
      font-size: 0.24rem
</style>
