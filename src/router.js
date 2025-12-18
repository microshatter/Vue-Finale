import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', redirect: '/demo'},
        {path: '/demo', component: () => import('./components/HelloWorld.vue')},
        {path: '/admin', component: () => import('./components/admin/Base.vue')},
        {path: '/:pathMatch(.*)*', redirect: '/demo'}
    ]
})

export default router