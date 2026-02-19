<template>
  <div class="flex flex-col min-h-screen bg-gray-50">
    <AppHeader />

  
    <section class="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-center p-7 pt-24">
      <div class="max-w-5xl mx-auto">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Find <span class="text-red-600">Jobs</span>
        </h1>

        <p class="text-xl sm:text-2xl md:text-3xl text-gray-700 font-semibold mb-6">
          With <span class="text-red-600 font-black tracking-wide">PeopleCore</span> Solutions
        </p>

        <p class="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          PeopleCore is the only site you'll need to find your next job.
        </p>

        
        <div class="flex flex-col sm:flex-row gap-4 max-w-4xl mx-auto bg-white p-5 md:p-6 rounded-2xl shadow-xl border border-gray-200">
          
        <div class="relative flex-1 min-w-[200px]">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </div>

            <select
                v-model="selectedLocation"
                class="w-full pl-11 pr-10 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white appearance-none shadow-sm transition cursor-pointer hover:border-gray-400"
                :class="{ 'text-gray-900': selectedLocation, 'text-gray-500': !selectedLocation }"
            >
                <option value="">Location...</option>  <!-- No disabled/selected here -->

                <option value="Phnom Penh">Phnom Penh</option>
                <option value="Siem Reap">Siem Reap</option>
                <!-- ... other options ... -->
                <option value="All Cambodia">All Cambodia</option>
            </select>

            <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            </div>

          <!-- Search Input -->
          <div class="relative flex-[2]">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search by jobs or companies..."
              class="w-full pl-11 pr-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 placeholder-gray-400"
              @keyup.enter="handleSearch"
            />
          </div>

          <!-- Button -->
          <button
            @click="handleSearch"
            class="bg-red-600 hover:bg-red-700 text-white font-semibold py-3.5 px-10 rounded-lg transition shadow-md whitespace-nowrap text-base"
          >
            Search Jobs
          </button>
        </div>
      </div>
    </section>

   
<main class="flex-grow py-12 px-5 md:px-8 lg:px-12 bg-gray-100">
  <div class="max-w-7xl mx-auto">
    <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center md:text-left pl-3">
      Featured Jobs
    </h2>

    <!-- Carousel Container -->
    <div 
      class="relative overflow-hidden"
      @mouseenter="pauseAutoSlide = true"
      @mouseleave="pauseAutoSlide = false"
    >
      <!-- Slider Track -->
      <div 
        class="flex transition-transform duration-700 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }"
      >
        <div 
          v-for="(job, index) in jobs"
          :key="index"
          class="flex-shrink-0 px-3"
          :class="`w-1/${visibleCards}`"
        >
          <AppJobCard
            :title="job.title"
            :company="job.company || 'Company Name'"
            :location="job.location || 'Phnom Penh'"
            :salary="job.salary || '$400 – $1,200'"
            :image="job.image"
            :bg="job.bg"
          />
        </div>
      </div>

      <!-- Left Arrow -->
      <button 
        @click="prevSlide"
        class="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg z-10 transition opacity-70 hover:opacity-100 disabled:opacity-30"
        :disabled="currentIndex === 0"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <!-- Right Arrow -->
      <button 
        @click="nextSlide"
        class="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg z-10 transition opacity-70 hover:opacity-100 disabled:opacity-30"
        :disabled="currentIndex >= jobs.length - visibleCards"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Dots Indicators -->
      <div class="flex justify-center mt-6 space-x-3">
        <button
          v-for="n in Math.ceil(jobs.length / visibleCards)"
          :key="n"
          @click="currentIndex = (n - 1) * visibleCards"
          :class="[
            'w-3 h-3 rounded-full transition-all',
            currentIndex >= (n-1)*visibleCards && currentIndex < n*visibleCards 
              ? 'bg-red-600 scale-125' 
              : 'bg-gray-400 hover:bg-gray-600'
          ]"
        />
      </div>
    </div>
  </div>
