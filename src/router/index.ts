import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from "../views/Home.vue";
import View from "../views/View.vue"; // add

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  // add start
  {
    path: "/view",
    name: "View",
    component: View,
  },
  // end
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;