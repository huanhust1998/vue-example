import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/basic",
    name: "basic",
    component: () => import("../views/basic/BasicView.vue"),
  },
  {
    path: "/practical",
    name: "practical",
    component: () => import("../views/practical/PracticalView.vue"),
  },
  {
    path: "/hello-world",
    name: "helloWorld",
    component: () => import("../views/basic/HomeView.vue"),
  },
  {
    path: "/handling-user-input",
    name: "userInput",
    component: () => import("../views/basic/HandlingUserInputView.vue"),
  },
  {
    path: "/attribute-binding",
    name: "attribute-binding",
    component: () => import("../views/basic/AttributeBindingView.vue"),
  },
  {
    path: "/conditional-loop",
    name: "conditional-loop",
    component: () => import("../views/basic/ConditionalLoopView.vue"),
  },
  {
    path: "/form-binding",
    name: "form-binding",
    component: () => import("../views/basic/FormBindingView.vue"),
  },
  {
    path: "/simple-component",
    name: "simple-component",
    component: () => import("../views/basic/SimpleComponentView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
