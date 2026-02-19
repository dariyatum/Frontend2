<template>

      <!-- START: Candidate/Businessman Popup -->
  <div v-if="showRoleSelection" class="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
    <div class="bg-white rounded-2xl p-10 w-96 text-center space-y-6">
      <h2 class="text-2xl font-bold">I am a</h2>
      <div class="flex gap-4 justify-center mt-4">
        <button
          @click="selectRole('candidate')"
          class="bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700 transition"
        >
          Candidate
        </button>
        <button
          @click="selectRole('businessman')"
          class="bg-gray-200 px-6 py-2 rounded-xl hover:bg-gray-300 transition"
        >
          Businessman
        </button>
      </div>
    </div>
  </div>
  <!-- END: Candidate/Businessman Popup -->
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

      <!-- Job Matching Review -->
      <div class="flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.8">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M21 21l-4.3-4.3m1.8-5.2a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <p>Job Matching Review</p>
      </div>

      <!-- One Click Apply Function -->
      <div class="flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.8">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
        </svg>
        <p>One Click Apply Function</p>
      </div>

      <!-- Instant Update Feature -->
      <div class="flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.8">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M13 3v10h8M3 12a9 9 0 1018 0 9 9 0 00-18 0z" />
        </svg>
        <p>Instant Update Feature</p>
      </div>

      <!-- Online Job Offer Letter -->
      <div class="flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.8">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M9 12h6m-6 4h6M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z" />
        </svg>
        <p>Online Job Offer Letter</p>
      </div>

      <!-- E-Interview -->
      <div class="flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.8">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14m-6 4h6a2 2 0 002-2V8a2 2 0 00-2-2H9a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        <p>E-Interview</p>
      </div>

    </div>

    <!-- DOWNLOAD -->
