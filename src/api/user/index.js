import request from "../../utils/request";

export class UserApi {
  constructor(url) {
    this.baseUrl = url;
  }

  //注册
  sign(username, password) {
    return request({
      url: "/api/user/login/",
      method: "post",
      data: {
        username: username,
        password: password
      }
    });
  }
}