</main>
  <section class="w-full bg-gray-200 py-6">
    <div class="max-w-7xl mx-auto px-6">
      
      <!-- Title -->
      <h2 class="text-3xl font-bold text-gray-900 mb-6">
        Top Employers
      </h2>

      <!-- Logo Slider Container -->
      <div class="relative">

        <!-- Logos Wrapper -->
        <div id="logoSlider"
          class="flex items-center gap-8 overflow-x-auto scroll-smooth no-scrollbar px-10">
          
          <!-- Logo Items -->
          <img src="../assets/c1.webp" class="h-16 object-contain shrink-0" />
          <img src="../assets/c2.webp" class="h-16 object-contain shrink-0" />
          <img src="../assets/c3.webp" class="h-16 object-contain shrink-0" />
          <img src="../assets/c4.webp" class="h-16 object-contain shrink-0" />
          <img src="../assets/c5.webp" class="h-16 object-contain shrink-0" />
          <img src="../assets/c6.webp" class="h-16 object-contain shrink-0" />
           <img src="../assets/c1.webp" class="h-16 object-contain shrink-0" />
          <img src="../assets/c2.webp" class="h-16 object-contain shrink-0" />
          <img src="../assets/c3.webp" class="h-16 object-contain shrink-0" />
          <img src="../assets/c4.webp" class="h-16 object-contain shrink-0" />
          <img src="../assets/c5.webp" class="h-16 object-contain shrink-0" />
          <img src="../assets/c6.webp" class="h-16 object-contain shrink-0" />
        </div>

      </div>
    </div>
  </section>

 <!-- Parent container - this creates 2 columns -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
  
  <!-- Job card 1 -->
  <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition">
    <div>
      <!-- Header -->
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold">
            {{ logo }}
          </div>
          <span class="text-gray-700 font-medium">{{ company }}</span>
        </div>
        <button class="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
          ♡
        </button>
      </div>

      <!-- Title -->
      <h2 class="mt-4 text-lg font-semibold text-gray-900">
        {{ title }} ({{ time }})
      </h2>

      <!-- Salary -->
      <p class="mt-1 text-gray-600">{{ salary }}</p>

      <!-- Details -->
      <div class="grid grid-cols-2 gap-x-6 gap-y-4 mt-5 text-sm text-gray-600">
        <div>
          <span class="block text-xs text-gray-400">Office</span>
          {{ office }}
        </div>
        <div>
          <span class="block text-xs text-gray-400">Location</span>
          {{ location }}
        </div>
        <div>
          <span class="block text-xs text-gray-400">Closing Date</span>
          {{ closingDate }}
        </div>
        <div>
          <span class="block text-xs text-gray-400">Employment</span>
          {{ employment }}
        </div>
      </div>
    </div>

    <button class="mt-6 w-full py-3 rounded-full border border-red-500 text-red-500 font-medium hover:bg-red-500 hover:text-white transition">
      View More
    </button>
  </div>

  <!-- Job card 2 - same structure, different data -->
  <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition">
    <div>
      <!-- Header -->
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold">
            {{ logo }}
          </div>
          <span class="text-gray-700 font-medium">{{ company }}</span>
        </div>
        <button class="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
          ♡
        </button>
      </div>

      <!-- Title -->
      <h2 class="mt-4 text-lg font-semibold text-gray-900">
        {{ title }} ({{ time }})
      </h2>

      <!-- Salary -->
      <p class="mt-1 text-gray-600">{{ salary }}</p>

      <!-- Details -->
      <div class="grid grid-cols-2 gap-x-6 gap-y-4 mt-5 text-sm text-gray-600">
        <div>
          <span class="block text-xs text-gray-400">Office</span>
          {{ office }}
        </div>
        <div>
          <span class="block text-xs text-gray-400">Location</span>
          {{ location }}
        </div>
        <div>
          <span class="block text-xs text-gray-400">Closing Date</span>
          {{ closingDate }}
        </div>
        <div>
          <span class="block text-xs text-gray-400">Employment</span>
          {{ employment }}
        </div>
      </div>
    </div>

    <button class="mt-6 w-full py-3 rounded-full border border-red-500 text-red-500 font-medium hover:bg-red-500 hover:text-white transition">
      View More
    </button>
  </div>

  <!-- Add more cards here - they will automatically go to next row after 2 items -->

