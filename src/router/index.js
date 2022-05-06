import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import TaskForm from "../views/TaskForm.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/task-form",
    name: "task form",
    component: TaskForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
