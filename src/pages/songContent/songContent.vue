<template>
  <div>
    <com-songs
      :group_id="parseInt(group_id)"
      :group_name="group_name"
      :group_image="'http://xiexizhou.top/'+group_image"
      :username="username"
    ></com-songs>
  </div>
</template>

<script>
import comSongs from "./components/comSongs";
export default {
  components: {
    comSongs,
  },
  data: function () {
    return {
      group_id: null,
      group_name: "",
      group_image: "",
      username: "",
    };
  },
  methods: {},
  mounted: function () {
    var group_id = this.$route.query.group_id;
    var group_name = this.$route.query.group_name;
    var group_image = this.$route.query.group_image;
    var username = this.$route.query.username;
    this.group_id = group_id;
    this.group_name = group_name;
    this.group_image = group_image;
    this.username = username;
  },
};
</script>

<style>
</style>