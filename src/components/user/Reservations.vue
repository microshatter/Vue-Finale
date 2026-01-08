<template>
  <div>
    <div class="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
      <div>
        <h2 class="text-2xl font-bold text-gray-800">{{ $t('user.reservations.title', 'My Reservations') }}</h2>
        <p class="text-gray-600 mt-2">{{ $t('user.reservations.subtitle', 'Manage your current and past reservations') }}</p>
      </div>
      <router-link
        to="/user/reservations/new"
        class="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
        </svg>
        {{ $t('user.reservations.createNew', 'New Reservation') }}
      </router-link>
    </div>

    <!-- Filters -->
    <div class="bg-white rounded-lg shadow p-4 mb-6 border border-gray-200">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div class="flex flex-wrap gap-2">
          <button
            :class="['px-3 py-1 rounded-full text-sm font-medium',
                     activeFilter === 'all' ? 'bg-indigo-100 text-indigo-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200']"
            @click="activeFilter = 'all'"
          >
            {{ $t('user.reservations.filterAll', 'All') }}
          </button>
          <button
            :class="['px-3 py-1 rounded-full text-sm font-medium',
                     activeFilter === 'upcoming' ? 'bg-indigo-100 text-indigo-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200']"
            @click="activeFilter = 'upcoming'"
          >
            {{ $t('user.reservations.filterUpcoming', 'Upcoming') }}
          </button>
          <button
            :class="['px-3 py-1 rounded-full text-sm font-medium',
                     activeFilter === 'active' ? 'bg-indigo-100 text-indigo-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200']"
            @click="activeFilter = 'active'"
          >
            {{ $t('user.reservations.filterActive', 'Active') }}
          </button>
          <button
            :class="['px-3 py-1 rounded-full text-sm font-medium',
                     activeFilter === 'completed' ? 'bg-indigo-100 text-indigo-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200']"
            @click="activeFilter = 'completed'"
          >
            {{ $t('user.reservations.filterCompleted', 'Completed') }}
          </button>
          <button
            :class="['px-3 py-1 rounded-full text-sm font-medium',
                     activeFilter === 'cancelled' ? 'bg-indigo-100 text-indigo-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200']"
            @click="activeFilter = 'cancelled'"
          >
            {{ $t('user.reservations.filterCancelled', 'Cancelled') }}
          </button>
        </div>

        <div class="relative">
          <input
            type="text"
            :placeholder="$t('user.reservations.searchPlaceholder', 'Search reservations...')"
            class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 w-full md:w-64"
            v-model="searchQuery"
          >
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Reservations List -->
    <div class="space-y-4">
      <div
        v-for="reservation in filteredReservations"
        :key="reservation.id"
        class="bg-white rounded-lg shadow p-6 border border-gray-200 hover:shadow-md transition-shadow"
      >
        <div class="flex flex-col md:flex-row md:items-center justify-between">
          <div class="flex-1">
            <div class="flex items-center">
              <div
                class="flex-shrink-0 w-3 h-3 rounded-full mr-3"
                :class="{
                  'bg-green-500': reservation.status === 'active' || reservation.status === 'upcoming',
                  'bg-blue-500': reservation.status === 'confirmed',
                  'bg-yellow-500': reservation.status === 'pending',
                  'bg-red-500': reservation.status === 'cancelled' || reservation.status === 'completed'
                }"
              ></div>
              <h3 class="text-lg font-medium text-gray-900">{{ reservation.title }}</h3>
              <span
                class="ml-3 px-2 py-1 text-xs font-medium rounded-full"
                :class="{
                  'bg-green-100 text-green-800': reservation.status === 'active' || reservation.status === 'confirmed',
                  'bg-blue-100 text-blue-800': reservation.status === 'upcoming',
                  'bg-yellow-100 text-yellow-800': reservation.status === 'pending',
                  'bg-red-100 text-red-800': reservation.status === 'cancelled',
                  'bg-gray-100 text-gray-800': reservation.status === 'completed'
                }"
              >
                {{ $t(`user.reservations.status.${reservation.status}`) }}
              </span>
            </div>

            <div class="mt-3 grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-600">
              <div class="flex items-center">
                <svg class="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                </svg>
                <span>{{ formatDate(reservation.startDate) }} - {{ formatDate(reservation.endDate) }}</span>
              </div>

              <div class="flex items-center">
                <svg class="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
                <span>{{ reservation.location }}</span>
              </div>

              <div class="flex items-center">
                <svg class="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
                </svg>
                <span>{{ reservation.resourceType }}</span>
              </div>
            </div>
          </div>

          <div class="mt-4 md:mt-0 flex space-x-3">
            <button
              class="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              @click="viewReservation(reservation.id)"
            >
              {{ $t('user.reservations.viewDetails', 'View Details') }}
            </button>
            <button
              v-if="reservation.status === 'upcoming' || reservation.status === 'confirmed'"
              class="px-4 py-2 bg-red-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-red-700"
              @click="cancelReservation(reservation.id)"
            >
              {{ $t('user.reservations.cancel', 'Cancel') }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div
      v-if="filteredReservations.length === 0"
      class="bg-white rounded-lg shadow p-12 border border-gray-200 text-center"
    >
      <svg class="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
      <h3 class="mt-2 text-lg font-medium text-gray-900">{{ $t('user.reservations.noReservations', 'No reservations') }}</h3>
      <p class="mt-1 text-gray-500">{{ $t('user.reservations.noReservationsDesc', 'You have no reservations at the moment.') }}</p>
      <div class="mt-6">
        <router-link
          to="/user/new"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
          </svg>
          {{ $t('user.reservations.createFirst', 'Create Your First Reservation') }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const router = useRouter();

// Sample reservation data
const reservations = ref([
  {
    id: 1,
    title: t('user.reservations.studyRoomTitle', 'Group Study Room A'),
    status: 'active',
    startDate: '2026-01-09T10:00:00',
    endDate: '2026-01-09T12:00:00',
    location: t('user.reservations.location', 'Library, 2nd Floor'),
    resourceType: t('user.reservations.studyRoomType', 'Study Room')
  },
  {
    id: 2,
    title: t('user.reservations.bookTitle', 'Introduction to Algorithms'),
    status: 'upcoming',
    startDate: '2026-01-15T14:00:00',
    endDate: '2026-01-22T14:00:00',
    location: t('user.reservations.location', 'Library, Section C'),
    resourceType: t('user.reservations.bookType', 'Book')
  },
  {
    id: 3,
    title: t('user.reservations.equipmentTitle', 'MacBook Pro Laptop'),
    status: 'pending',
    startDate: '2026-01-12T09:00:00',
    endDate: '2026-01-19T09:00:00',
    location: t('user.reservations.location', 'Tech Desk'),
    resourceType: t('user.reservations.equipmentType', 'Equipment')
  },
  {
    id: 4,
    title: t('user.reservations.studyRoomTitle2', 'Conference Room C'),
    status: 'completed',
    startDate: '2025-12-20T15:00:00',
    endDate: '2025-12-20T17:00:00',
    location: t('user.reservations.location', 'Library, 3rd Floor'),
    resourceType: t('user.reservations.studyRoomType', 'Study Room')
  },
  {
    id: 5,
    title: t('user.reservations.bookTitle2', 'Design Patterns'),
    status: 'cancelled',
    startDate: '2025-12-15T10:00:00',
    endDate: '2025-12-22T10:00:00',
    location: t('user.reservations.location', 'Library, Section A'),
    resourceType: t('user.reservations.bookType', 'Book')
  }
]);

const activeFilter = ref('all');
const searchQuery = ref('');

// Filter reservations based on active filter and search query
const filteredReservations = computed(() => {
  let result = reservations.value;

  // Apply status filter
  if (activeFilter.value !== 'all') {
    result = result.filter(res => res.status === activeFilter.value);
  }

  // Apply search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(res =>
      res.title.toLowerCase().includes(query) ||
      res.resourceType.toLowerCase().includes(query) ||
      res.location.toLowerCase().includes(query)
    );
  }

  return result;
});

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const viewReservation = (id) => {
  // In a real application, this would navigate to the reservation details page
  console.log(`Viewing reservation ${id}`);
  // router.push(`/user/reservations/${id}`);
};

const cancelReservation = (id) => {
  // In a real application, this would send a cancellation request to the API
  const reservation = reservations.value.find(r => r.id === id);
  if (reservation) {
    reservation.status = 'cancelled';
    alert(t('user.reservations.cancelSuccess', 'Reservation cancelled successfully'));
  }
};
</script>