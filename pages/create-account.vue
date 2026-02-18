<template>
<div class="min-h-screen bg-slate-50 flex font-sans">
  
  <div class="hidden lg:flex w-1/2 bg-[#f8fafc] flex-col justify-between p-16">
    <div class="max-w-md">
      <h1 class="text-4xl font-bold text-[#0f2d52] leading-tight">
        Take the first step toward a smarter talent strategy
      </h1>
    </div>
    
    <div class="relative w-64 h-80 self-start">
      <div class="absolute bottom-0 left-0 w-full h-full bg-[#dbeafe] rounded-t-full flex items-end justify-center overflow-hidden border-b-8 border-[#f1f5f9]">
        <div class="w-48 h-64 bg-[#1e293b] rounded-t-lg"></div> 
      </div>
    </div>
  </div>

  <div class="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 w-full max-w-md">
      
      <div class="text-center mb-8">
        <h2 class="text-xl font-bold text-slate-800">
          Sign up to WORKINGNA as <span class="text-[#e25845]">Recruiter</span>
        </h2>
        <p class="text-sm text-slate-500 mt-2">
          Read more details about <a href="#" class="text-[#e25845] hover:underline">Recruiter Account</a>
        </p>
      </div>

      <form class="space-y-4">
        <div>
          <label class="block text-sm font-semibold text-slate-700 mb-1">Email<span class="text-red-500">*</span></label>
          <input type="email" placeholder="name@company.com" class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#e25845] focus:border-transparent outline-none transition" />
        </div>

        <div class="relative">
          <label class="block text-sm font-semibold text-slate-700 mb-1">Password<span class="text-red-500">*</span></label>
          <input type="password" placeholder="Password" class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#e25845] focus:border-transparent outline-none transition" />
          <button type="button" class="absolute right-3 top-9 text-slate-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-1">Company Name<span class="text-red-500">*</span></label>
            <input type="text" placeholder="eg., WORKINGNA" class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#e25845] outline-none" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-1">Package Plan<span class="text-red-500">*</span></label>
            <select class="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white text-[#e25845] font-medium outline-none">
              <option>Freemium</option>
              <option>Premium</option>
            </select>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-1">Contact Person<span class="text-red-500">*</span></label>
            <input type="text" placeholder="eg., Full Name" class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#e25845] outline-none" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-1">Contact Number<span class="text-red-500">*</span></label>
            <input type="text" placeholder="012123123" class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#e25845] outline-none" />
          </div>
        </div>

        <div class="space-y-3 pt-2">
          <label class="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" class="mt-1 rounded border-slate-300 text-[#e25845] focus:ring-[#e25845]" />
            <span class="text-xs text-slate-600">Yes! Send me genuinely useful emails every now and then to help me get the most out of WorkingNa.</span>
          </label>
          <label class="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" class="mt-1 rounded border-slate-300 text-[#e25845] focus:ring-[#e25845]" />
            <span class="text-xs text-slate-600">Yes, I understand and agree to the WORKINGNA <a href="#" class="text-[#e25845] hover:underline">Privacy Policy</a></span>
          </label>
        </div>

        <button type="submit" class="w-full bg-[#e25845] hover:bg-[#cf4a38] text-white font-semibold py-3 rounded-xl mt-6 transition shadow-md shadow-orange-100">
          Create My Account
        </button>
      </form>
    </div>
  </div>
</div>
</template>
