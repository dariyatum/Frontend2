<template>



  <div class="min-h-screen flex items-center justify-center bg-gray-100 mt-10">
    <div class="bg-white rounded-2xl shadow-xl w-full max-w-6xl flex overflow-hidden">
      
      <!-- Left Side: Welcome / Description -->
      <div class="hidden md:flex flex-col justify-center bg-red-600 text-white p-10 md:w-1/2 lg:w-2/5">
        <h1 class="text-4xl font-bold mb-4">Welcome to PeopleCore</h1>
        <p class="text-lg">
          Join our platform to find your dream job as a Candidate, or hire top talent as a Businessman.
          Apply quickly, manage your applications, and schedule interviews online — all in one place.
        </p>
      </div>

      <!-- Right Side: Registration Form -->
      <div class="w-full md:w-1/2 lg:w-3/5 p-8 sm:p-10">
        <h2 class="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">
          Create Account
        </h2>

        <form @submit.prevent="handleRegister" class="space-y-4">
          <input
            v-model="name"
            type="text"
            placeholder="Full Name"
            class="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
            v-model="password"
            type="password"
            placeholder="Password"
            class="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <!-- User type selection -->
          <div class="w-full border border-gray-300 p-3 rounded-lg focus-within:ring-2 focus-within:ring-red-500">
            <label class="block mb-1 text-gray-700 font-medium">I am a:</label>
            <select v-model="userType" class="w-full outline-none">
              <option value="" disabled>Select type</option>
              <option value="candidate">Candidate</option>
              <option value="businessman">Businessman</option>
            </select>
          </div>

          <button
            type="submit"
            class="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition shadow-md hover:shadow-lg"
          >
            Register
          </button>
        </form>

        <p class="mt-6 text-center text-sm text-gray-600">
          Already have an account?
          <NuxtLink
            to="/login"
            class="text-red-600 font-medium hover:underline"
          >
            Login
          </NuxtLink>
        </p>
      </div>

    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import App from '~/app.vue'

const router = useRouter()
const { register } = useAuth()

const name = ref('')
const email = ref('')
const password = ref('')
const userType = ref('')

const handleRegister = () => {
  if (!userType.value) {
    alert('Please select your user type.')
    return
  }

  register(name.value, email.value, password.value, userType.value)

  // Redirect based on user type
  if (userType.value === 'candidate') {
    router.push('/')
  } else {
    router.push('/')
  }
}
</script>
