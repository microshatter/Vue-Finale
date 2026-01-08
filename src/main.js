import { createApp } from 'vue'
import './style.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { createI18n } from 'vue-i18n'
import enUS from './langs/en-US.json'
import zhCN from './langs/zh-CN.json'

import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'

const pinia = createPinia()

const i18n = createI18n({
    legacy: false,
    locale: 'en-US',
    fallbackLocale: 'en-US',
    messages: {
        'en-US': enUS,
        'zh-CN': zhCN
    }
})

const app = createApp(App)
app.use(pinia)
app.use(ElementPlus)
app.use(i18n)
app.use(router)

// Initialize auth state
import { useUsersStore } from './stores/users.js'
const usersStore = useUsersStore()
usersStore.initializeAuth()

app.mount('#app')
