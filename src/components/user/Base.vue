<template>
    <div class="min-h-screen bg-gray-50">
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
                <h1 class="text-2xl font-bold text-gray-900">{{ $t('user.base.title', 'User Dashboard') }}</h1>
                <nav class="flex items-center space-x-6">
                    <router-link to="/" class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md font-medium">
                        {{ $t('common.home', 'Home') }}
                    </router-link>
                    <router-link to="/users" class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md font-medium">
                        {{ $t('common.users', 'Users') }}
                    </router-link>
                    <button @click="handleLogout" class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
                        {{ $t('auth.logout', 'Logout') }}
                    </button>

                    <!-- This nav is for admin only if logged in as admin -->
                    <router-link v-if="usersStore.isAdmin" to="/admin" class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md font-medium">
                        {{ $t('common.admin', 'Admin') }}
                    </router-link>
                </nav>
            </div>
        </header>
        <main class="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <router-view />
        </main>
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