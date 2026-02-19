<template>
<section class="min-h-screen grid md:grid-cols-2">

 
  <div class="bg-[#EDEDED] flex flex-col justify-between p-12">
    
    <h1 class="text-4xl font-bold text-[#0B2C3D] max-w-md">
      Take the first step toward a smarter talent strategy
    </h1>

    <div class="flex justify-center items-end">
      <img src="../assets/css/img/Artboard 1.webp" alt="Illustration" class="w-72">
    </div>

  </div>


  
  <div class="flex items-center justify-center bg-white">

    <div class="w-full max-w-md p-8 border rounded-xl shadow-sm">

      <h2 class="text-2xl font-semibold text-center mb-2">
        Update your password
      </h2>

      <p class="text-gray-500 text-center mb-6">
        Enter your email address to reset your password.
      </p>

      <div class="mb-4">
        <label class="block mb-2 text-sm font-medium">Email</label>
        <input 
          type="email"
          placeholder="name@company.com"
          class="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      <div class="flex justify-between items-center mt-6">
        <a href="recruit-talent.vue"><button class="text-red-500">Cancel</button></a>

        <a href="#"><button class="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600">
          Send Verify Code
        </button></a>
      </div>

    </div>

  </div>

</section>
</template>
