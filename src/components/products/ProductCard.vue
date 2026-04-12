<template>
  <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <img
      :src="product.image"
      :alt="product.name"
      class="w-full h-48 object-cover"
    />
    <div class="p-4">
      <span class="text-xs font-medium text-pink-500 uppercase tracking-wide">
        {{ product.category }}
      </span>
      <h3 class="text-gray-800 font-semibold text-base mt-1 mb-2">
        {{ product.name }}
      </h3>
      <div class="flex items-center justify-between mt-3">
        <span class="text-pink-600 font-bold text-lg">
          S/ {{ product.price }}
        </span>
        <RouterLink
          :to="`/product/${product.id}`"
          class="bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200"
        >
          Ver detalle
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>