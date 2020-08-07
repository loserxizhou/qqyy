<template>
  <div class="outdiv">
    <van-nav-bar class="navbar" :fixed='true' title="上传歌曲" left-text="返回" left-arrow @click-left="$router.go(-1)" />

    <van-form>
      <van-field v-model="songName" label="歌曲名称" />

      <van-field v-model="author" label="歌手" />

      <van-field v-model="words" label="歌词" />

      <van-field name="uploader" label="图片">
        <template #input>
          <van-uploader v-model="uploader" />
        </template>
      </van-field>

      <van-field name="mp3" label="歌曲">
        <template #input>
          <van-uploader v-model="mp3" />
        </template>
      </van-field>

      <van-button block type="info" native-type="submit">
        上传
      </van-button>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      songName: "",
      author: "",
      words: "",
      uploader: [{ url: "https://img.yzcdn.cn/vant/leaf.jpg" }],
      mp3: [{ url: "https://img.yzcdn.cn/vant/leaf.jpg" }],
    };
  },
};
</script>
<style lang="less">
.navbar {
  background-color: #d43c33;
  .van-nav-bar__title,
  .van-nav-bar__arrow::before,
  .van-nav-bar__text {
    color: #fefefe;
  }
}
</style>

<style lang="less" scoped>
.outdiv {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f3f0f0;
}
.van-form {
  font-size: 10vw;
  margin-top: 20vw;
  .van-field {
    margin: 2vw 0;
  }
  .van-button {
    margin-top: 5vw;
    background-color: #d43c33;
    border: none;
    font-weight: 600;
  }
}
</style>