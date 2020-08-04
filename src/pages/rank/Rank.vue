<template>
  <div>
    <div class="bgc">
      <img src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg" alt="">
    </div>
    <single-item></single-item>
  </div>
</template>

<script>
import singleItem from "../home/components/singleItem";
export default {
  components: {
    singleItem,
  },
};
</script>

<style lang="stylus" scoped>
.bgc
  img
    width: 100%
    height: 200px
</style>
