import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
<template>
<AppHeader />
  <div class="bg-gray-100 min-h-screen py-12 px-6">
    <input type="search" placeholder="Search for jobs..." class="w-full max-w-md mx-auto mb-8 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500" />

    <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

      <AppJobCard
        v-for="(job, index) in jobs"
        :key="index"
        :title="job.title"
        :image="job.image"
        :bg="job.bg"
      />

    </div>

  </div>
<AppFooter />
</template>

<script setup>
import AppJobCard from '@/components/AppJobCard.vue'

const jobs = [
  {
    title: "Senior Graphic Designer",
    image: "https://images.unsplash.com/photo-1581291519195-ef11498d1cf5",
    bg: "bg-red-500"
  },
  {
    title: "Sale Executive",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    bg: "bg-red-600"
  },
  {
    title: "Cashier",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    bg: "bg-gray-700"
  }
]
</script>