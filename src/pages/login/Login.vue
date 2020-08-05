<template>
  <div class="body">
    <img src="../../assets/musicicon.png" />
    <router-link
      class="login-button"
      to="/login_lead"
    >快速登陆</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.body
  position: absolute
  background: #eb4d4b
  width: 100%
  height: 100%
  img
    position: absolute
    left: 50%
    transform: translateX(-50%)
    top: 3rem
  .login-button
    position: absolute
    left: 50%
    transform: translateX(-50%)
    bottom: 3rem
    height: 0.8rem
    width: 4rem
    background: #fff
    line-height: 0.8rem
    color: #eb4d4b
    text-align: center
    border-radius: 0.4rem
    font-size: 0.3rem
    font-weight: 600
</style>
