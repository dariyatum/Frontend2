<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <h1 class="text-3xl font-bold mb-6">Businessman Dashboard</h1>

    <p class="text-gray-700 mb-4">
      Welcome,! Here you can:
    </p>

    <ul class="list-disc ml-6 space-y-2 text-gray-700">
      <li>Post new job openings</li>
      <li>View candidate applications</li>
      <li>Schedule online interviews</li>
      <li>Manage company profile</li>
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
  } else if (storedUser.userType !== 'businessman') {
    router.push('/') // redirect candidate trying to access businessman page
  } else {
    user.value = storedUser
  }
})
</script>
