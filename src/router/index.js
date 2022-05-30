import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/hello-world",
    name: "helloWorld",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/handling-user-input",
    name: "userInput",
    component: () => import("../views/HandlingUserInput.vue"),
  },
  {
    path: "/attribute-binding",
    name: "attribute-binding",
    component: () => import("../views/AttributeBinding.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
