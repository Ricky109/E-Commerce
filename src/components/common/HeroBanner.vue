<template>
  <div class="bg-gradient-to-r from-pink-500 to-pink-300 text-white py-20 px-8 text-center">
    <h1 class="text-4xl font-bold mb-4">
      Bienvenido a Miskikusi
    </h1>
    <p class="text-lg mb-8 max-w-xl mx-auto">
      Tortas artesanales hechas con amor para cada ocasión especial.
    </p>
    <RouterLink
      to="/products"
      class="bg-white text-pink-600 font-semibold px-8 py-3 rounded-full hover:bg-pink-50 transition-colors duration-200"
    >
      Ver catálogo
    </RouterLink>
  </div>
</template>