<template>
  <div>
    <div class="mb-6">
      <h2 class="text-2xl font-bold text-gray-800">{{ $t('user.settings.title', 'Account Settings') }}</h2>
      <p class="text-gray-600 mt-2">{{ $t('user.settings.subtitle', 'Manage your account preferences') }}</p>
    </div>

    <!-- Profile Card -->
    <div class="bg-white rounded-lg shadow p-6 mb-6 border border-gray-200">
      <h3 class="text-lg font-medium text-gray-900 mb-4">{{ $t('user.settings.profile', 'Profile Information') }}</h3>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1">{{ $t('user.settings.name', 'Full Name') }}</label>
          <input 
            type="text" 
            id="name" 
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            :placeholder="$t('user.settings.namePlaceholder', 'Enter your full name')"
          >
        </div>
        
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">{{ $t('user.settings.email', 'Email Address') }}</label>
          <input 
            type="email" 
            id="email" 
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            :placeholder="$t('user.settings.emailPlaceholder', 'Enter your email address')"
          >
        </div>
        
        <div>
          <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">{{ $t('user.settings.phone', 'Phone Number') }}</label>
          <input 
            type="tel" 
            id="phone" 
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            :placeholder="$t('user.settings.phonePlaceholder', 'Enter your phone number')"
          >
        </div>
        
        <div>
          <label for="studentId" class="block text-sm font-medium text-gray-700 mb-1">{{ $t('user.settings.studentId', 'Student/Faculty ID') }}</label>
          <input 
            type="text" 
            id="studentId" 
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            :placeholder="$t('user.settings.studentIdPlaceholder', 'Enter your ID number')"
          >
        </div>
      </div>
      
      <div class="mt-6">
        <button class="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          {{ $t('user.settings.saveProfile', 'Save Profile') }}
        </button>
      </div>
    </div>

    <!-- Password Card -->
    <div class="bg-white rounded-lg shadow p-6 mb-6 border border-gray-200">
      <h3 class="text-lg font-medium text-gray-900 mb-4">{{ $t('user.settings.password', 'Update Password') }}</h3>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="md:col-span-1">
          <label for="current-password" class="block text-sm font-medium text-gray-700 mb-1">{{ $t('user.settings.currentPassword', 'Current Password') }}</label>
        </div>
        <div class="md:col-span-2">
          <input 
            type="password" 
            id="current-password" 
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            :placeholder="$t('user.settings.currentPasswordPlaceholder', 'Enter current password')"
          >
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <div class="md:col-span-1">
          <label for="new-password" class="block text-sm font-medium text-gray-700 mb-1">{{ $t('user.settings.newPassword', 'New Password') }}</label>
        </div>
        <div class="md:col-span-2">
          <input 
            type="password" 
            id="new-password" 
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            :placeholder="$t('user.settings.newPasswordPlaceholder', 'Enter new password')"
          >
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <div class="md:col-span-1">
          <label for="confirm-password" class="block text-sm font-medium text-gray-700 mb-1">{{ $t('user.settings.confirmPassword', 'Confirm Password') }}</label>
        </div>
        <div class="md:col-span-2">
          <input 
            type="password" 
            id="confirm-password" 
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            :placeholder="$t('user.settings.confirmPasswordPlaceholder', 'Confirm new password')"
          >
        </div>
      </div>
      
      <div class="mt-6">
        <button class="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          {{ $t('user.settings.updatePassword', 'Update Password') }}
        </button>
      </div>
    </div>

    <!-- Notification Preferences -->
    <div class="bg-white rounded-lg shadow p-6 border border-gray-200">
      <h3 class="text-lg font-medium text-gray-900 mb-4">{{ $t('user.settings.notifications', 'Notification Preferences') }}</h3>
      
      <div class="space-y-4">
        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input 
              id="reservation-confirmation" 
              type="checkbox" 
              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              checked
            >
          </div>
          <div class="ml-3 text-sm">
            <label for="reservation-confirmation" class="font-medium text-gray-700">{{ $t('user.settings.reservationConfirm', 'Reservation Confirmations') }}</label>
            <p class="text-gray-500">{{ $t('user.settings.reservationConfirmDesc', 'Receive notifications when reservations are confirmed') }}</p>
          </div>
        </div>
        
        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input 
              id="reservation-reminders" 
              type="checkbox" 
              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              checked
            >
          </div>
          <div class="ml-3 text-sm">
            <label for="reservation-reminders" class="font-medium text-gray-700">{{ $t('user.settings.reservationReminders', 'Reservation Reminders') }}</label>
            <p class="text-gray-500">{{ $t('user.settings.reservationRemindersDesc', 'Get reminders before your reservations start') }}</p>
          </div>
        </div>
        
        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input 
              id="cancellation-notifications" 
              type="checkbox" 
              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            >
          </div>
          <div class="ml-3 text-sm">
            <label for="cancellation-notifications" class="font-medium text-gray-700">{{ $t('user.settings.cancellationNotif', 'Cancellation Notifications') }}</label>
            <p class="text-gray-500">{{ $t('user.settings.cancellationNotifDesc', 'Receive alerts when reservations are cancelled') }}</p>
          </div>
        </div>
        
        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input 
              id="system-updates" 
              type="checkbox" 
              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              checked
            >
          </div>
          <div class="ml-3 text-sm">
            <label for="system-updates" class="font-medium text-gray-700">{{ $t('user.settings.systemUpdates', 'System Updates') }}</label>
            <p class="text-gray-500">{{ $t('user.settings.systemUpdatesDesc', 'Receive important system notifications') }}</p>
          </div>
        </div>
      </div>
      
      <div class="mt-6">
        <button class="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          {{ $t('user.settings.savePreferences', 'Save Preferences') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>