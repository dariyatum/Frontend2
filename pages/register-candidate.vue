<script setup>
import { ref } from 'vue'

const form = ref({
  fullName: '',
  email: '',
  phone: '',
  position: '',
  experience: ''
})

const submitForm = () => {
  // Save user into localStorage
  localStorage.setItem(
    'currentUser',
    JSON.stringify({
      name: form.value.fullName,
      role: 'candidate'
    })
  )

  // Redirect to home (navbar will now show user)
  navigateTo('/')
}
</script>


<template>

  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-6 mt-15">
    <div class="bg-white shadow-2xl rounded-2xl w-full max-w-6xl overflow-hidden grid md:grid-cols-2">

      <!-- LEFT SIDE (FORM) -->
      <div class="p-10">
        <h1 class="text-3xl font-bold text-red-600 mb-2">
          Apply as a Candidate
        </h1>
        <p class="text-gray-500 mb-8">
          Fill in your details and start your career journey with PeopleCore.
        </p>

        <form @submit.prevent="submitForm" class="space-y-5">

          <div>
            <label class="block mb-1 font-medium">Full Name</label>
            <input 
              v-model="form.fullName"
              type="text"
              class="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              required
            />
          </div>

          <div>
            <label class="block mb-1 font-medium">Email</label>
            <input 
              v-model="form.email"
              type="email"
              class="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              required
            />
          </div>

          <div>
            <label class="block mb-1 font-medium">Phone</label>
            <input 
              v-model="form.phone"
              type="tel"
              class="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />
          </div>

          <div>
            <label class="block mb-1 font-medium">Position</label>
            <input 
              v-model="form.position"
              type="text"
              class="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              required
            />
          </div>

          <div>
            <label class="block mb-1 font-medium">Experience</label>
            <select 
              v-model="form.experience"
              class="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            >
              <option value="">Select Experience</option>
              <option>0-1 Years</option>
              <option>2-3 Years</option>
              <option>4-5 Years</option>
              <option>5+ Years</option>
            </select>
          </div>

          <button 
            type="submit"
            class="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 hover:scale-[1.02] transition duration-300"
          >
            Submit Application
          </button>
<p class="text-sm text-gray-600 mt-4 text-center">
  Already have an account?
  <NuxtLink to="/login" class="text-red-600 font-semibold hover:underline">
    Login here
  </NuxtLink>
</p>

        </form>
      </div>

      <!-- RIGHT SIDE (INFO PANEL) -->
      <div class="bg-red-600 text-white p-10 flex flex-col justify-center">
        <h2 class="text-3xl font-bold mb-6">
          Why Join PeopleCore?
        </h2>

        <ul class="space-y-4 text-lg">
          <li>_ Access to top companies</li>
          <li>_ Fast & easy job application</li>
          <li>_ Remote & on-site opportunities</li>
          <li>_ Professional career growth</li>
          <li>_ Secure & trusted HR platform</li>
        </ul>

        <div class="mt-10">
          <p class="text-sm opacity-80">
            Your future career starts here. Take the first step today.
          </p>
        </div>
      </div>

    </div>
  </div>
</template>
