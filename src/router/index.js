import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import('../views/login/login'),
  },


];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
