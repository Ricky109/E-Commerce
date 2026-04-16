<template>
  <div>
    <!-- Hero Banner -->
    <section class="bg-gradient-to-br from-rose-50 to-pink-100 py-20 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <p class="text-rose-400 font-semibold tracking-widest uppercase text-sm mb-3">
          Pastelería artesanal · Arequipa
        </p>
        <h1 class="text-5xl font-bold text-gray-800 mb-4 leading-tight">
          Tortas hechas con<br />
          <span class="text-rose-500">amor y dedicación</span>
        </h1>
        <p class="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
          Descubre nuestra selección de tortas artesanales: clásicas, cuadradas,
          rectangulares, en forma de corazón y sin azúcar.
        </p>
        <RouterLink
          to="/products"
          class="inline-block bg-rose-500 hover:bg-rose-600 active:scale-95 text-white font-semibold px-8 py-3 rounded-xl shadow-md transition-all duration-150"
        >
          Ver catálogo completo
        </RouterLink>
      </div>
    </section>

    <!-- Productos destacados -->
    <section class="max-w-6xl mx-auto px-4 py-16">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-2xl font-bold text-gray-800">✨ Productos destacados</h2>
        <RouterLink
          to="/products"
          class="text-sm text-rose-500 hover:underline font-medium"
        >
          Ver todos →
        </RouterLink>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="product in featured"
          :key="product.id"
          class="bg-white rounded-2xl shadow-sm border border-rose-50 overflow-hidden hover:shadow-md transition-shadow group"
        >
          <RouterLink :to="`/product/${product.id}`">
            <div class="overflow-hidden h-48">
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </RouterLink>
          <div class="p-4">
            <span class="text-xs text-rose-400 font-semibold uppercase tracking-wide">
              {{ product.category }}
            </span>
            <h3 class="font-semibold text-gray-800 mt-1 mb-2 truncate">{{ product.name }}</h3>
            <div class="flex items-center justify-between">
              <span class="text-rose-500 font-bold text-lg">
                S/ {{ product.price.toFixed(2) }}
              </span>
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
    </section>

    <!-- Categorías -->
    <section class="bg-rose-50 py-14 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-2xl font-bold text-gray-800 mb-8">Nuestras categorías</h2>
        <div class="flex flex-wrap justify-center gap-3">
          <RouterLink
            v-for="cat in categories"
            :key="cat"
            to="/products"
            class="bg-white border border-rose-200 text-rose-500 font-semibold px-5 py-2 rounded-full hover:bg-rose-500 hover:text-white transition-colors text-sm shadow-sm"
          >
            {{ cat }}
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import products from '@/data/products.json'

const cartStore = useCartStore()

const categories = ['Clásicas', 'Cuadradas', 'Rectangulares', 'Corazón', 'Sin Azúcar']

// Toma los primeros 6 productos como destacados
const featured = products.slice(0, 6)

function handleAdd(product) {
  cartStore.addItem(product)
}
</script>