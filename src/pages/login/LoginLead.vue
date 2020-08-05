<template>
  <div>
    <van-nav-bar
      title="用户登陆"
      :border="false"
      @click-left="onClickLeft"
    >
      <van-icon
        name="arrow-left"
        slot="left"
        color="#333"
        size=".4rem"
      />
    </van-nav-bar>
    <div class="hind"><span>未注册的用户名将会自动创建账号</span></div>
    <div class="input">
      <van-field
        v-model="username"
        label="用户名"
      />
      <van-field
        v-model="password"
        label="密码"
      />
    </div>
    <div class="btn">
      <van-button
        type="primary"
        color="#eb4d4b"
        @click.native="sign"
      >登陆</van-button>
    </div>
  </div>
</template>

<script>
import { UserApiService } from "../../api/user/userApiService";
import { mapMutations } from "vuex";
export default {
  data: function () {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onClickLeft: function () {
      this.$router.go(-1); //返回上一层
    },
    sign: function () {
      UserApiService.sign(this.username, this.password).then((res) => {
        console.log(res);
        //登陆成功
        var token = res.access;
        var refresh = res.refresh;
        var user_id = res.user_id;
        var username = res.username;
        //本地存储
        localStorage.setItem("token", token);
        localStorage.setItem("refresh", refresh);
        localStorage.setItem("user_id", user_id);
        localStorage.setItem("username", username);

        //vuex存储
        this.login(token, refresh, user_id, username);
        //跳转到首页
        this.$router.push({ path: "/home" });
      });
    },
    ...mapMutations(["login"]),
  },
};
</script>

<style lang="stylus" scoped>
.hind
  color: #bbb
  margin-left: 0.3rem
  margin-top: 0.5rem
.input
  margin-top: 0.3rem
.btn
  width: 100%
  display: flex
  justify-content: center
  margin-top: 0.4rem
  .van-button
    width: 6rem
    height: 0.8rem
    border-radius: 0.4rem
</style>
