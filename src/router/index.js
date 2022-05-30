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
    component: () => import("../views/HandlingUserInputView.vue"),
  },
  {
    path: "/attribute-binding",
    name: "attribute-binding",
    component: () => import("../views/AttributeBindingView.vue"),
  },
  {
    path: "/conditional-loop",
    name: "conditional-loop",
    component: () => import("../views/ConditionalLoopView.vue"),
  },
  {
    path: "/form-binding",
    name: "form-binding",
    component: () => import("../views/FormBindingView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
