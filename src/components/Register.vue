<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-100 p-4">
        <div class="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
            <div class="text-center mb-8">
                <h2 class="text-2xl font-bold text-gray-800">{{ $t('register.title') }}</h2>
                <p class="text-gray-600 mt-2">{{ $t('register.subtitle') }}</p>
            </div>

            <form class="mb-6" @submit.prevent="handleRegister">
                <div class="mb-4">
                    <input 
                        v-model="registerForm.username" 
                        :placeholder="$t('register.usernamePlaceholder')" 
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        type="text"
                    />
                    <div v-if="errors.username" class="mt-1 text-red-500 text-sm">{{ errors.username }}</div>
                </div>

                <div class="mb-4">
                    <input 
                        v-model="registerForm.email" 
                        :placeholder="$t('register.emailPlaceholder')" 
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        type="email"
                    />
                    <div v-if="errors.email" class="mt-1 text-red-500 text-sm">{{ errors.email }}</div>
                </div>

                <div class="mb-4">
                    <input 
                        v-model="registerForm.password" 
                        :placeholder="$t('register.passwordPlaceholder')"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        type="password"
                    />
                    <div v-if="errors.password" class="mt-1 text-red-500 text-sm">{{ errors.password }}</div>
                </div>

                <div class="mb-4">
                    <input 
                        v-model="registerForm.confirmPassword" 
                        :placeholder="$t('register.confirmPasswordPlaceholder')"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        type="password"
                    />
                    <div v-if="errors.confirmPassword" class="mt-1 text-red-500 text-sm">{{ errors.confirmPassword }}</div>
                </div>

                <div class="flex items-center mb-6">
                    <input 
                        v-model="registerForm.acceptTerms" 
                        type="checkbox" 
                        id="acceptTerms"
                        class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label for="acceptTerms" class="ml-2 block text-sm text-gray-700">
                        {{ $t('register.acceptTerms') }} 
                        <a href="#" @click.prevent="showTerms" class="text-blue-600 hover:text-blue-800">
                            {{ $t('register.termsAndConditions') }}
                        </a>
                    </label>
                    <div v-if="errors.acceptTerms" class="mt-1 text-red-500 text-sm ml-6">{{ errors.acceptTerms }}</div>
                </div>

                <button 
                    type="submit"
                    :disabled="loading"
                    class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-75 transition-colors duration-300"
                >
                    <span v-if="loading" class="flex items-center justify-center">
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {{ $t('register.registering') }}
                    </span>
                    <span v-else>
                        {{ $t('register.signUp') }}
                    </span>
                </button>
            </form>

            <div class="relative flex py-4 items-center">
                <div class="flex-grow border-t border-gray-300"></div>
                <span class="mx-4 text-gray-500 text-sm">{{ $t('register.divider') }}</span>
                <div class="flex-grow border-t border-gray-300"></div>
            </div>

            <div class="space-y-3">
                <button 
                    v-for="provider in socialProviders" 
                    :key="provider.id"
                    @click="handleSocialRegister(provider.id)"
                    class="w-full flex items-center justify-center px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
                >
                    {{ $t('register.continueWith') }} {{ provider.name }}
                </button>
            </div>

            <div class="mt-8 text-center">
                <p class="text-gray-600">
                    {{ $t('register.alreadyHaveAccount') }}
                    <a @click="handleLogin" class="font-medium text-blue-600 hover:text-blue-500 cursor-pointer">
                        {{ $t('register.signIn') }}
                    </a>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Form data
const registerForm = reactive({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
});

// Validation errors
const errors = reactive({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: ''
});

// State
const loading = ref(false);

// Social registration providers
const socialProviders = ref([
    { id: 'google', name: 'Google' },
    { id: 'github', name: 'GitHub' },
    { id: 'microsoft', name: 'Microsoft' }
]);

// Validate form
const validateForm = () => {
    let isValid = true;
    
    // Reset errors
    Object.keys(errors).forEach(key => errors[key] = '');
    
    // Username validation
    if (!registerForm.username) {
        errors.username = $t('login.usernameRequired') || 'Username is required';
        isValid = false;
    } else if (registerForm.username.length < 3 || registerForm.username.length > 20) {
        errors.username = 'Username length should be 3 to 20 characters';
        isValid = false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!registerForm.email) {
        errors.email = 'Email is required';
        isValid = false;
    } else if (!emailRegex.test(registerForm.email)) {
        errors.email = 'Please enter a valid email';
        isValid = false;
    }
    
    // Password validation
    if (!registerForm.password) {
        errors.password = $t('login.passwordRequired') || 'Password is required';
        isValid = false;
    } else if (registerForm.password.length < 6) {
        errors.password = 'Password length should be at least 6 characters';
        isValid = false;
    }
    
    // Confirm password validation
    if (!registerForm.confirmPassword) {
        errors.confirmPassword = 'Please confirm your password';
        isValid = false;
    } else if (registerForm.confirmPassword !== registerForm.password) {
        errors.confirmPassword = $t('register.passwordMismatch') || 'Passwords do not match';
        isValid = false;
    }
    
    // Terms acceptance validation
    if (!registerForm.acceptTerms) {
        errors.acceptTerms = 'You must accept the terms and conditions';
        isValid = false;
    }
    
    return isValid;
};

// Handle registration
const handleRegister = async () => {
    if (!validateForm()) {
        return;
    }

    try {
        loading.value = true;

        // Simulate API call
        setTimeout(() => {
            loading.value = false;
            alert($t('register.successMessage') || 'Registration successful! Please log in.');
            // Redirect to login page after successful registration
            router.push('/login');
        }, 1500);
    } catch (error) {
        console.error('Registration failed:', error);
        alert('Registration failed. Please try again.');
    }
};

// Handle social registration
const handleSocialRegister = (providerId) => {
    alert(`${$t('register.continueWith')} ${providerId} clicked`);
    // In a real app, this would redirect to the social registration provider
};

// Show terms and conditions
const showTerms = () => {
    alert($t('register.showTermsMessage') || 'Showing terms and conditions');
    // In a real app, this would open a modal or navigate to terms page
};

// Handle login
const handleLogin = () => {
    router.push('/login');
};
</script>