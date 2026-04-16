<template>
  <div class="max-w-3xl mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold text-gray-800 mb-8">Tu carrito 🛒</h1>

    <!-- Carrito vacío -->
    <div v-if="cartStore.items.length === 0" class="text-center py-24">
      <p class="text-6xl mb-4">🍰</p>
      <p class="text-lg font-semibold text-gray-600 mb-2">Tu carrito está vacío</p>
      <p class="text-sm text-gray-400 mb-6">¡Agrega alguna torta para comenzar!</p>
      <RouterLink
        to="/products"
        class="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
      >
        Ver catálogo
      </RouterLink>
    </div>

    <!-- Lista de productos -->
    <div v-else class="flex flex-col gap-4">
      <CartItem
        v-for="item in cartStore.items"
        :key="item.id"
        :item="item"
      />

      <!-- Resumen -->
      <div class="mt-6 border-t border-rose-100 pt-6 flex flex-col gap-4">
        <div class="flex justify-between items-center">
          <span class="text-gray-600 font-medium">
            Total ({{ cartStore.totalItems }} {{ cartStore.totalItems === 1 ? 'producto' : 'productos' }})
          </span>
          <span class="text-2xl font-bold text-rose-500">
            S/ {{ cartStore.totalPrice.toFixed(2) }}
          </span>
        </div>

        <button
          @click="cartStore.clearCart()"
          class="w-full border border-rose-300 text-rose-500 hover:bg-rose-50 font-semibold py-3 rounded-xl transition-colors"
        >
          Vaciar carrito
        </button>

        <button
          class="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 rounded-xl transition-colors shadow-md"
        >
          Proceder al pago
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
import CartItem from '@/components/cart/CartItem.vue'

const cartStore = useCartStore()
</script>