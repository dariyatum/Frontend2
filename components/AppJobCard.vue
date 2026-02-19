<template>
  <div
    class="relative rounded-2xl overflow-hidden shadow-lg p-6"
    :class="bg"
  >
    <div class="flex items-center justify-between">
      
      <div>
        <p class="text-white text-sm font-medium mb-2">We Are</p>
        <h2 class="text-white text-2xl font-bold mb-4">HIRING!</h2>

        <span
          class="bg-white text-red-600 font-semibold px-4 py-2 rounded-full"
        >
          {{ title }}
        </span>
      </div>

      <div class="w-28 h-28 rounded-full overflow-hidden border-4 border-white">
        <img
          :src="image"
          :alt="title"
          class="w-full h-full object-cover"
        />
      </div>

    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  image: String,
  bg: {
    type: String,
    default: "bg-red-500"
  }
})
</script>