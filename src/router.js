import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: () => import('./components/Home.vue')},
        {path: '/admin', component: () => import('./components/admin/Base.vue'), children: [
            {path: '', redirect: '/admin/dashboard'},
            {path: 'dashboard', component: () => import('./components/admin/Dashboard.vue')},
            {path: 'users', component: () => import('./components/admin/Users.vue')},
            {path: 'settings', component: () => import('./components/admin/Settings.vue')}
        ]},
        {path: '/:pathMatch(.*)*', redirect: '/demo'}
    ]
})

export default router