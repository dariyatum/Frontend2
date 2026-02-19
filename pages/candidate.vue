<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <h1 class="text-3xl font-bold mb-6">Candidate Dashboard</h1>

    <p class="text-gray-700 mb-4">
      Welcome, {{ user.name }}! Here you can:
    </p>

    <ul class="list-disc ml-6 space-y-2 text-gray-700">
      <li>View and apply for jobs</li>
      <li>Upload your CV</li>
      <li>Mark companies as favorites</li>
      <li>Track your interview schedules</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const user = ref(null)

onMounted(() => {
  const storedUser = JSON.parse(localStorage.getItem('currentUser'))
  if (!storedUser) {
    router.push('/register') // redirect if not logged in
  } else if (storedUser.userType !== 'candidate') {
    router.push('/businessman') // redirect businessman trying to access candidate page
  } else {
    user.value = storedUser
  }
})
</script>
