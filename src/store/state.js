let defaultToken = localStorage["token"];
let defaultRefresh = localStorage["refresh"];
let defaultUserid = localStorage["user_id"];
let defaultUsername = localStorage["username"];

export default {
  token: defaultToken,
  refresh: defaultRefresh,
  user_id: defaultUserid,
  username: defaultUsername,
  music_list: [],
  music_index: 0,
  music_url: "",
  play: false,
  audio: new Audio(),
  timeLength: 0,
  currentTime: 0.0,
  timer: null,
  index: -1,
  total: 0,
  isMusicPage: false
};
