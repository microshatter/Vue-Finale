<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-100 p-4">
        <div class="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
            <div class="text-center mb-8">
                <h2 class="text-2xl font-bold text-gray-800">{{ $t('login.title') }}</h2>
                <p class="text-gray-600 mt-2">{{ $t('login.subtitle') }}</p>
            </div>

            <form class="mb-6">
                <div class="mb-4">
                    <div class="relative">
                        <input
                            v-model="loginForm.username"
                            :placeholder="$t('login.usernamePlaceholder')"
                            class="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        >
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="mb-4">
                    <div class="relative">
                        <input
                            v-model="loginForm.password"
                            :placeholder="$t('login.passwordPlaceholder')"
                            type="password"
                            class="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        >
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="flex justify-between items-center mb-6">
                    <div class="flex items-center">
                        <input
                            id="remember-me"
                            v-model="loginForm.rememberMe"
                            type="checkbox"
                            class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        >
                        <label for="remember-me" class="ml-2 block text-sm text-gray-700">
                            {{ $t('login.rememberMe') }}
                        </label>
                    </div>
                    <a href="#" @click.prevent="handleForgotPassword" class="text-sm text-blue-600 hover:text-blue-800">
                        {{ $t('login.forgotPassword') }}
                    </a>
                </div>

                <button
                    type="button"
                    @click="handleLogin"
                    :disabled="loading"
                    class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-75 transition"
                >
                    <span v-if="!loading">{{ $t('login.signIn') }}</span>
                    <span v-else class="flex items-center justify-center">
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {{ $t('login.signingIn') }}
                    </span>
                </button>
            </form>

            <div class="flex items-center mb-6">
                <div class="flex-grow border-t border-gray-300"></div>
                <span class="mx-4 text-gray-500 text-sm">{{ $t('login.divider') }}</span>
                <div class="flex-grow border-t border-gray-300"></div>
            </div>

            <div class="space-y-3 mb-8">
                <button
                    v-for="provider in socialProviders"
                    :key="provider.id"
                    @click="handleSocialLogin(provider.id)"
                    class="w-full flex items-center justify-center px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
                >
                    {{ $t('login.continueWith') }} {{ provider.name }}
                </button>
            </div>

            <div class="text-center text-sm text-gray-600">
                <p>{{ $t('login.noAccount') }}
                    <button @click="handleSignUp" class="text-blue-600 hover:text-blue-800 font-medium">
                        {{ $t('login.signUp') }}
                    </button>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useUsersStore } from '../stores/users.js';

const router = useRouter();
const usersStore = useUsersStore();

// Form data
const loginForm = reactive({
    username: '',
    password: '',
    rememberMe: false
});

// State
const loading = ref(false);

// Social login providers
const socialProviders = ref([
    { id: 'google', name: 'Google' },
    { id: 'github', name: 'GitHub' },
    { id: 'microsoft', name: 'Microsoft' }
]);

// Handle login
const handleLogin = async () => {
    // Basic validation
    if (!loginForm.username || loginForm.username.length < 3) {
        alert('Please enter a valid username (at least 3 characters)');
        return;
    }

    if (!loginForm.password || loginForm.password.length < 6) {
        alert('Please enter a valid password (at least 6 characters)');
        return;
    }

    loading.value = true;

    try {
        await usersStore.login(loginForm.username, loginForm.password);

        // Redirect to dashboard or previous page
        router.push('/admin/dashboard');
    } catch (error) {
        alert(error.message || 'Login failed');
    } finally {
        loading.value = false;
    }
};

// Handle social login
const handleSocialLogin = (providerId) => {
    alert(`Login with ${providerId} clicked`);
    // In a real app, this would redirect to the social login provider
};

// Handle forgot password
const handleForgotPassword = () => {
    alert('Forgot password clicked');
    // In a real app, this would navigate to password reset page
};

// Handle sign up
const handleSignUp = () => {
    router.push('/register');
};
</script>

<style scoped>
/* Tailwind CSS is used directly in class attributes */
</style>