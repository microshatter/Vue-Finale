import { RouterView, createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/demo', component: () => import('./components/HelloWorld.vue')},
        {path: '/admin', component: () => import('./components/admin/Base.vue')}
    ]
})

export default router