</div>
<!-- Parent container - this creates 2 columns -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
  
  <!-- Job card 1 -->
  <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition">
    <div>
      <!-- Header -->
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold">
            {{ logo }}
          </div>
          <span class="text-gray-700 font-medium">{{ company }}</span>
        </div>
        <button class="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
          ♡
        </button>
      </div>

      <!-- Title -->
      <h2 class="mt-4 text-lg font-semibold text-gray-900">
        {{ title }} ({{ time }})
      </h2>

      <!-- Salary -->
      <p class="mt-1 text-gray-600">{{ salary }}</p>

      <!-- Details -->
      <div class="grid grid-cols-2 gap-x-6 gap-y-4 mt-5 text-sm text-gray-600">
        <div>
          <span class="block text-xs text-gray-400">Office</span>
          {{ office }}
        </div>
        <div>
          <span class="block text-xs text-gray-400">Location</span>
          {{ location }}
        </div>
        <div>
          <span class="block text-xs text-gray-400">Closing Date</span>
          {{ closingDate }}
        </div>
        <div>
          <span class="block text-xs text-gray-400">Employment</span>
          {{ employment }}
        </div>
      </div>
    </div>

    <button class="mt-6 w-full py-3 rounded-full border border-red-500 text-red-500 font-medium hover:bg-red-500 hover:text-white transition">
      View More
    </button>
  </div>

  <!-- Job card 2 - same structure, different data -->
  <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition">
    <div>
      <!-- Header -->
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold">
            {{ logo }}
          </div>
          <span class="text-gray-700 font-medium">{{ company }}</span>
        </div>
        <button class="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
          ♡
        </button>
      </div>

      <!-- Title -->
      <h2 class="mt-4 text-lg font-semibold text-gray-900">
        {{ title }} ({{ time }})
      </h2>

      <!-- Salary -->
      <p class="mt-1 text-gray-600">{{ salary }}</p>

      <!-- Details -->
      <div class="grid grid-cols-2 gap-x-6 gap-y-4 mt-5 text-sm text-gray-600">
        <div>
          <span class="block text-xs text-gray-400">Office</span>
          {{ office }}
        </div>
        <div>
          <span class="block text-xs text-gray-400">Location</span>
          {{ location }}
        </div>
        <div>
          <span class="block text-xs text-gray-400">Closing Date</span>
          {{ closingDate }}
        </div>
        <div>
          <span class="block text-xs text-gray-400">Employment</span>
          {{ employment }}
        </div>
      </div>
    </div>

    <button class="mt-6 w-full py-3 rounded-full border border-red-500 text-red-500 font-medium hover:bg-red-500 hover:text-white transition">
      View More
    </button>
  </div>

  <!-- Add more cards here - they will automatically go to next row after 2 items -->

</div>





<!-- ... AppFooter remains the same ... -->

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
// ... other imports remain ...

// Slider logic
const currentIndex = ref(0)
const pauseAutoSlide = ref(false)

// How many cards visible at once (responsive)
const visibleCards = computed(() => {
  if (window.innerWidth < 640) return 1     // mobile
  if (window.innerWidth < 1024) return 2    // tablet
  return 4                                  // desktop
})

const nextSlide = () => {
  if (currentIndex.value < jobs.value.length - visibleCards.value) {
    currentIndex.value += visibleCards.value
  } else {
    currentIndex.value = 0  // loop back to start
  }
}

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= visibleCards.value
  } else {
    currentIndex.value = Math.max(0, jobs.value.length - visibleCards.value)
  }
}

// Auto slide
let interval = null
const startAutoSlide = () => {
  interval = setInterval(() => {
    if (!pauseAutoSlide.value) {
      nextSlide()
    }
  }, 5000)  // change every 5 seconds
}

onMounted(() => {
  startAutoSlide()
  // Recalculate visibleCards on resize
  window.addEventListener('resize', () => {
    currentIndex.value = 0  // reset position on resize for simplicity
  })
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})

