import {createRouter, createWebHistory} from "vue-router";

export function get_router(routes){
  let router = createRouter({
    history: createWebHistory(),
    routes,
  });

  return router;
}