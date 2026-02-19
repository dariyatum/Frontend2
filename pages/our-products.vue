<template>
  <div class="bg-white min-h-screen flex items-center justify-center p-6 md:p-20 font-sans">
    <div class="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
      
      <div class="flex-1 text-left">
        <h1 class="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
          Discover top <br> talents
        </h1>
        <p class="text-lg md:text-xl text-gray-800 leading-relaxed max-w-md">
          Explore and Meet a wide range of our classic and premier users database and identify their personality.
        </p>
      </div>

      <div class="flex-1 relative flex flex-col items-center">
        
        <div class="relative w-full max-w-md flex items-end justify-center">
          
          <div class="absolute left-0 bottom-20 flex flex-col items-center">
            <div class="relative">
              <svg class="w-12 h-12 text-red-500 absolute -top-6 left-1/2 -translate-x-1/2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
              </svg>
              <div class="w-24 h-32 border-2 border-gray-300 rounded-lg p-3 pt-8 flex flex-col gap-2 bg-white">
                <div class="h-1 w-full bg-gray-200"></div>
                <div class="h-1 w-full bg-gray-200"></div>
                <div class="h-1 w-full bg-gray-200"></div>
                <div class="h-1 w-full bg-gray-200"></div>
              </div>
            </div>
          </div>

          <div class="z-10 w-64 md:w-80 h-[400px] flex items-end">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/female-recruiter-searching-for-candidate-4487012-3723223.png" 
                 alt="Character" class="w-full object-contain">
          </div>

          <div class="absolute right-0 top-1/4 flex flex-col gap-8">
            <div class="absolute -left-20 top-0 flex gap-1">
               <span class="w-2 h-2 bg-red-400 rounded-full"></span>
               <span class="w-2 h-2 bg-red-400 rounded-full"></span>
               <span class="w-2 h-2 bg-red-400 rounded-full"></span>
            </div>

            <div class="flex items-center gap-2">
              <span class="text-2xl opacity-80">👤</span>
              <span class="text-red-500 text-sm">★</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-2xl opacity-80">👤</span>
              <span class="text-red-500 text-sm">★★</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-2xl opacity-80">👥</span>
              <span class="text-red-500 text-sm">★★★</span>
            </div>
          </div>

        </div>

        <div class="w-full  bg-slate-900  rounded-full"></div>
      </div>

    </div>
  </div>
  
</template>