// Expanded jobs array (more featured jobs)
const jobs = ref([
  {
    title: "Senior Graphic Designer",
    company: "Creative Studio KH",
    location: "Phnom Penh",
    salary: "$800 – $1,500",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80",
    bg: "bg-red-500"
  },
  {
    title: "Sales Executive",
    company: "Real Estate Cambodia",
    location: "Phnom Penh & Siem Reap",
    salary: "$500 + commission",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    bg: "bg-red-600"
  },
  {
    title: "Cashier / Customer Service",
    company: "Lucky Market",
    location: "Phnom Penh",
    salary: "$350 – $600",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80",
    bg: "bg-blue-700"
  },
  {
    title: "Junior Web Developer",
    company: "TechNova Solutions",
    location: "Phnom Penh (Hybrid)",
    salary: "$600 – $1,200",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    bg: "bg-purple-600"
  },
  {
    title: "Marketing Specialist",
    company: "Digital KH Agency",
    location: "Siem Reap",
    salary: "$700 – $1,400",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    bg: "bg-pink-600"
  },
  {
    title: "Accountant",
    company: "Finance Pro Ltd",
    location: "Phnom Penh",
    salary: "$800 – $1,600",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxyR1Pzyb44AgoPCOjOUa0Xlplzon-w-chVA&s",
    bg: "bg-green-600"
  },
  {
    title: "Hotel Receptionist",
    company: "Riverside Boutique Hotel",
    location: "Siem Reap",
    salary: "$400 – $800",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    bg: "bg-yellow-600"
  },
  {
    title: "Content Creator",
    company: "Khmer Media Group",
    location: "Phnom Penh (Remote OK)",
    salary: "$500 – $1,000",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    bg: "bg-indigo-600"
  },
  // You can keep adding more...
])

  
=======
    <AppHeader />
  <main class="space-y-24 mt-40" >

    <!-- HERO -->
    <section class="pt-32 text-center bg-gray-50 bg-[url(https://i.ibb.co/whW1Dvcd/Group-3.png)] bg-cover bg-center">
      <h1 class="text-4xl font-bold text-gray-800">
        First AI Recruitment in Cambodia
      </h1>
      <p class="mt-4 text-lg text-gray-600">
        Find revenue generating talents with AI
      </p>

      <div class="mt-8 flex justify-center gap-4">
        <NuxtLink
          to="/register"
          class="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition"
        >
          Start Recruiting Now
        </NuxtLink>

        <NuxtLink
          to="/find-jobs"
          class="border border-red-600 text-red-600 px-6 py-3 rounded-xl hover:bg-red-50 transition"
        >
          Looking for Job?
        </NuxtLink>
      </div>

      <!-- optional hero image -->
      <div class="mt-10">
        <img src="" alt="" class="mx-auto max-w-xl"/>
      </div>
    </section>

    <!-- FEATURES -->
    <!-- PREMIUM FEATURES -->
<section class="bg-gray-100 pt-28 pb-20 relative overflow-hidden">
  <div class="max-w-7xl mx-auto px-6">

    <!-- TOP GRID -->
    <div class="grid md:grid-cols-2 gap-16 items-center">

      <!-- LEFT CONTENT -->
      <div>
        <p class="text-red-600 font-semibold mb-4">
          Premium features
        </p>

        <h2 class="text-4xl font-bold text-gray-900 leading-tight">
          Our premium features <br />
          only available in Mobile Application
        </h2>

        <!-- FEATURES LIST -->
        <div class="grid grid-cols-2 gap-6 mt-10 text-gray-800">

          <div class="flex items-center gap-3">
            <span class="text-red-600 text-xl">🔍</span>
            <p>Job Matching Review</p>
          </div>

          <div class="flex items-center gap-3">
            <span class="text-red-600 text-xl">📩</span>
            <p>One Click Apply Function</p>
          </div>

          <div class="flex items-center gap-3">
            <span class="text-red-600 text-xl">⚡</span>
            <p>Instant Update Feature</p>
          </div>

          <div class="flex items-center gap-3">
            <span class="text-red-600 text-xl">📄</span>
            <p>Online Job Offer Letter</p>
          </div>

          <div class="flex items-center gap-3">
            <span class="text-red-600 text-xl">🎥</span>
            <p>E-Interview</p>
          </div>

        </div>

        <!-- DOWNLOAD -->
        <div class="mt-10">
          <p class="text-red-600 font-semibold mb-4">
            Download Now
          </p>

          <div class="flex gap-4">
            <button class="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition shadow-md">
              🍎 App Store
            </button>

            <button class="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition shadow-md">
              ▶ Play Store
            </button>
          </div>
        </div>
      </div>

      <!-- RIGHT IMAGE SECTION -->
      <div class="relative flex justify-center">

        <!-- Back Phone -->
        <img
          src=""
          class="w-64 md:w-72 rotate-12 absolute right-10 top-10 drop-shadow-2xl"
        />

        <!-- Front Phone -->
        <img
          src=""
          class="w-64 md:w-72 -rotate-6 relative z-10 drop-shadow-2xl"
        />

      </div>
    </div>

    <!-- BOTTOM INFO BOX -->
    <div class="mt-20 bg-gray-200 rounded-3xl p-12 max-w-5xl">

      <p class="text-lg text-gray-800 leading-relaxed">
        Through WORKINGNA, job applicants can keep tracking on their
        job status and getting feedback directly from employers to
        shape themselves for better career interview and remarkable
        experience while having access to our online learning content.
      </p>

      <button class="mt-8 flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition shadow-md">
        ▶ Watch Demo
      </button>

    </div>

  </div>
</section>

    <!-- PROVIDES -->
  
