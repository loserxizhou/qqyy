import request from "../../utils/request";
import store from "../../store/index";

export class MusicApi {
  constructor(url) {
    this.baseUrl = url;
  }

  //分页查询某歌单下所有的音乐
  getMusicListByGroupId(groupid, page = 1, size = 10) {
    return request({
      url: this.baseUrl + "api/group/music/",
      method: "get",
      headers: {
        Authorization: "Bearer " + store.getters["token"]
      },
      params: {
        group_id: groupid,
        isMine: true,
        page: page,
        size: size
      }
    });
  }

  //首页音乐
  getAllMusic(page = 1, size = 10) {
    return request({
      url: this.baseUrl + "api/allmusic/",
      method: "get",
      headers: {
        Authorization: "Bearer " + store.getters["token"]
      },
      params: {
        page: page,
        size: size
      }
    });
  }

  //上传音乐
  upload(music_info) {
    return request({
      url: this.baseUrl + "api/music/",
      method: "post",
      headers: {
        Authorization: "Bearer " + store.getters["token"]
      },
      data: music_info
    });
  }

  //分页查询我所有的歌单
  getAllMyGroup(page = 1, size = 10) {
    return request({
      url: this.baseUrl + "api/my/group/",
      method: "get",
      headers: {
        Authorization: "Bearer " + store.getters["token"]
      },
      params: {
        page: page,
        size: size
      }
    });
  }

  //创建歌单
  createGroup(group_name) {
    return request({
      url: this.baseUrl + "api/my/group/",
      method: "post",
      headers: {
        Authorization: "Bearer " + store.getters["token"]
      },
      data: {
        group_name: group_name
      }
    });
  }

  //删除歌单
  deleteGroup(group_id) {
    return request({
      url: this.baseUrl + "api/my/group/",
      method: "delete",
      headers: {
        Authorization: "Bearer " + store.getters["token"]
      },
      data: {
        group_id: group_id
      }
    });
  }

  //添加歌曲到指定歌单
  addMusicToGroup(music_id, group_id) {
    return request({
      url: this.baseUrl + "api/group/music/",
      method: "post",
      headers: {
        Authorization: "Bearer " + store.getters["token"]
      },
      data: {
        music_id: music_id,
        group_id: group_id
      }
    });
  }

  //获取音乐的详细信息
  getMusicInfo(music_id) {
    return request({
      url: this.baseUrl + "api/music/",
      method: "get",
      headers: {
        Authorization: "Bearer " + store.getters["token"]
      },
      params: {
        music_id: music_id
      }
    });
  }

  //公开歌单
  displayMyGroup(group_id) {
    return request({
      url: this.baseUrl + "api/group/display/",
      method: "post",
      headers: {
        Authorization: "Bearer " + store.getters["token"]
      },
      data: {
        my_group_id: group_id
      }
    });
  }

  //获取首页推荐的歌单
  getHomeGroup() {
    return request({
      url: this.baseUrl + "api/other/group/",
      method: "get",
      headers: {
        Authorization: "Bearer " + store.getters["token"]
      }
    });
  }

  //请求一条MP3文件
  getMusic(url) {
    return request({
      url: url,
      method: "get"
    });
  }
}
