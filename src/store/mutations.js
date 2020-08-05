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
  }
};
