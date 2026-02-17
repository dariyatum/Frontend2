<template>
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