<!-- DOWNLOAD -->
<div class="mt-10">
  <p class="text-red-600 font-semibold mb-4">
    Download Now
  </p>

  <div class="flex gap-4">

    <!-- App Store Button -->
    <button class="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition shadow-md">

      <!-- Apple SVG -->
      <svg xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        viewBox="0 0 24 24"
        fill="currentColor">
        <path d="M16.365 1.43c0 1.14-.93 2.06-2.07 2.06-.06-1.09.88-2.06 2.07-2.06zM21.45 17.03c-.42.97-.62 1.4-1.15 2.26-.74 1.2-1.78 2.7-3.06 2.71-1.14.02-1.43-.74-2.98-.73-1.55.01-1.87.74-3.01.73-1.28-.01-2.25-1.37-2.99-2.57-2.08-3.39-2.3-7.37-1.01-9.33.92-1.4 2.37-2.28 3.69-2.28 1.36 0 2.22.75 3.35.75 1.1 0 1.77-.75 3.34-.75 1.18 0 2.43.65 3.35 1.76-2.95 1.62-2.47 5.9.47 7.45z"/>
      </svg>

      App Store
    </button>

    <!-- Play Store Button -->
    <button class="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition shadow-md">

      <!-- Play Store SVG -->
      <svg xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        viewBox="0 0 24 24"
        fill="currentColor">
        <path d="M3 2l13.5 10L3 22V2zm15.5 11.5L20 12l-1.5-1.5-2 1.5 2 1.5z"/>
      </svg>

      Play Store
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
<!-- BOTTOM INFO BOX -->
<div class="mt-20 bg-gray-200 rounded-3xl p-12 max-w-5xl">

  <p class="text-lg text-gray-800 leading-relaxed">
    Through WORKINGNA, job applicants can keep tracking on their
    job status and getting feedback directly from employers to
    shape themselves for better career interview and remarkable
    experience while having access to our online learning content.
  </p>

  <button class="mt-8 flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition shadow-md">

    <!-- Play Icon SVG -->
    <svg xmlns="http://www.w3.org/2000/svg"
      class="w-5 h-5"
      viewBox="0 0 24 24"
      fill="currentColor">
      <path d="M5 3.868v16.264c0 .82.9 1.32 1.6.9l13.2-8.132c.667-.41.667-1.39 0-1.8L6.6 2.968C5.9 2.548 5 3.048 5 3.868z"/>
    </svg>

    Watch Demo
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
    <div class="text-red-600 mb-4">
      <!-- Users Icon -->
      <svg xmlns="http://www.w3.org/2000/svg"
        class="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.8">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m8-4a4 4 0 10-8 0 4 4 0 008 0zM6 8a4 4 0 100-8 4 4 0 000 8z"/>
      </svg>
    </div>
    <h3 class="text-xl font-semibold text-gray-800">
      Wide Range of Candidate Pool
    </h3>
    <p class="text-gray-600 mt-2">
      Access a diverse and qualified candidate pool to hire the best talent quickly.
    </p>
  </div>

  <!-- CARD 2 -->
  <div class="bg-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition">
    <div class="text-red-600 mb-4">
      <!-- Settings Icon -->
      <svg xmlns="http://www.w3.org/2000/svg"
        class="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.8">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M11.049 2.927c.3-1.14 1.603-1.14 1.902 0l.17.646a1 1 0 00.95.69h.684c1.2 0 1.7 1.54.74 2.29l-.553.43a1 1 0 00-.364 1.118l.21.63c.37 1.1-.86 2.01-1.8 1.33l-.53-.38a1 1 0 00-1.18 0l-.53.38c-.94.68-2.17-.23-1.8-1.33l.21-.63a1 1 0 00-.364-1.118l-.553-.43c-.96-.75-.46-2.29.74-2.29h.684a1 1 0 00.95-.69l.17-.646z"/>
      </svg>
    </div>
    <h3 class="text-xl font-semibold text-gray-800">
      Automated Shortlisting
    </h3>
    <p class="text-gray-600 mt-2">
      Let the platform intelligently shortlist the most suitable candidates for you.
    </p>
  </div>

  <!-- CARD 3 -->
  <div class="bg-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition">
    <div class="text-red-600 mb-4">
      <!-- Chart Icon -->
      <svg xmlns="http://www.w3.org/2000/svg"
        class="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.8">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M3 3v18h18M9 17V9m4 8V5m4 12v-4"/>
      </svg>
    </div>
    <h3 class="text-xl font-semibold text-gray-800">
      Data Analytic Assessment Tool
    </h3>
    <p class="text-gray-600 mt-2">
      Get insights and analytics to improve hiring efficiency and outcomes.
    </p>
  </div>

  <!-- CARD 4 -->
  <div class="bg-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition">
    <div class="text-red-600 mb-4">
      <!-- Video Icon -->
      <svg xmlns="http://www.w3.org/2000/svg"
        class="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.8">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14m-6 4h6a2 2 0 002-2V8a2 2 0 00-2-2H9a2 2 0 00-2 2v8a2 2 0 002 2z"/>
      </svg>
    </div>
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
    <div class="text-red-600 mb-4">
      <!-- Briefcase Icon -->
      <svg xmlns="http://www.w3.org/2000/svg"
        class="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.8">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2m-7 0h10a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2z"/>
      </svg>
    </div>
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
    <div class="text-red-600 mb-4">
      <!-- Chart Bar Icon -->
      <svg xmlns="http://www.w3.org/2000/svg"
        class="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.8">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M3 3v18h18M9 17V9m4 8V5m4 12v-4"/>
      </svg>
    </div>
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
    <div class="text-red-600 mb-4">
      <!-- User Group Icon -->
      <svg xmlns="http://www.w3.org/2000/svg"
        class="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.8">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m8-4a4 4 0 10-8 0 4 4 0 008 0z"/>
      </svg>
    </div>
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
    <div class="text-red-600 mb-4">
      <!-- Palette Icon -->
      <svg xmlns="http://www.w3.org/2000/svg"
        class="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.8">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M12 2a10 10 0 100 20 4 4 0 004-4h-2a2 2 0 110-4h2a4 4 0 004-4A10 10 0 0012 2z"/>
      </svg>
    </div>
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
    <div class="text-red-600 mb-4">
      <!-- Wrench Icon -->
      <svg xmlns="http://www.w3.org/2000/svg"
        class="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.8">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M14.7 6.3a4 4 0 01-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4z"/>
      </svg>
    </div>
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
    <div class="text-red-600 mb-4">
      <!-- Beaker Icon -->
      <svg xmlns="http://www.w3.org/2000/svg"
        class="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.8">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M9 3h6m-3 0v5m-4 13h8a2 2 0 002-2l-3-6V8H9v5l-3 6a2 2 0 002 2z"/>
      </svg>
    </div>
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
 <section class="bg-gradient-to-b from-red-50 to-white py-24">
  <div class="container mx-auto px-6">
    
    <div class="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-10 md:p-14">

      <!-- Heading -->
      <div class="text-center">
        <h2 class="text-4xl font-bold text-gray-900">
          Reach out to us
        </h2>
        <p class="text-gray-500 mt-3">
          We'd love to hear from you. Send us a message and we’ll respond as soon as possible.
        </p>
      </div>

      <!-- Form -->
      <form class="mt-10 space-y-6">

        <!-- Name -->
        <input
          type="text"
          placeholder="Your Name"
          class="w-full px-5 py-4 rounded-xl border border-gray-200 
                 focus:outline-none focus:ring-2 focus:ring-red-500 
                 focus:border-transparent transition"
        />

        <!-- Email -->
        <input
          type="email"
          placeholder="Your Email Address"
          class="w-full px-5 py-4 rounded-xl border border-gray-200 
                 focus:outline-none focus:ring-2 focus:ring-red-500 
                 focus:border-transparent transition"
        />

        <!-- Phone -->
        <input
          type="tel"
          placeholder="Phone Number"
          class="w-full px-5 py-4 rounded-xl border border-gray-200 
                 focus:outline-none focus:ring-2 focus:ring-red-500 
                 focus:border-transparent transition"
        />

        <!-- Message -->
        <textarea
          rows="5"
          placeholder="What would you like to discuss?"
          class="w-full px-5 py-4 rounded-xl border border-gray-200 
                 focus:outline-none focus:ring-2 focus:ring-red-500 
                 focus:border-transparent transition resize-none"
        ></textarea>

        <!-- Button -->
        <button
          type="submit"
          class="w-full bg-red-600 text-white py-4 rounded-xl 
                 font-semibold tracking-wide 
                 hover:bg-red-700 hover:shadow-lg 
                 active:scale-[0.98] 
                 transition duration-300"
        >
          Submit Notice
        </button>

      </form>

    </div>

  </div>
</section>

  </main>

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
import { ref, onMounted } from 'vue'
const showRoleSelection = ref(false)
const selectedRole = ref('')
onMounted(() => {
  const user = localStorage.getItem('currentUser')

  if (!user) {
    showRoleSelection.value = true
  }
})

const selectRole = (role) => {
  selectedRole.value = role
  showRoleSelection.value = false

  if (role === 'candidate') {
    navigateTo('/register-candidate')
  } else if (role === 'businessman') {
    navigateTo('/register-businessman')
  }
}
</script>

