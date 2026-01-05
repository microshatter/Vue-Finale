import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: () => import('./components/Home.vue')},
        {path: '/login', component: () => import('./components/login.vue')},
        {path: '/register', component: () => import('./components/Register.vue')},
        {path: '/admin', component: () => import('./components/admin/Base.vue'), children: [
            {path: '', redirect: '/admin/dashboard'},
            {path: 'dashboard', component: () => import('./components/admin/Dashboard.vue')},
            {path: 'users', component: () => import('./components/admin/Users.vue')},
            {path: 'settings', component: () => import('./components/admin/Settings.vue')}
        ]},
        {path: '/:pathMatch(.*)*', component: () => import('./components/404.vue')}
    ]
})

export default router