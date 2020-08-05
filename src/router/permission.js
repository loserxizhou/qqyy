import router from "./index.js";

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.isLogin)) {
    //判断是否需要登录
    if (localStorage["token"]) {
      next();
    } else {
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      });
    }
  } else {
    next();
  }
});

export default router;
