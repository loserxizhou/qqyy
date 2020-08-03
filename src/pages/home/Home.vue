<template>
  <div>
    <song-item></song-item>
    <recommend></recommend>
  </div>
</template>

<script>
import songItem from "./components/songItem";
import recommend from "./components/recommend";
export default {
  components: {
    songItem,
    recommend,
  },
};
</script>

<style lang="stylus" scoped></style>