<!-- TRUSTED BY -->
<section class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-6 text-center">

    <h2 class="text-3xl font-bold text-gray-800">
      Trusted By
    </h2>

    <p class="mt-3 text-gray-500">
      Over 200+ leading companies trust our recruitment platform
    </p>

    <div class="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 items-center">

      <div
        v-for="(logo, index) in logos"
        :key="index"
        class="flex justify-center group"
      >
        <img
          :src="logo"
          alt="Company Logo"
          class="h-12 object-contain grayscale opacity-60 
                 transition duration-300 
                 group-hover:grayscale-0 
                 group-hover:opacity-100 
                 group-hover:scale-110"
        />
      </div>

    </div>
  </div>
</section>
<!-- CONCERNING MATTERS SECTION -->
<section class="bg-gray-100 py-28">
  <div class="max-w-7xl mx-auto px-6">

    <!-- TITLE -->
    <h2 class="text-4xl font-bold text-center text-gray-900 mb-20">
      Which one is the most <br />
      concerning matters?
    </h2>

    <!-- CONTENT GRID -->
    <div class="grid md:grid-cols-2 gap-16 items-center">

      <!-- LEFT SIDE -->
      <div class="flex gap-10">

        <!-- Vertical Number Bar -->
        <div class="bg-[#0D3B53] text-white rounded-full px-8 py-10 flex flex-col justify-between items-center h-[420px]">
          <span class="text-2xl font-semibold">1</span>
          <span class="text-2xl font-semibold">2</span>
          <span class="text-2xl font-semibold">3</span>
          <span class="text-2xl font-semibold">4</span>
        </div>

        <!-- Text List -->
        <div class="flex flex-col justify-between h-[420px] text-lg text-gray-800 font-medium">

          <p>Unable to identify the real talents</p>

          <p>Repeated unsuccessful interview</p>

          <p>Mislead Hiring</p>

          <p>High Staff Turn Over Rate</p>

        </div>

      </div>

      <!-- RIGHT SIDE CARD -->
      <div class="bg-gray-200 rounded-3xl p-12 shadow-sm">

        <p class="text-gray-800 text-lg leading-relaxed">
          <strong>WORKINGNA</strong> is an end-to-end hiring platform designed
          for revenue-generating roles. Our platform streamlines the recruitment
          process by connecting employers with top talent, helping them find,
          hire, and onboard the right candidates efficiently.
        </p>

        <NuxtLink
          to="/register"
          class="mt-10 inline-block bg-red-600 text-white px-10 py-4 rounded-full hover:bg-red-700 transition duration-300 shadow-md"
        >
          Get Started
        </NuxtLink>

      </div>

    </div>
  </div>
</section>
<!-- OUR SERVICES SECTION -->
<section class="py-24 bg-white">
  <div class="max-w-7xl mx-auto px-6 text-center">

    <!-- SECTION TITLE -->
    <h2 class="text-4xl font-bold text-gray-900">
      Our Services
    </h2>

    <p class="text-gray-600 mt-3 mb-10">
      What we provide to help employers build a stronger workforce
    </p>

    <!-- SERVICES GRID -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      <!-- CARD 1 -->
      <div class="bg-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition">
        <div class="text-red-600 text-4xl mb-4">👥</div>
        <h3 class="text-xl font-semibold text-gray-800">
          Wide Range of Candidate Pool
        </h3>
        <p class="text-gray-600 mt-2">
          Access a diverse and qualified candidate pool to hire the best talent quickly.
        </p>
      </div>

      <!-- CARD 2 -->
      <div class="bg-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition">
        <div class="text-red-600 text-4xl mb-4">⚙️</div>
        <h3 class="text-xl font-semibold text-gray-800">
          Automated Shortlisting
        </h3>
        <p class="text-gray-600 mt-2">
          Let the platform intelligently shortlist the most suitable candidates for you.
        </p>
      </div>

      <!-- CARD 3 -->
      <div class="bg-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition">
        <div class="text-red-600 text-4xl mb-4">📊</div>
        <h3 class="text-xl font-semibold text-gray-800">
          Data Analytic Assessment Tool
        </h3>
        <p class="text-gray-600 mt-2">
          Get insights and analytics to improve hiring efficiency and outcomes.
        </p>
      </div>

      <!-- CARD 4 -->
      <div class="bg-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition">
        <div class="text-red-600 text-4xl mb-4">💻</div>
        <h3 class="text-xl font-semibold text-gray-800">
          E-Interview Platform
        </h3>
        <p class="text-gray-600 mt-2">
          Conduct interviews online with powerful tools built right into the platform.
        </p>
      </div>

    </div>
  </div>
