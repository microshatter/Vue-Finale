<template>
  <div>
    <div class="mb-6">
      <h2 class="text-2xl font-bold text-gray-800">{{ $t('user.new.title', 'Create New Reservation') }}</h2>
      <p class="text-gray-600 mt-2">{{ $t('user.new.subtitle', 'Fill in the details to make a new reservation') }}</p>
    </div>

    <div class="bg-white rounded-lg shadow p-6 border border-gray-200">
      <form @submit.prevent="handleSubmit">
        <!-- Resource Type Selection -->
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 mb-2">{{ $t('user.new.resourceType', 'Resource Type') }}</label>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              class="border rounded-lg p-4 cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition-colors"
              :class="{ 'border-indigo-500 bg-indigo-50': selectedType === 'book' }"
              @click="selectedType = 'book'"
            >
              <div class="flex items-center">
                <div class="rounded-full bg-blue-100 p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900">{{ $t('user.new.book', 'Book') }}</h3>
                  <p class="text-sm text-gray-500">{{ $t('user.new.bookDesc', 'Reserve a book from the library') }}</p>
                </div>
              </div>
            </div>

            <div
              class="border rounded-lg p-4 cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition-colors"
              :class="{ 'border-indigo-500 bg-indigo-50': selectedType === 'studyRoom' }"
              @click="selectedType = 'studyRoom'"
            >
              <div class="flex items-center">
                <div class="rounded-full bg-green-100 p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900">{{ $t('user.new.studyRoom', 'Study Room') }}</h3>
                  <p class="text-sm text-gray-500">{{ $t('user.new.studyRoomDesc', 'Book a study room for focused work') }}</p>
                </div>
              </div>
            </div>

            <div
              class="border rounded-lg p-4 cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition-colors"
              :class="{ 'border-indigo-500 bg-indigo-50': selectedType === 'equipment' }"
              @click="selectedType = 'equipment'"
            >
              <div class="flex items-center">
                <div class="rounded-full bg-purple-100 p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900">{{ $t('user.new.equipment', 'Equipment') }}</h3>
                  <p class="text-sm text-gray-500">{{ $t('user.new.equipmentDesc', 'Rent library equipment and devices') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Resource Selection -->
        <div class="mb-6" v-if="selectedType">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            {{ selectedType === 'book' && $t('user.new.selectBook', 'Select Book') }}
            {{ selectedType === 'studyRoom' && $t('user.new.selectRoom', 'Select Study Room') }}
            {{ selectedType === 'equipment' && $t('user.new.selectEquipment', 'Select Equipment') }}
          </label>

          <select
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            v-model="selectedResource"
          >
            <option value="" disabled>
              {{ selectedType === 'book' && $t('user.new.selectBookPlaceholder', 'Choose a book to reserve') }}
              {{ selectedType === 'studyRoom' && $t('user.new.selectRoomPlaceholder', 'Choose a study room') }}
              {{ selectedType === 'equipment' && $t('user.new.selectEquipmentPlaceholder', 'Choose equipment to rent') }}
            </option>

            <option v-if="selectedType === 'book'" value="book1">{{ $t('user.new.book1', 'Introduction to Algorithms') }}</option>
            <option v-if="selectedType === 'book'" value="book2">{{ $t('user.new.book2', 'Clean Code') }}</option>
            <option v-if="selectedType === 'book'" value="book3">{{ $t('user.new.book3', 'Design Patterns') }}</option>

            <option v-if="selectedType === 'studyRoom'" value="room1">{{ $t('user.new.room1', 'Group Study Room A (4 people)') }}</option>
            <option v-if="selectedType === 'studyRoom'" value="room2">{{ $t('user.new.room2', 'Silent Study Room B (2 people)') }}</option>
            <option v-if="selectedType === 'studyRoom'" value="room3">{{ $t('user.new.room3', 'Conference Room C (8 people)') }}</option>

            <option v-if="selectedType === 'equipment'" value="equip1">{{ $t('user.new.equip1', 'Laptop (MacBook Pro)') }}</option>
            <option v-if="selectedType === 'equipment'" value="equip2">{{ $t('user.new.equip2', 'Camera (Canon EOS)') }}</option>
            <option v-if="selectedType === 'equipment'" value="equip3">{{ $t('user.new.equip3', 'Projector (Portable)') }}</option>
          </select>
        </div>

        <!-- Date and Time Selection -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6" v-if="selectedResource">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">{{ $t('user.new.startDate', 'Start Date') }}</label>
            <input
              type="date"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              v-model="startDate"
            >
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">{{ $t('user.new.endDate', 'End Date') }}</label>
            <input
              type="date"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              v-model="endDate"
            >
          </div>
        </div>

        <!-- Additional Details -->
        <div class="mb-6" v-if="selectedResource">
          <label class="block text-sm font-medium text-gray-700 mb-2">{{ $t('user.new.details', 'Additional Details (Optional)') }}</label>
          <textarea
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            rows="4"
            :placeholder="$t('user.new.detailsPlaceholder', 'Any special requirements or notes...')"
            v-model="details"
          ></textarea>
        </div>

        <!-- Submit Button -->
        <div class="flex justify-end">
          <button
            type="submit"
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            :disabled="!selectedType || !selectedResource || !startDate || !endDate"
          >
            {{ $t('user.new.createReservation', 'Create Reservation') }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const { t } = useI18n();
const router = useRouter();

const selectedType = ref('');
const selectedResource = ref('');
const startDate = ref('');
const endDate = ref('');
const details = ref('');

const handleSubmit = () => {
  // In a real application, this would send the reservation data to an API
  console.log({
    type: selectedType.value,
    resource: selectedResource.value,
    startDate: startDate.value,
    endDate: endDate.value,
    details: details.value
  });

  // Show success message and redirect to dashboard
  alert(t('user.new.successMessage', 'Reservation created successfully!'));
  router.push('/user/dashboard');
};
</script>