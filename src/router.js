import { createRouter, createWebHashHistory } from "vue-router";

const routes = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/demo', component: () => import('App.vue')}
    ]
})