<template>
  

  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white rounded-2xl shadow-xl w-full max-w-6xl flex overflow-hidden">

      <!-- Left Side: Welcome / Description -->
      <div class="hidden md:flex flex-col justify-center bg-red-600 text-white p-10 md:w-1/2 lg:w-2/5">
        <h1 class="text-4xl font-bold mb-4">Welcome Back!</h1>
        <p class="text-lg">
          Login to your account to manage your applications as a Candidate or post jobs as a Businessman. Quick and easy access to your dashboard!
        </p>
      </div>

      <!-- Right Side: Login Form -->
      <div class="w-full md:w-1/2 lg:w-3/5 p-8 sm:p-10">
        <h2 class="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">
          Login
        </h2>

        <form @submit.prevent="handleLogin" class="space-y-4">
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

          <button
            type="submit"
            class="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition shadow-md hover:shadow-lg"
          >
            Login
          </button>
        </form>

        <p class="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?
          <NuxtLink
            to="/register"
            class="text-red-600 font-medium hover:underline"
          >
            Register
          </NuxtLink>
        </p>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

const handleLogin = () => {
  const storedUser = JSON.parse(localStorage.getItem('currentUser'))

  if (!storedUser) {
    alert('No account found. Please register first.')
    return
  }

  if (email.value === storedUser.email && password.value === storedUser.password) {
    // Save role in localStorage for dashboard usage
    localStorage.setItem('role', storedUser.userType)
    
    // Redirect based on userType
    if (storedUser.userType === 'candidate') {
      router.push('/candidate')
    } else {
      router.push('/businessman')
    }
  } else {
    alert('Invalid email or password')
  }
}
</script>