</section>
<!-- HOW IT WORKS SECTION -->
<section class="py-28 bg-gray-50">
  <div class="max-w-7xl mx-auto px-6 text-center">

    <!-- SECTION TITLE -->
    <h2 class="text-4xl font-bold text-gray-900">
      How It Works?
    </h2>
    <p class="text-gray-600 mt-4 mb-16">
      A simple and efficient hiring process designed for employers
    </p>

    <!-- STEPS -->
    <div class="relative">

      <!-- Horizontal Line (Desktop Only) -->
      <div class="hidden md:block absolute top-10 left-0 right-0 h-1 bg-gray-200"></div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 relative">

        <!-- STEP 1 -->
        <div class="flex flex-col items-center text-center relative">
          <div class="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg z-10">
            1
          </div>
          <h3 class="mt-6 text-xl font-semibold text-gray-800">
            Post a Job
          </h3>
          <p class="mt-3 text-gray-600">
            Create and publish your job listing in just a few minutes.
          </p>
        </div>

        <!-- STEP 2 -->
        <div class="flex flex-col items-center text-center relative">
          <div class="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg z-10">
            2
          </div>
          <h3 class="mt-6 text-xl font-semibold text-gray-800">
            AI Shortlisting
          </h3>
          <p class="mt-3 text-gray-600">
            Our platform analyzes and ranks candidates automatically.
          </p>
        </div>

        <!-- STEP 3 -->
        <div class="flex flex-col items-center text-center relative">
          <div class="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg z-10">
            3
          </div>
          <h3 class="mt-6 text-xl font-semibold text-gray-800">
            Conduct E-Interview
          </h3>
          <p class="mt-3 text-gray-600">
            Interview candidates directly through the built-in platform.
          </p>
        </div>

        <!-- STEP 4 -->
        <div class="flex flex-col items-center text-center relative">
          <div class="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg z-10">
            4
          </div>
          <h3 class="mt-6 text-xl font-semibold text-gray-800">
            Hire & Onboard
          </h3>
          <p class="mt-3 text-gray-600">
            Select the best candidate and complete onboarding smoothly.
          </p>
        </div>

      </div>
    </div>

  </div>
</section>


