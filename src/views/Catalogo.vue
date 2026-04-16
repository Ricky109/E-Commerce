<template>
  <div class="max-w-6xl mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold text-gray-800 mb-2">Catálogo</h1>
    <p class="text-gray-500 mb-8">{{ filtered.length }} tortas disponibles</p>

    <!-- Filtros -->
    <div class="flex flex-wrap gap-4 mb-10 p-5 bg-rose-50 rounded-2xl border border-rose-100">
      <!-- Filtro por categoría -->
      <div class="flex flex-col gap-1 flex-1 min-w-[160px]">
        <label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Categoría
        </label>
        <select
          v-model="selectedCategory"
          class="border border-rose-200 rounded-xl px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-rose-300"
        >
          <option value="">Todas</option>
          <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
        </select>
      </div>

      <!-- Filtro precio mínimo -->
      <div class="flex flex-col gap-1 flex-1 min-w-[140px]">
        <label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Precio mínimo
        </label>
        <input
          v-model.number="minPrice"
          type="number"
          min="0"
          placeholder="S/ 0"
          class="border border-rose-200 rounded-xl px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-rose-300"
        />
      </div>

      <!-- Filtro precio máximo -->
      <div class="flex flex-col gap-1 flex-1 min-w-[140px]">
        <label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Precio máximo
        </label>
        <input
          v-model.number="maxPrice"
          type="number"
          min="0"
          placeholder="S/ 999"
          class="border border-rose-200 rounded-xl px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-rose-300"
        />
      </div>

      <!-- Botón limpiar -->
      <div class="flex items-end">
        <button
          @click="clearFilters"
          class="text-sm text-rose-500 hover:text-rose-700 underline underline-offset-2 font-medium pb-2"
        >
          Limpiar filtros
        </button>
      </div>
    </div>

    <!-- Sin resultados -->
    <div v-if="filtered.length === 0" class="text-center py-20">
      <p class="text-5xl mb-4">🔍</p>
      <p class="text-gray-600 font-semibold">No hay tortas con esos filtros.</p>
      <button
        @click="clearFilters"
        class="mt-4 text-sm text-rose-500 underline"
      >
        Ver todos los productos
      </button>
    </div>

    <!-- Grid de productos -->
    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <div
        v-for="product in filtered"
        :key="product.id"
        class="bg-white rounded-2xl border border-rose-50 shadow-sm overflow-hidden hover:shadow-md transition-shadow group flex flex-col"
      >
        <RouterLink :to="`/product/${product.id}`" class="block overflow-hidden h-44">
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </RouterLink>

        <div class="p-4 flex flex-col flex-1">
          <span class="text-xs text-rose-400 font-semibold uppercase tracking-wide">
            {{ product.category }}
          </span>
          <h3 class="font-semibold text-gray-800 mt-1 mb-1 truncate">{{ product.name }}</h3>
          <p class="text-xs text-gray-400 line-clamp-2 mb-3 flex-1">{{ product.description }}</p>

          <div class="flex items-center justify-between mt-auto">
            <span class="text-rose-500 font-bold">S/ {{ product.price.toFixed(2) }}</span>
            <button
              @click="handleAdd(product)"
              class="text-xs bg-rose-500 hover:bg-rose-600 text-white px-3 py-1.5 rounded-lg transition-colors font-medium"
            >
              + Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '@/stores/cart'
import products from '@/data/products.json'

const cartStore = useCartStore()

const categories = ['Clásicas', 'Cuadradas', 'Rectangulares', 'Corazón', 'Sin Azúcar']

const selectedCategory = ref('')
const minPrice = ref(null)
const maxPrice = ref(null)

const filtered = computed(() => {
  return products.filter((p) => {
    const matchCat = selectedCategory.value === '' || p.category === selectedCategory.value
    const matchMin = minPrice.value === null || minPrice.value === '' || p.price >= minPrice.value
    const matchMax = maxPrice.value === null || maxPrice.value === '' || p.price <= maxPrice.value
    return matchCat && matchMin && matchMax
  })
})

function clearFilters() {
  selectedCategory.value = ''
  minPrice.value = null
  maxPrice.value = null
}

function handleAdd(product) {
  cartStore.addItem(product)
}
</script>