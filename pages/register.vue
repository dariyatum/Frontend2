<template>
  <AppHeader />
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">
        Create Account
      </h2>

      <form @submit.prevent="handleRegister" class="space-y-4">
        <input
          v-model="name"
          type="text"
          placeholder="Full Name"
          class="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <button
          type="submit"
          class="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
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
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const { register } = useAuth()

const name = ref('')
const email = ref('')
const password = ref('')

const handleRegister = () => {
  const success = register(name.value, email.value, password.value)

  if (success) {
    router.push('/')
  }
}

</script>
