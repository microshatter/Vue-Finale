<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <header class="bg-white shadow-sm shadow-gray-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex items-center">
                        <h1 class="text-xl md:text-2xl font-bold text-indigo-600">{{ $t('user.base.title') }}</h1>
                    </div>

                    <nav class="flex items-center space-x-2 md:space-x-4">
                        <router-link to="/"
                            class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100 transition-colors duration-200">
                            {{ $t('common.home') }}
                        </router-link>
                        <router-link to="/user"
                            class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100 transition-colors duration-200">
                            {{ usersStore.currentUser?.name || $t('common.users') }}
                        </router-link>
                        <!-- Only admin can access admin dashboard -->
                        <router-link v-if="usersStore.currentUser?.admin === true"
                            to="/admin"
                            class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100 transition-colors duration-200">
                            {{ $t('common.admin') }}
                        </router-link>

                        <!-- settings -->
                         <router-link to="/user/settings"
                            class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100 transition-colors duration-200">
                            {{ $t('common.settings') }}
                        </router-link>

                        <button @click="handleLogout"
                            class="ml-2 md:ml-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            {{ $t('auth.logout') }}
                        </button>
                    </nav>
                </div>
            </div>
        </header>

        <main class="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <div class="bg-white rounded-lg shadow-sm p-4 md:p-6 min-h-[calc(100vh-120px)]">
                <router-view />
            </div>
        </main>

        <footer class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500 text-sm">
            <p>{{ $t('common.footer', '© Vue-Finale Library Reservation System') }}</p>
        </footer>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useUsersStore } from '../../stores/users.js'
import { useI18n } from 'vue-i18n'

const usersStore = useUsersStore()
const router = useRouter()
const { t } = useI18n()

const handleLogout = () => {
    usersStore.logout()
    router.push('/login')
}
</script>