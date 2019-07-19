import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/resume",
      name: "resume",
      component: () => import("./views/Resume.vue")
    },
    {
      path: "*",
      name: "404",
      component: () => import("./views/Missing.vue")
    }
  ]
});
