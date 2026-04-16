<template>
  <div v-if="products.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>

  <div v-else class="text-center py-20">
    <p class="text-gray-400 text-lg">No se encontraron productos con estos filtros.</p>
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue'

defineProps({
  products: {
    type: Array,
    required: true
  }
})
</script>