import { createRouter, createWebHashHistory } from "vue-router";
import { useUsersStore } from "./stores/users.js";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: () => import('./components/Home.vue')},
        {path: '/login', component: () => import('./components/login.vue')},
        {path: '/register', component: () => import('./components/Register.vue')},
        {path: '/user', component: () => import('./components/user/Base.vue'), children: [
            {path: '', redirect: '/user/dashboard'},
            {path: 'dashboard', component: () => import('./components/user/Dashboard.vue')},
            {path: 'settings', component: () => import('./components/user/Settings.vue')},
            {path: 'reservations', component: () => import('./components/user/Reservations.vue')},
            {path: 'reservations/new', component: () => import('./components/user/New.vue')}
        ]},
        {path: '/admin', component: () => import('./components/admin/Base.vue'), children: [
            {path: '', redirect: '/admin/dashboard'},
            {path: 'dashboard', component: () => import('./components/admin/Dashboard.vue')},
            {path: 'users', component: () => import('./components/admin/Users.vue')},
            {path: 'settings', component: () => import('./components/admin/Settings.vue')}
        ]},
        {path: '/forbidden', component: () => import('./components/Forbidden.vue')}, // test only
        {path: '/:pathMatch(.*)*', component: () => import('./components/404.vue'), status: 404}
    ]
})


router.beforeEach((to, from, next) => {
    if (to.path === '/login' || to.path === '/register') {
        return next()
    }
    const usersStore = useUsersStore();
    // Forbid access to admin routes for non-admin users
    if (to.path.startsWith('/admin') && !usersStore.isAdmin) {
        return next('/forbidden')
    }

    if (!usersStore.isLoggedIn && (to.path.startsWith('/admin') || to.path.startsWith('/user'))) {
        return next('/login')
    }
    next()
})


export default router