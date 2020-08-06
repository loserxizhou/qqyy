import state from "./state";

export default {
  // changeCity: function (state, city) {
  //   state.city = city
  //   try {
  //     localStorage.city = city
  //   } catch (e) {}
  // }
  login: function(state, token, refresh, user_id, username) {
    state.token = token;
    state.refresh = refresh;
    state.user_id = user_id;
    state.username = username;
  },
  logout: function(state) {
    state.token = null;
    state.refresh = null;
    state.user_id = null;
    state.username = null;
  },
  playMusic: function(state, audio) {
    var timeLength = audio.duration;
    var currentTime = audio.currentTime;
    // console.log(currentTime + "  ==  " + timeLength + "  ==  " + audio.paused);
    state.audio = audio;
    state.timeLength = timeLength;
    state.currentTime = currentTime;
    state.play = true;
  },
  stopMusic: function(state, audio) {
    state.audio = audio;
    state.play = false;
  },

  //添加歌单到state
  addGroup: function(state, list) {
    console.log("==============");
    console.log(list);
    state.music_list = list;
    state.total = list.length;
  },

  //设置播放index
  setIndex: function(state, index) {
    state.index = index;
  },

  changePageFlag: function(state) {
    state.isMusicPage = true;
  },
  delPageFlag: function(state) {
    state.isMusicPage = false;
  },
  deleteOneMusic: function(index) {
    state.music_list.splice(index, 1);
  }
};
