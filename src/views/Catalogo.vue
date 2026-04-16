<template>
  <div class="max-w-6xl mx-auto px-6 py-14">

    <h1 class="text-3xl font-bold text-gray-800 mb-2">Catálogo</h1>
    <p class="text-gray-500 mb-8">Encuentra la torta perfecta para tu ocasión.</p>

    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-10">

      <div class="mb-6">
        <p class="text-sm font-medium text-gray-600 mb-3">Categoría</p>
        <CategoryFilter
          :categories="categories"
          :selected="selectedCategory"
          @update:selected="selectedCategory = $event"
        />
      </div>

      <div>
        <p class="text-sm font-medium text-gray-600 mb-3">
          Precio máximo: <span class="text-pink-500 font-semibold">S/ {{ maxPrice }}</span>
        </p>
        <input
          type="range"
          min="60"
          max="180"
          step="10"
          v-model="maxPrice"
          class="w-full accent-pink-500"
        />
        <div class="flex justify-between text-xs text-gray-400 mt-1">
          <span>S/ 60</span>
          <span>S/ 180</span>
        </div>
      </div>

    </div>

    <p class="text-sm text-gray-400 mb-6">
      {{ filteredProducts.length }} producto(s) encontrado(s)
    </p>

    <ProductList :products="filteredProducts" />

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import products from '../data/products.json'
import CategoryFilter from '../components/products/CategoryFilter.vue'
import ProductList from '../components/products/ProductList.vue'

const categories = ['Todas', 'Clásicas', 'Cuadradas', 'Rectangulares', 'Corazón', 'Sin Azúcar']

const selectedCategory = ref('Todas')
const maxPrice = ref(180)

const filteredProducts = computed(() => {
  return products.filter(p => {
    const matchCategory = selectedCategory.value === 'Todas' || p.category === selectedCategory.value
    const matchPrice = p.price <= maxPrice.value
    return matchCategory && matchPrice
  })
})
</script>