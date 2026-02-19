<template>
  <div>
    <section class="relative min-h-[80vh] flex items-center justify-center bg-[#f0f7ff] overflow-hidden px-8">
      <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <h1 class="text-5xl lg:text-7xl font-extrabold text-[#0a3d62] leading-tight">
            All Your HR <br />
            Needs—In One <br />
            <span class="text-[#0a3d62]">Smart Kit.</span>
          </h1>
          <p class="text-xl text-gray-600 font-medium">
            Faster, Smarter, Lower Cost - All in One <br />
            Platform Powered by AI.
          </p>
          <div class="flex items-center gap-6">
            <button class="bg-[#ef4444] hover:bg-red-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg">
              Get Started
            </button>
            <a href="#" class="text-[#0a3d62] font-semibold border-b-2 border-transparent hover:border-[#0a3d62] pb-1">
              See what's inside
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white px-8">
      <div class="container mx-auto">
        
        <div class="max-w-md mb-8">
          <div class="relative flex items-center">
            <input 
              type="text" 
              placeholder="Search Articles" 
              class="w-full border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button class="bg-[#ef4444] p-2.5 rounded-r-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        <div class="flex flex-wrap gap-3 mb-12">
            
          <button class="bg-[#ef4444]  hover:bg-violet-500 text-white px-6 py-1.5 rounded-full text-sm font-medium">All Category</button>
          <button class="border border-gray-400 hover:bg-violet-500 text-gray-700 px-8 py-1.5 rounded-full text-sm font-medium hover:bg-gray-50">SOP</button>
          <button class="border border-gray-400  hover:bg-violet-500 text-gray-700 px-8 py-1.5 rounded-full text-sm font-medium hover:bg-gray-50">Form</button>
          <button class="border border-gray-400 hover:bg-violet-500 text-gray-700 px-8 py-1.5 rounded-full text-sm font-medium hover:bg-gray-50">KPI Template</button>
          <button class="border border-gray-400 hover:bg-violet-500 text-gray-700 px-8 py-1.5 rounded-full text-sm font-medium hover:bg-gray-50">Contract</button>
        </div>

        <h2 class="text-2xl font-bold text-gray-800 mb-8">All Category</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-xl shadow-md transition-transform duration-300 group-hover:-translate-y-2">
              <img src="https://via.placeholder.com/400x200/0a3d62/ffffff?text=HR+Policy+Image" alt="SOP" class="w-full h-48 object-cover" />
              <div class="absolute top-3 right-3 bg-yellow-400 p-1 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <p class="mt-4 font-bold text-gray-800 leading-snug">គោលការណ៍ប្រតិបត្តិស្តីពីការណែនាំ និងតំរង់ទិសបុគ្គលិកចូលថ្មី</p>
          </div>

          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-xl shadow-md transition-transform duration-300 group-hover:-translate-y-2">
              <img src="https://via.placeholder.com/400x200/0a3d62/ffffff?text=Onboarding+SOP" alt="Onboarding" class="w-full h-48 object-cover" />
              <div class="absolute top-3 right-3 bg-yellow-400 p-1 rounded-sm">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <p class="mt-4 font-bold text-gray-800 leading-snug">SOP - Onboarding & Employee Orientation</p>
          </div>

          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-xl shadow-md transition-transform duration-300 group-hover:-translate-y-2">
              <img src="https://via.placeholder.com/400x200/0a3d62/ffffff?text=Performance+Appraisal" alt="Appraisal" class="w-full h-48 object-cover" />
              <div class="absolute top-3 right-3 bg-yellow-400 p-1 rounded-sm">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <p class="mt-4 font-bold text-gray-800 leading-snug">គោលការណ៍ប្រតិបត្តិស្តីពីការវាយតម្លៃសមត្ថភាពនិយោជិត</p>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>