<!-- TESTIMONIAL SECTION -->
<section class="py-28 bg-gray-50">
  <div class="max-w-7xl mx-auto px-6">

    <!-- Header -->
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-gray-900">
        What Our Clients Say
      </h2>
      <p class="text-gray-600 mt-4">
        Real feedback from companies using our hiring platform
      </p>
    </div>

    <!-- Testimonials Grid -->
    <div class="grid md:grid-cols-3 gap-8 items-stretch">

      <!-- Left Card -->
      <div class="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition duration-300">
        <p class="text-gray-600 mb-6">
          “The automated shortlisting feature helped us filter 
          high-quality candidates instantly. It improved our 
          hiring efficiency significantly.”
        </p>

        <div class="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/100?img=12"
            class="w-14 h-14 rounded-full object-cover"
            alt="client"
          />
          <div>
            <h4 class="font-semibold text-gray-800">
              Amanda Lee
            </h4>
            <span class="text-sm text-gray-500">
              HR Manager
            </span>
          </div>
        </div>
      </div>

      <!-- Center Featured Card -->
      <div class="bg-red-600 text-white p-10 rounded-3xl shadow-xl transform md:-translate-y-6">
        <div class="text-5xl font-bold mb-6 opacity-20">
          "
        </div>

        <p class="text-lg leading-relaxed mb-8">
          Workingna completely transformed our recruitment process. 
          From job posting to interview scheduling, everything is 
          seamless and data-driven. We reduced hiring time by 40%.
        </p>

        <div class="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/100?img=32"
            class="w-16 h-16 rounded-full object-cover border-4 border-white"
            alt="client"
          />
          <div>
            <h4 class="font-semibold">
              Daniel Wong
            </h4>
            <span class="text-sm opacity-80">
              CEO, Tech Solutions
            </span>
          </div>
        </div>
      </div>

      <!-- Right Card -->
      <div class="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition duration-300">
        <p class="text-gray-600 mb-6">
          “The e-interview platform saved us hours of coordination. 
          Everything is centralized, fast, and easy to use.”
        </p>

        <div class="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/100?img=18"
            class="w-14 h-14 rounded-full object-cover"
            alt="client"
          />
          <div>
            <h4 class="font-semibold text-gray-800">
              Sarah Lim
            </h4>
            <span class="text-sm text-gray-500">
              Talent Acquisition Lead
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
<!-- POPULAR CAREERS SECTION -->
<section class="py-28 bg-white">
  <div class="max-w-7xl mx-auto px-6 text-center">

    <!-- Headline -->
    <h2 class="text-4xl font-bold text-gray-900">
      Looking for job?
    </h2>

    <p class="text-gray-600 mt-3 mb-12">
      Popular professional careers and skills for you
    </p>

    <!-- Careers Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

      <!-- CAREER CARD 1 -->
      <div class="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition duration-300">
        <div class="text-red-600 text-4xl mb-4">💼</div>
        <h3 class="text-xl font-semibold text-gray-800">
          Software Developer
        </h3>
        <p class="text-gray-600 mt-2">
          Develop software applications and solutions for clients.
        </p>
        <NuxtLink
          to="/find-jobs?category=software-developer"
          class="mt-4 inline-block text-red-600 font-semibold hover:underline"
        >
          View Jobs →
        </NuxtLink>
      </div>

      <!-- CAREER CARD 2 -->
      <div class="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition duration-300">
        <div class="text-red-600 text-4xl mb-4">📊</div>
        <h3 class="text-xl font-semibold text-gray-800">Data Analyst</h3>
        <p class="text-gray-600 mt-2">
          Analyze data to discover trends and insights.
        </p>
        <NuxtLink
          to="/find-jobs?category=data-analyst"
          class="mt-4 inline-block text-red-600 font-semibold hover:underline"
        >
          View Jobs →
        </NuxtLink>
      </div>

      <!-- CAREER CARD 3 -->
      <div class="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition duration-300">
        <div class="text-red-600 text-4xl mb-4">🧑‍💼</div>
        <h3 class="text-xl font-semibold text-gray-800">HR Specialist</h3>
        <p class="text-gray-600 mt-2">
          Manage hiring and employee relations.
        </p>
        <NuxtLink
          to="/find-jobs?category=hr-specialist"
          class="mt-4 inline-block text-red-600 font-semibold hover:underline"
        >
          View Jobs →
        </NuxtLink>
      </div>

      <!-- CAREER CARD 4 -->
      <div class="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition duration-300">
        <div class="text-red-600 text-4xl mb-4">🎨</div>
        <h3 class="text-xl font-semibold text-gray-800">Graphic Designer</h3>
        <p class="text-gray-600 mt-2">
          Create visual content and design assets.
        </p>
        <NuxtLink
          to="/find-jobs?category=graphic-designer"
          class="mt-4 inline-block text-red-600 font-semibold hover:underline"
        >
          View Jobs →
        </NuxtLink>
      </div>

      <!-- CAREER CARD 5 -->
      <div class="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition duration-300">
        <div class="text-red-600 text-4xl mb-4">🛠️</div>
        <h3 class="text-xl font-semibold text-gray-800">Mechanical Engineer</h3>
        <p class="text-gray-600 mt-2">
          Design and improve mechanical systems.
        </p>
        <NuxtLink
          to="/find-jobs?category=mechanical-engineer"
          class="mt-4 inline-block text-red-600 font-semibold hover:underline"
        >
          View Jobs →
        </NuxtLink>
      </div>

      <!-- CAREER CARD 6 -->
      <div class="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition duration-300">
        <div class="text-red-600 text-4xl mb-4">🧪</div>
        <h3 class="text-xl font-semibold text-gray-800">Lab Technician</h3>
        <p class="text-gray-600 mt-2">
          Perform lab tests and assist research.
        </p>
        <NuxtLink
          to="/find-jobs?category=lab-technician"
          class="mt-4 inline-block text-red-600 font-semibold hover:underline"
        >
          View Jobs →
        </NuxtLink>
      </div>

    </div>
  </div>
</section>


    <!-- CONTACT FORM -->
    <section class="bg-red-50 py-16">
      <div class="container mx-auto max-w-xl text-center">
        <h2 class="text-3xl font-semibold">Reach out to us</h2>
        <form class="mt-6 space-y-4">
          <input placeholder="Your Name" class="w-full border p-3 rounded-lg"/>
          <input placeholder="Your Email Address" class="w-full border p-3 rounded-lg"/>
          <input placeholder="Phone Number" class="w-full border p-3 rounded-lg"/>
          <textarea placeholder="What would you like to discuss?" class="w-full border p-3 rounded-lg"></textarea>
          <button class="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
            Submit Notice
          </button>
        </form>
      </div>
    </section>

  </main>
  <AppFooter />
</template>

