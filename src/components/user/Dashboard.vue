<template>
  <div>
    <div class="mb-6">
      <h2 class="text-2xl font-bold text-gray-800">{{ $t('user.dashboard.title', 'User Dashboard') }}</h2>
      <p class="text-gray-600 mt-2">{{ $t('user.dashboard.subtitle', 'Manage your account and reservations') }}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Reservation Card -->
      <div class="bg-white rounded-lg shadow p-6 border border-gray-200">
        <div class="flex items-center">
          <div class="rounded-full bg-blue-100 p-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div class="ml-4">
            <h3 class="text-lg font-medium text-gray-900">{{ $t('user.dashboard.reservations', 'My Reservations') }}</h3>
            <p class="text-2xl font-bold text-gray-700 mt-1">5</p>
          </div>
        </div>
        <router-link to="/user/reservations" class="mt-4 block text-blue-600 hover:text-blue-800 font-medium text-sm">
          {{ $t('user.dashboard.viewReservations', 'View Reservations') }} &rarr;
        </router-link>
      </div>

      <!-- Books Card -->
      <div class="bg-white rounded-lg shadow p-6 border border-gray-200">
        <div class="flex items-center">
          <div class="rounded-full bg-green-100 p-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div class="ml-4">
            <h3 class="text-lg font-medium text-gray-900">{{ $t('user.dashboard.books', 'Book Requests') }}</h3>
            <p class="text-2xl font-bold text-gray-700 mt-1">3</p>
          </div>
        </div>
        <router-link to="/user/books" class="mt-4 block text-blue-600 hover:text-blue-800 font-medium text-sm">
          {{ $t('user.dashboard.viewBooks', 'View Books') }} &rarr;
        </router-link>
      </div>

      <!-- Study Rooms Card -->
      <div class="bg-white rounded-lg shadow p-6 border border-gray-200">
        <div class="flex items-center">
          <div class="rounded-full bg-purple-100 p-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div class="ml-4">
            <h3 class="text-lg font-medium text-gray-900">{{ $t('user.dashboard.studyRooms', 'Study Rooms') }}</h3>
            <p class="text-2xl font-bold text-gray-700 mt-1">2</p>
          </div>
        </div>
        <router-link to="/user/study-rooms" class="mt-4 block text-blue-600 hover:text-blue-800 font-medium text-sm">
          {{ $t('user.dashboard.viewStudyRooms', 'View Study Rooms') }} &rarr;
        </router-link>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="mt-8 bg-white rounded-lg shadow p-6 border border-gray-200">
      <h3 class="text-lg font-medium text-gray-900 mb-4">{{ $t('user.dashboard.recentActivity', 'Recent Activity') }}</h3>

      <div class="flow-root">
        <ul class="divide-y divide-gray-200">
          <li class="py-4">
            <div class="flex items-center">
              <div class="rounded-full bg-blue-100 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">{{ $t('user.dashboard.activityApproved', 'Reservation approved') }}</p>
                <p class="text-sm text-gray-500">{{ $t('user.dashboard.activityTime', '2 hours ago') }}</p>
              </div>
            </div>
          </li>
          <li class="py-4">
            <div class="flex items-center">
              <div class="rounded-full bg-yellow-100 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">{{ $t('user.dashboard.activityPending', 'Reservation pending') }}</p>
                <p class="text-sm text-gray-500">{{ $t('user.dashboard.activityTime', '1 day ago') }}</p>
              </div>
            </div>
          </li>
          <li class="py-4">
            <div class="flex items-center">
              <div class="rounded-full bg-green-100 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">{{ $t('user.dashboard.activityCompleted', 'Reservation completed') }}</p>
                <p class="text-sm text-gray-500">{{ $t('user.dashboard.activityTime', '3 days ago') }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>