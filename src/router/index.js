import { createRouter, createWebHistory } from "vue-router";
import ApiLayout from "../components/ApiLayout.vue";
import ResponsiveLayout from "../components/ResponsiveLayout.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: ResponsiveLayout,
    },
    {
      path: "/api",
      component: ApiLayout,
    },
  ],
});

export default router;
