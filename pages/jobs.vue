<script setup>
import { jobs } from "@/data/mockData"
</script>

<template>
  <div class="container mx-auto py-16">
    <h1 class="text-3xl font-bold mb-8">Available Jobs</h1>

    <div class="grid md:grid-cols-2 gap-6">
      <div v-for="job in jobs" :key="job.id"
        class="bg-white p-6 rounded-xl shadow">

        <h2 class="text-xl font-semibold">{{ job.title }}</h2>
        <p class="text-gray-600">{{ job.company }}</p>
        <p class="text-gray-500 text-sm">{{ job.location }}</p>
        <p class="text-red-600 font-semibold mt-2">
          {{ job.salary }}
        </p>

        <NuxtLink
          :to="`/jobs/${job.id}`"
          class="inline-block mt-4 text-red-600 font-medium">
          View Details →
        </NuxtLink>

      </div>
    </div>
  </div>
</template>
