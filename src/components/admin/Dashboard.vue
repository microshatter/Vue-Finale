<template>
  <div class="p-6 bg-gray-50 min-h-screen">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
      <p class="text-gray-600">Welcome to the admin dashboard.</p>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div class="bg-white p-6 rounded-xl shadow border border-gray-100">
        <div class="flex items-center">
          <div class="p-3 rounded-lg bg-blue-100 text-blue-600 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <p class="text-gray-500 text-sm">Total Users</p>
            <p class="text-2xl font-bold">1,250</p>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-xl shadow border border-gray-100">
        <div class="flex items-center">
          <div class="p-3 rounded-lg bg-green-100 text-green-600 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <div>
            <p class="text-gray-500 text-sm">Bookings</p>
            <p class="text-2xl font-bold">3,480</p>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-xl shadow border border-gray-100">
        <div class="flex items-center">
          <div class="p-3 rounded-lg bg-yellow-100 text-yellow-600 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div>
            <p class="text-gray-500 text-sm">Resources</p>
            <p class="text-2xl font-bold">84</p>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-xl shadow border border-gray-100">
        <div class="flex items-center">
          <div class="p-3 rounded-lg bg-red-100 text-red-600 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p class="text-gray-500 text-sm">Pending</p>
            <p class="text-2xl font-bold">24</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Charts and Tables Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <!-- Recent Activity -->
      <div class="bg-white p-6 rounded-xl shadow border border-gray-100">
        <h2 class="text-xl font-semibold mb-4 text-gray-800">Recent Activity</h2>
        <ul class="space-y-4">
          <li class="flex items-start pb-4 border-b border-gray-100">
            <div class="p-2 rounded-full bg-blue-100 text-blue-600 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
              </svg>
            </div>
            <div>
              <p class="font-medium">New user registered</p>
              <p class="text-gray-600 text-sm">John Doe joined the system</p>
              <p class="text-gray-400 text-xs mt-1">2 minutes ago</p>
            </div>
          </li>
          <li class="flex items-start pb-4 border-b border-gray-100">
            <div class="p-2 rounded-full bg-green-100 text-green-600 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
              </svg>
            </div>
            <div>
              <p class="font-medium">New booking created</p>
              <p class="text-gray-600 text-sm">Meeting room booked by Jane Smith</p>
              <p class="text-gray-400 text-xs mt-1">15 minutes ago</p>
            </div>
          </li>
          <li class="flex items-start pb-4">
            <div class="p-2 rounded-full bg-yellow-100 text-yellow-600 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
              </svg>
            </div>
            <div>
              <p class="font-medium">Resource updated</p>
              <p class="text-gray-600 text-sm">Study room capacity increased</p>
              <p class="text-gray-400 text-xs mt-1">1 hour ago</p>
            </div>
          </li>
        </ul>
      </div>

      <!-- Quick Actions -->
      <div class="bg-white p-6 rounded-xl shadow border border-gray-100">
        <h2 class="text-xl font-semibold mb-4 text-gray-800">Quick Actions</h2>
        <div class="grid grid-cols-2 gap-4">
          <button class="flex flex-col items-center justify-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition border border-blue-100">
            <div class="p-3 rounded-full bg-blue-100 text-blue-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <span class="font-medium text-gray-700">Add User</span>
          </button>
          
          <button class="flex flex-col items-center justify-center p-4 bg-green-50 hover:bg-green-100 rounded-lg transition border border-green-100">
            <div class="p-3 rounded-full bg-green-100 text-green-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span class="font-medium text-gray-700">New Booking</span>
          </button>
          
          <button class="flex flex-col items-center justify-center p-4 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition border border-yellow-100">
            <div class="p-3 rounded-full bg-yellow-100 text-yellow-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <span class="font-medium text-gray-700">Manage Resources</span>
          </button>
          
          <button class="flex flex-col items-center justify-center p-4 bg-red-50 hover:bg-red-100 rounded-lg transition border border-red-100">
            <div class="p-3 rounded-full bg-red-100 text-red-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span class="font-medium text-gray-700">System Settings</span>
          </button>
        </div>

        <div class="mt-8">
          <h2 class="text-xl font-semibold mb-4 text-gray-800">Recent Bookings</h2>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead>
                <tr class="bg-gray-50">
                  <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                  <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resource</th>
                  <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-800">John Doe</td>
                  <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-600">Meeting Room A</td>
                  <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-600">Today, 10:00 AM</td>
                  <td class="px-4 py-3 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Confirmed</span>
                  </td>
                </tr>
                <tr>
                  <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-800">Jane Smith</td>
                  <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-600">Study Room B</td>
                  <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-600">Today, 2:00 PM</td>
                  <td class="px-4 py-3 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>
                  </td>
                </tr>
                <tr>
                  <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-800">Bob Johnson</td>
                  <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-600">Computer Lab</td>
                  <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-600">Tomorrow, 9:00 AM</td>
                  <td class="px-4 py-3 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Confirmed</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Dashboard logic here
</script>