<script setup>
// (Optional) import your component cards
const logos = [
  'https://workingna.com/_next/image?url=https%3A%2F%2Fworkingna-files.s3.ap-southeast-1.amazonaws.com%2F1657687064198-photo_2022-07-13_11-36-20.jpg&w=256&q=75',
  'https://workingna.com/_next/image?url=https%3A%2F%2Fworkingna-files.s3.ap-southeast-1.amazonaws.com%2F1766555069311-blob&w=256&q=75',
  'https://workingna.com/_next/image?url=https%3A%2F%2Fworkingna-files.s3.ap-southeast-1.amazonaws.com%2F1715248737200-blob&w=256&q=75',
  'https://workingna.com/_next/image?url=https%3A%2F%2Fworkingna-files.s3.ap-southeast-1.amazonaws.com%2F1752225066289-blob&w=256&q=75',
  'https://workingna.com/_next/image?url=https%3A%2F%2Fworkingna-files.s3.ap-southeast-1.amazonaws.com%2F1770530444345-blob&w=256&q=75',
  'https://workingna.com/_next/image?url=https%3A%2F%2Fworkingna-files.s3.ap-southeast-1.amazonaws.com%2F1770272114152-blob&w=256&q=75',
    'https://workingna.com/_next/image?url=https%3A%2F%2Fworkingna-files.s3.ap-southeast-1.amazonaws.com%2F1657687064198-photo_2022-07-13_11-36-20.jpg&w=256&q=75',
  'https://workingna.com/_next/image?url=https%3A%2F%2Fworkingna-files.s3.ap-southeast-1.amazonaws.com%2F1766555069311-blob&w=256&q=75',
  'https://workingna.com/_next/image?url=https%3A%2F%2Fworkingna-files.s3.ap-southeast-1.amazonaws.com%2F1715248737200-blob&w=256&q=75',
  'https://workingna.com/_next/image?url=https%3A%2F%2Fworkingna-files.s3.ap-southeast-1.amazonaws.com%2F1752225066289-blob&w=256&q=75',
  'https://workingna.com/_next/image?url=https%3A%2F%2Fworkingna-files.s3.ap-southeast-1.amazonaws.com%2F1770530444345-blob&w=256&q=75',
  'https://workingna.com/_next/image?url=https%3A%2F%2Fworkingna-files.s3.ap-southeast-1.amazonaws.com%2F1770272114152-blob&w=256&q=75',
    'https://workingna.com/_next/image?url=https%3A%2F%2Fworkingna-files.s3.ap-southeast-1.amazonaws.com%2F1657687064198-photo_2022-07-13_11-36-20.jpg&w=256&q=75',
  'https://workingna.com/_next/image?url=https%3A%2F%2Fworkingna-files.s3.ap-southeast-1.amazonaws.com%2F1766555069311-blob&w=256&q=75',
  'https://workingna.com/_next/image?url=https%3A%2F%2Fworkingna-files.s3.ap-southeast-1.amazonaws.com%2F1715248737200-blob&w=256&q=75',
  'https://workingna.com/_next/image?url=https%3A%2F%2Fworkingna-files.s3.ap-southeast-1.amazonaws.com%2F1752225066289-blob&w=256&q=75',
  'https://workingna.com/_next/image?url=https%3A%2F%2Fworkingna-files.s3.ap-southeast-1.amazonaws.com%2F1770530444345-blob&w=256&q=75',
  'https://workingna.com/_next/image?url=https%3A%2F%2Fworkingna-files.s3.ap-southeast-1.amazonaws.com%2F1770272114152-blob&w=256&q=75',
    'https://workingna.com/_next/image?url=https%3A%2F%2Fworkingna-files.s3.ap-southeast-1.amazonaws.com%2F1657687064198-photo_2022-07-13_11-36-20.jpg&w=256&q=75',
  'https://workingna.com/_next/image?url=https%3A%2F%2Fworkingna-files.s3.ap-southeast-1.amazonaws.com%2F1766555069311-blob&w=256&q=75',
  'https://workingna.com/_next/image?url=https%3A%2F%2Fworkingna-files.s3.ap-southeast-1.amazonaws.com%2F1715248737200-blob&w=256&q=75',
  'https://workingna.com/_next/image?url=https%3A%2F%2Fworkingna-files.s3.ap-southeast-1.amazonaws.com%2F1752225066289-blob&w=256&q=75',
  'https://workingna.com/_next/image?url=https%3A%2F%2Fworkingna-files.s3.ap-southeast-1.amazonaws.com%2F1770530444345-blob&w=256&q=75',
  'https://workingna.com/_next/image?url=https%3A%2F%2Fworkingna-files.s3.ap-southeast-1.amazonaws.com%2F1770272114152-blob&w=256&q=75',
]

</script>
