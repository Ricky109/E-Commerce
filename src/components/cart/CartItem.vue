<template>
  <div class="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-rose-100">
    <!-- Imagen -->
    <img
      :src="item.image"
      :alt="item.name"
      class="w-20 h-20 object-cover rounded-xl flex-shrink-0"
    />

    <!-- Info principal -->
    <div class="flex-1 min-w-0">
      <h3 class="font-semibold text-gray-800 truncate">{{ item.name }}</h3>
      <p class="text-sm text-rose-400 font-medium">S/ {{ item.price.toFixed(2) }} c/u</p>

      <!-- Controles de cantidad -->
      <div class="flex items-center gap-2 mt-2">
        <button
          @click="decrement"
          class="w-7 h-7 rounded-full bg-rose-100 text-rose-600 font-bold text-lg leading-none flex items-center justify-center hover:bg-rose-200 transition-colors"
        >
          −
        </button>
        <span class="w-6 text-center font-semibold text-gray-700">{{ item.quantity }}</span>
        <button
          @click="increment"
          class="w-7 h-7 rounded-full bg-rose-100 text-rose-600 font-bold text-lg leading-none flex items-center justify-center hover:bg-rose-200 transition-colors"
        >
          +
        </button>
      </div>
    </div>

    <!-- Subtotal + Eliminar -->
    <div class="flex flex-col items-end gap-2 flex-shrink-0">
      <p class="font-bold text-gray-800">S/ {{ subtotal }}</p>
      <button
        @click="cartStore.removeItem(item.id)"
        class="text-xs text-gray-400 hover:text-red-500 transition-colors underline underline-offset-2"
      >
        Eliminar
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/stores/cart'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()

const subtotal = computed(() =>
  (props.item.price * props.item.quantity).toFixed(2)
)

function increment() {
  cartStore.updateQuantity(props.item.id, props.item.quantity + 1)
}

function decrement() {
  cartStore.updateQuantity(props.item.id, props.item.quantity - 1)
}
</script>