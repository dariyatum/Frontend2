<script setup>
import { ref } from 'vue'

const form = ref({
  companyName: '',
  contactPerson: '',
  email: '',
  phone: '',
  companySize: '',
  industry: ''
})

const submitForm = () => {
  console.log('Businessman Data:', form.value)
  alert('Company Registration Submitted!')
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-6 mt-15">
    <div class="bg-white shadow-2xl rounded-2xl w-full max-w-6xl overflow-hidden grid md:grid-cols-2">

      <!-- LEFT SIDE (FORM) -->
      <div class="p-10">
        <h1 class="text-3xl font-bold text-red-600 mb-2">
          Register Your Company
        </h1>
        <p class="text-gray-500 mb-8">
          Connect with top talent and grow your business with PeopleCore.
        </p>

        <form @submit.prevent="submitForm" class="space-y-5">

          <div>
            <label class="block mb-1 font-medium">Company Name</label>
            <input 
              v-model="form.companyName"
              type="text"
              class="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              required
            />
          </div>

          <div>
            <label class="block mb-1 font-medium">Contact Person</label>
            <input 
              v-model="form.contactPerson"
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
            <label class="block mb-1 font-medium">Company Size</label>
            <select 
              v-model="form.companySize"
              class="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            >
              <option value="">Select Size</option>
              <option>1-10 Employees</option>
              <option>11-50 Employees</option>
              <option>51-200 Employees</option>
              <option>200+ Employees</option>
            </select>
          </div>

          <div>
            <label class="block mb-1 font-medium">Industry</label>
            <input 
              v-model="form.industry"
              type="text"
              class="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              placeholder="e.g. Technology, Finance, Healthcare"
            />
          </div>

          <button 
            type="submit"
            class="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 hover:scale-[1.02] transition duration-300"
          >
            Register Company
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
          Why Post Jobs With PeopleCore?
        </h2>

        <ul class="space-y-4 text-lg">
          <li>_ Access to qualified candidates</li>
          <li>_next Smart filtering system</li>
          <li>_ Faster hiring process</li>
          <li>_ Nationwide talent pool</li>
          <li>_ Secure recruitment platform</li>
        </ul>

        <div class="mt-10">
          <p class="text-sm opacity-80">
            Find the right people. Build the right team. Grow your company.
          </p>
        </div>
      </div>

    </div>
  </div>
</template>
