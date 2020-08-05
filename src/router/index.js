import Vue from "vue";
import Router from "vue-router";
import Tabber from "../commons/Tabbar";
Vue.use(Router);

export default new Router({
  mode: "history", // h5模式
  routes: [
    {
      path: "/",
      component: Tabber,
      meta: {
        isLogin: true
      },
      children: [
        {
          path: "/home",
          meta: {
            isLogin: true
          },
          component: () => import("../pages/home/Home.vue")
        },
        {
          path: "/rank",
          meta: {
            isLogin: true
          },
          component: () => import("../pages/rank/Rank.vue")
        },
        {
          path: "/mine",
          meta: {
            isLogin: true
          },
          component: () => import("../pages/mine/Mine.vue")
        }
      ]
    },
    {
      path: "/listDetails",
      meta: {
        isLogin: true
      },
      component: () => import("../pages/listDetails/listDetails.vue")
    },
    {
      path: "/serach",
      meta: {
        isLogin: true
      },
      component: () => import("../pages/serach/Serach.vue")
    },
    {
      path: "/login",
      component: () => import("../pages/login/Login")
    },
    {
      path: "/login_lead",
      component: () => import("../pages/login/LoginLead")
    }
  ]
});
