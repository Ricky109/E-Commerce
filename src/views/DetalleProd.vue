<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <!-- Producto no encontrado -->
    <div v-if="!product" class="text-center py-24">
      <p class="text-5xl mb-4">😕</p>
      <h2 class="text-xl font-semibold text-gray-700 mb-2">Producto no encontrado</h2>
      <RouterLink to="/products" class="text-rose-500 underline text-sm">
        Volver al catálogo
      </RouterLink>
    </div>

    <!-- Detalle del producto -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      <!-- Imagen -->
      <div class="rounded-2xl overflow-hidden shadow-md">
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-80 object-cover"
        />
      </div>

      <!-- Info -->
      <div class="flex flex-col gap-4">
        <span class="text-xs font-semibold uppercase tracking-widest text-rose-400">
          {{ product.category }}
        </span>
        <h1 class="text-3xl font-bold text-gray-800">{{ product.name }}</h1>
        <p class="text-gray-500 leading-relaxed">{{ product.description }}</p>
        <p class="text-3xl font-bold text-rose-500">S/ {{ product.price.toFixed(2) }}</p>

        <!-- Feedback al agregar -->
        <div
          v-if="added"
          class="text-sm text-green-600 bg-green-50 border border-green-200 rounded-lg px-4 py-2"
        >
          Agregado al carrito
        </div>

        <button
          @click="handleAddToCart"
          class="mt-2 bg-rose-500 hover:bg-rose-600 active:scale-95 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-150 shadow-md"
        >
          Agregar al carrito
        </button>

        <RouterLink
          to="/products"
          class="text-sm text-gray-400 hover:text-rose-400 transition-colors text-center"
        >
          ← Volver al catálogo
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import products from '@/data/products.json'

const route = useRoute()
const cartStore = useCartStore()

const product = computed(() =>
  products.find((p) => String(p.id) === String(route.params.id))
)

const added = ref(false)

function handleAddToCart() {
  if (!product.value) return
  cartStore.addItem(product.value)
  added.value = true
  setTimeout(() => (added.value = false), 2000)
}
</script>