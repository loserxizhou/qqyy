<template>
  <div id="app">
    <router-view />
    <bottom-music @changeShow="handleShow"></bottom-music>
    <van-popup
      v-model="show"
      round
      closeable
      close-icon="close"
      position="bottom"
      :style="{ height: '50%', paddingTop: '1rem' }"
    >
      <van-swipe-cell
        v-for="(item,index) in music_list"
        :key="item.id"
      >
        <van-cell @click="playmusic('http://xiexizhou.top/'+item.music,index)">
          <div class="songs">
            <div class="songsinfo">
              <p>{{item.music_name}}</p>
              <p>{{item.author}}</p>
            </div>
            <span class="bofangicon iconfont icon-bofang"></span>
          </div>
        </van-cell>
        <template #right>
          <van-button
            square
            type="danger"
            text="删除"
            class="delete-button"
            @click="deleteMusic(index)"
          />
        </template>
      </van-swipe-cell>
    </van-popup>
  </div>
</template>

<script>
import BottomMusic from "./commons/BottomMusic";
import { mapMutations, mapState, mapActions } from "vuex";
export default {
  name: "App",
  data: function () {
    return {
      show: false,
    };
  },
  computed: {
    ...mapState(["music_list", "audio", "timer", "currentTime"]),
  },
  methods: {
    handleShow: function () {
      this.show = !this.show;
    },
    deleteMusic: function (index) {
      this.deleteOneMusic(index);
    },
    playmusic: function (url, index) {
      this.showicon = false;
      this.audio.src = url;
      this.playAudio({
        audio: this.audio,
        timer: this.timer,
        currentTime: this.currentTime,
      });
      this.setIndex(index);
    },
    ...mapMutations(["deleteOneMusic", "setIndex"]),
    ...mapActions(["playAudio", "stopAudio"]),
  },
  components: {
    BottomMusic,
  },
};
</script>


<style lang="stylus" scoped>
.delete-button
  height: 100%
</style>
