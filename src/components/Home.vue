<template>
    <div class="w-full min-h-screen">
        <!-- Hero Section -->
        <section class="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-24 px-4">
            <div class="max-w-4xl mx-auto text-center">
                <h1 class="text-4xl md:text-5xl font-bold mb-6">📚 {{ $t('mainTitle') }}</h1>
                <p class="text-xl mb-8 max-w-2xl mx-auto">{{ $t('mainSubtitle') }}</p>
                <button
                    class="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
                    @click="getStarted">
                    {{ $t('button.getStarted') }}
                </button>
            </div>
        </section>

        <!-- Features Section -->
        <section class="py-16 bg-gray-50">
            <div class="max-w-6xl mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">{{ $t('features.keyFeatures') }}</h2>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div
                        class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                        <h3 class="text-xl font-semibold mb-3 text-gray-800">📖 {{ $t('features.bookReservations') }}
                        </h3>
                        <p class="text-gray-600">{{ $t('features.bookReservationsDesc') }}</p>
                    </div>

                    <div
                        class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                        <h3 class="text-xl font-semibold mb-3 text-gray-800">🏢 {{ $t('features.studyRooms') }}</h3>
                        <p class="text-gray-600">{{ $t('features.studyRoomsDesc') }}</p>
                    </div>

                    <div
                        class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                        <h3 class="text-xl font-semibold mb-3 text-gray-800">🛠️ {{ $t('features.equipmentRental') }}
                        </h3>
                        <p class="text-gray-600">{{ $t('features.equipmentRentalDesc') }}</p>
                    </div>

                    <div
                        class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                        <h3 class="text-xl font-semibold mb-3 text-gray-800">⏰ {{ $t('features.easyScheduling') }}</h3>
                        <p class="text-gray-600">{{ $t('features.easySchedulingDesc') }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section class="py-16">
            <div class="max-w-3xl mx-auto px-4 text-center">
                <h2 class="text-3xl font-bold mb-6 text-gray-800">{{ $t('about.title') }}</h2>
                <p class="text-lg text-gray-600 mb-4">{{ $t('about.description') }}</p>
                <p class="text-lg text-gray-700">
                    <strong class="font-semibold">{{ $t('about.techStack') }}</strong> Vue 3 • Vite • JavaScript
                </p>
            </div>

            <div class="text-center">
                New: Change the language below to see other language in action.
            </div>
        </section>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const getStarted = () => {
    router.push('/register');
}
</script>