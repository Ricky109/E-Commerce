<template>
  <div>
    <HeroBanner />

    <section class="max-w-6xl mx-auto px-6 py-14">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">
        Productos Destacados
      </h2>
      <p class="text-gray-500 mb-8">
        Una selección especial para todos los gustos.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductCard
          v-for="product in featuredProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import products from '../data/products.json'
import HeroBanner from '../components/common/HeroBanner.vue'
import ProductCard from '../components/products/ProductCard.vue'

const featuredProducts = computed(() =>
  products.filter(p => p.featured)
)
</script>