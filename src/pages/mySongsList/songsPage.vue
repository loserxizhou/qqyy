<template>
  <div>
    <song-list></song-list>
    <img class="hoverbtn" @click="$router.push('/update')" src="../../assets/shangchuan.png" />
  </div>
</template>

<script>
import songList from "../songDetails/components/songList";
export default {
  components: {
    songList,
  },
};
</script>

<style lang="less" scoped>
.hoverbtn {
  background-color: #fefefe;
  position: fixed;
  z-index: 1;
  top: 90%;
  right: 5%;
  border-radius: 10vw;
}
</style>