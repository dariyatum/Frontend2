<template>
  <footer class="bg-white text-gray-700 border-t border-gray-200">

    <!-- Main Section -->
    <div class="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

      <!-- About -->
      <div>
        <h3 class="text-lg font-semibold mb-4 text-red-500">
          About PeopleCore
        </h3>
        <p class="text-sm leading-relaxed text-gray-600">
          PeopleCore connects companies with top talent using smart,
          data-driven recruitment solutions. We help businesses hire faster
          and candidates find the right opportunities.
        </p>
      </div>

      <!-- Opportunity -->
      <div>
        <h3 class="text-lg font-semibold mb-4 text-red-500">
          Opportunity
        </h3>
        <ul class="space-y-2 text-sm">
          <li><NuxtLink to="/" class="hover:text-red-500">Browse All Jobs</NuxtLink></li>
          <li><NuxtLink to="/job-categories" class="hover:text-red-500">Job Categories</NuxtLink></li>
          <li><NuxtLink to="/build-profile" class="hover:text-red-500">Build a Profile</NuxtLink></li>
        </ul>
      </div>

      <!-- community -->
      <div>
        <h3 class="text-lg font-semibold mb-4 text-red-500">
          Community
        </h3>
        <ul class="space-y-2 text-sm">
          <li><NuxtLink to="/community=blog" class="hover:text-red-500">Blog</NuxtLink></li>
          <li><NuxtLink to="/community=events" class="hover:text-red-500">Events</NuxtLink></li>
          <li><NuxtLink to="/community=support" class="hover:text-red-500">Help & Support</NuxtLink></li>
          </ul>
      </div>

      <!-- Newsletter -->
      <div>
        <h3 class="text-lg font-semibold mb-4 text-red-500">
          Subscribe
        </h3>
        <p class="text-sm text-gray-600 mb-4">
          Get the latest jobs and updates.
        </p>

        <div class="flex">
          <input
            type="email"
            placeholder="Your Email Address"
            class="w-full px-5 py-2 border border-gray-300 rounded-l-lg focus:outline-none text-sm"
          />
          <button
            class="bg-red-500 text-white px-6 py-2 rounded-r-lg hover:bg-red-600 transition text-sm"
          >
            Subscribe
          </button>
        </div>
      </div>

    </div>

    <!-- Bottom Section -->
    <div class="border-t border-gray-200">
      <div class="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

        <!-- Left -->
        <div>
          © {{ new Date().getFullYear() }}PeopleCore Ltd. All rights reserved.
        </div>

        <!-- Right -->
        <div class="flex gap-6 mt-4 md:mt-0">
          <NuxtLink to="/privacy" class="hover:text-red-500">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms" class="hover:text-red-500">Terms of Service</NuxtLink>
        </div>

      </div>
    </div>

  </footer>
</template>