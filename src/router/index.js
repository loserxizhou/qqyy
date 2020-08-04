import Vue from "vue";
import Router from "vue-router";
import Tabber from "../commons/Tabbar";
Vue.use(Router);

export default new Router({
  mode: "history", // h5模式
  routes: [{
      path: "/",
      component: Tabber,
      children: [{
          path: "/home",
          component: () => import("../pages/home/Home.vue")
        },
        {
          path: "/rank",
          component: () => import("../pages/rank/Rank.vue")
        },
        {
          path: "/mine",
          component: () => import("../pages/mine/Mine.vue")
        }
      ]
    },
    {
      path: "/listDetails",
      component: () => import("../pages/listDetails/listDetails.vue")
    },
    {
      path: "/songDetails",
      component: () => import("../pages/songDetails/songDetails.vue")
    }
  ]
});
