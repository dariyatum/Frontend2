<template>
<section class="bg-[#F8F9FA] py-10 px-4 font-sans text-[#333]">
  <div class="max-w-7xl mx-auto">
    
    <div class="flex flex-col items-center mb-6">
      <div class="flex items-center gap-2">
        <span class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Billing Cycle:</span>
        <div class="flex gap-2">
          <button class="px-4 py-1 text-[11px] font-bold rounded-full border border-red-500 text-red-500 hover:bg-red-50">Monthly</button>
          <button class="px-4 py-1 text-[11px] font-bold rounded-full border border-red-500 bg-red-500 text-white flex items-center gap-1 shadow-sm">
            Quarterly <span class="text-[10px]">👑</span>
          </button>
          <button class="px-4 py-1 text-[11px] font-bold rounded-full border border-red-500 text-red-500 hover:bg-red-50">Semi Annual</button>
          <button class="px-4 py-1 text-[11px] font-bold rounded-full border border-red-500 text-red-500 hover:bg-red-50">Annually</button>
        </div>
      </div>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full border-collapse bg-white min-w-[1100px] table-fixed">
        <thead>
          <tr class="text-center">
            <th class="p-4 border border-gray-200 w-[200px]">
              <div class="flex flex-col items-center">
                <img src="https://workingna.com/dist/img/logo-workingna.png" alt="Workingna" class="w-32 mb-2">
                <p class="text-[8px] text-gray-400 uppercase italic">Hire Better and Faster with Data</p>
              </div>
            </th>
            
            <th class="p-4 border border-gray-200 align-top">
              <div class="bg-[#E14D43] text-white py-1 text-[11px] font-bold rounded-full mb-4 mx-4 uppercase">Freemium</div>
              <div class="text-3xl font-bold mb-1">Free</div>
              <p class="text-[10px] text-gray-500 mb-4 italic lowercase">Try it now!</p>
              <button class="border border-red-400 text-red-500 px-4 py-1 rounded-full text-[10px] font-bold hover:bg-red-50">Start Freemium</button>
            </th>

            <th class="p-4 border border-gray-200 align-top bg-[#FFFDF5]">
              <div class="bg-[#E8C547] text-white py-1 text-[11px] font-bold rounded-full mb-2 mx-4 uppercase shadow-sm">AI Hire+</div>
              <div class="text-[10px] text-gray-400 line-through">$299.97 <span class="text-[#8CC63F] font-bold">(15% off)</span></div>
              <div class="text-3xl font-bold text-[#333] mb-1">$254.97</div>
              <p class="text-[9px] text-[#8CC63F] font-bold mb-4">Save up to 45.00$ <span class="block text-gray-400 font-normal">/quarterly</span></p>
              <button class="bg-[#E8C547] text-white px-4 py-1 rounded-full text-[10px] font-bold shadow-md">Start AI Hire+</button>
            </th>

            <th class="p-4 border border-gray-200 align-top bg-[#FFFCF0]">
              <div class=" from-[#D4AF37] to-[#B8860B] text-white py-1 text-[11px] font-bold rounded-full mb-2 mx-4 uppercase shadow-sm">Signature 👑</div>
              <div class="text-[10px] text-gray-400 line-through">$464.97 <span class="text-[#8CC63F] font-bold">(15% off)</span></div>
              <div class="text-3xl font-bold text-[#333] mb-1">$395.22</div>
              <p class="text-[9px] text-[#8CC63F] font-bold mb-4">Save up to 69.75$ <span class="block text-gray-400 font-normal">/quarterly</span></p>
              <button class="bg-[#D4AF37] text-white px-4 py-1 rounded-full text-[10px] font-bold shadow-md">Start Signature</button>
            </th>

            <th class="p-4 border border-gray-200 align-top">
              <div class="bg-[#B32017] text-white py-1 text-[11px] font-bold rounded-full mb-2 mx-4 uppercase">Signature+</div>
              <div class="text-[10px] text-gray-400 line-through">$899.97 <span class="text-[#8CC63F] font-bold">(5% off)</span></div>
              <div class="text-3xl font-bold text-[#333] mb-1">$854.97</div>
              <p class="text-[9px] text-[#8CC63F] font-bold mb-4">Save up to 45.00$ <span class="block text-gray-400 font-normal">/quarterly</span></p>
              <button class="bg-[#B32017] text-white px-4 py-1 rounded-full text-[10px] font-bold">Start Signature+</button>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr class="bg-[#E14D43] text-white font-bold text-[11px]">
            <td class="p-2 border border-gray-300 pl-4 uppercase">Job Visibility & Branding</td>
            <td class="border border-gray-300"></td><td class="border border-gray-300"></td><td class="border border-gray-300"></td><td class="border border-gray-300"></td>
          </tr>
          <tr class="text-sm">
            <td class="p-2 border border-gray-200 pl-4 text-gray-600 font-bold text-[11px]">Job Listing (App & Web)</td>
            <td class="border border-gray-200 text-center text-[#8CC63F]">✔</td>
            <td class="border border-gray-200 text-center text-[#8CC63F]">✔</td>
            <td class="border border-gray-200 text-center text-[#D4AF37] bg-[#FFFCF0]">✔</td>
            <td class="border border-gray-200 text-center text-[#8CC63F]">✔</td>
          </tr>
          <tr>
            <td class="p-2 border border-gray-200 pl-4 text-gray-600 font-bold text-[11px]">Social Media</td>
            <td class="border border-gray-200 text-center text-white bg-[#E14D43] opacity-80">✖</td>
            <td class="border border-gray-200 text-center text-[#8CC63F]">✔</td>
            <td class="border border-gray-200 text-center text-[#D4AF37] bg-[#FFFCF0]">✔</td>
            <td class="border border-gray-200 text-center text-[#8CC63F]">✔</td>
          </tr>

          <tr class="bg-[#E14D43] text-white font-bold text-[11px]">
            <td class="p-2 border border-gray-300 pl-4 uppercase">AI Hire+ Tool</td>
            <td class="border border-gray-300"></td><td class="border border-gray-300"></td><td class="border border-gray-300"></td><td class="border border-gray-300"></td>
          </tr>
          <tr>
            <td class="p-2 border border-gray-200 pl-4 text-gray-600 font-bold text-[11px]">AI-Powered CV Search</td>
            <td class="border border-gray-200 text-center text-white bg-[#E14D43] text-[9px] font-bold">55/CV Download</td>
            <td class="border border-gray-200 text-center text-[#8CC63F] text-[10px] font-bold">90 CVs</td>
            <td class="border border-gray-200 text-center text-[#D4AF37] text-[10px] font-bold bg-[#FFFCF0]">90 CVs</td>
            <td class="border border-gray-200 text-center text-white bg-[#E14D43] text-[10px] font-bold">150 CVs</td>
          </tr>

          <tr class="border-t-4 border-gray-300">
            <td class="p-4 border border-gray-300 bg-[#B32017] text-white font-black text-center text-[10px] uppercase">Hiring Fee</td>
            <td class="p-4 border border-gray-200 text-center">
              <div class="text-[#E14D43] text-2xl font-black italic">$1.49</div>
              <div class="text-[9px] font-bold text-gray-600">Per Application</div>
              <div class="text-[8px] text-gray-400 italic">*** VAT included</div>
            </td>
            <td class="p-4 border border-gray-200 text-center">
              <div class="text-[#E14D43] text-2xl font-black italic uppercase">Free</div>
              <div class="text-[9px] font-bold text-gray-600 uppercase">Unlimited Candidate</div>
            </td>
            <td class="p-4 border border-gray-200 text-center bg-[#FFFCF0]">
              <div class="text-[#E14D43] text-2xl font-black italic uppercase">Free</div>
              <div class="text-[9px] font-bold text-gray-600 uppercase">Unlimited Candidate</div>
            </td>
            <td class="p-4 border border-gray-200 text-center">
              <div class="text-[#E14D43] text-2xl font-black italic uppercase">Free</div>
              <div class="text-[9px] font-bold text-gray-600 uppercase">Unlimited Candidate</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
</template>