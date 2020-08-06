import axios from "axios";
import { MusicApiService } from "../api/music/musicApiService";

export default {
  // changeCity: function (ctx, city) {
  //   ctx.commit('changeCity', city)
  // }

  //播放audio
  playAudio: function(ctx, { audio, timer, currentTime }) {
    // audio.currentTime = currentTime;

    var playPromise = audio.play();
    if (playPromise) {
      playPromise
        .then(() => {
          // 音频加载成功
          // 音频的播放需要耗时
          audio.currentTime = currentTime;
          var timeLength = audio.duration;
          //监听播放
          timer = setInterval(() => {
            //播放完毕清除timer
            if (audio.ended) {
              clearInterval(timer);
              return;
            }
            //播放暂停清除timer
            if (audio.paused) {
              console.log("暂停清除timer");
              clearInterval(timer);
              return;
            }
            ctx.commit("playMusic", audio);
          }, 1000);
        })
        .catch(e => {
          // 音频加载失败
          console.error(e);
        });
    }
  },
  //暂停播放
  stopAudio: function(ctx, audio) {
    audio.pause();
    ctx.commit("stopMusic", audio);
  },
  //获取歌单下面所有的音乐
  gitGroupMusic: function(group_id) {
    MusicApiService.getMusicListByGroupId(group_id).then(res => {});
  }
};
