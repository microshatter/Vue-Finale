<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-red-50 p-4">
        <div class="max-w-md w-full mx-auto text-center p-8">
            <div class="mb-8">
                <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-red-600" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>

                <h1 class="text-3xl font-bold text-gray-800 mb-4">{{ $t('forbidden.title') }}</h1>
                <p class="text-gray-600 mb-8 text-lg">{{ $t('forbidden.description') }}</p>

                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button @click="goHome"
                        class="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition">
                        {{ $t('forbidden.goHome') }}
                    </button>

                    <button @click="contactAdmin"
                        class="px-6 py-3 bg-white text-gray-800 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition">
                        {{ $t('forbidden.contactAdmin') }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
    router.push('/');
};

const contactAdmin = () => {
    // In a real app, this would open a contact form or send an email
    alert('Contact administrator functionality would be implemented here');
};
</script>