<template>
  <div class="group bg-white rounded-[2.5rem] p-5 border border-[#fce8e8] flex items-center gap-6 transition-all duration-500 hover:border-[#e07a85] hover:shadow-[0_20px_40px_-15px_rgba(224,122,133,0.15)]">
    
    <div class="relative w-24 h-24 flex-shrink-0">
      <div class="absolute -top-2 -right-2 z-20 bg-[#2d1a1a] text-white text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
        {{ item.quantity }}
      </div>
      <img 
        :src="item.image" 
        :alt="item.name" 
        class="w-full h-full object-cover rounded-[2rem] shadow-sm group-hover:scale-105 transition-transform duration-700" 
      />
    </div>

    <div class="flex-grow min-w-0">
      <div class="flex justify-between items-start mb-1">
        <h3 class="text-sm font-black text-[#2d1a1a] uppercase tracking-tight truncate pr-4">
          {{ item.name }}
        </h3>
        <span class="text-base font-black text-[#e07a85] whitespace-nowrap">
          S/ {{ subtotal }}
        </span>
      </div>
      
      <p class="text-[10px] text-[#6b4c4c]/40 uppercase tracking-[0.2em] font-bold mb-4">
        {{ item.category || 'Repostería' }} · S/ {{ item.price.toFixed(2) }} u.
      </p>

      <div class="flex items-center gap-5">
        <div class="flex items-center bg-[#fffafa] rounded-full border border-[#fce8e8] p-1 shadow-inner">
          <button 
            @click="decrement"
            class="w-8 h-8 flex items-center justify-center text-[#2d1a1a] hover:bg-white hover:text-[#e07a85] rounded-full transition-all duration-300 font-bold active:scale-90"
          > 
            <span class="text-lg leading-none">−</span>
          </button>
          
          <span class="text-xs font-black text-[#2d1a1a] w-8 text-center tabular-nums">
            {{ item.quantity }}
          </span>
          
          <button 
            @click="increment"
            class="w-8 h-8 flex items-center justify-center text-[#2d1a1a] hover:bg-white hover:text-[#e07a85] rounded-full transition-all duration-300 font-bold active:scale-90"
          > 
            <span class="text-lg leading-none">+</span>
          </button>
        </div>

        <button 
          @click="cartStore.removeItem(item.id)"
          class="text-[9px] font-black uppercase tracking-[0.2em] text-[#6b4c4c]/30 hover:text-red-500 transition-colors duration-300 flex items-center gap-1 group/btn"
        >
          <svg class="w-3 h-3 opacity-50 group-hover/btn:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
          Remover
        </button>
      </div>
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

// Mantenemos tu lógica original exacta para que no se rompa nada
const subtotal = computed(() =>
  (props.item.price * props.item.quantity).toFixed(2)
)

function increment() {
  cartStore.updateQuantity(props.item.id, props.item.quantity + 1)
}

function decrement() {
  // Evitamos que baje de 1 si prefieres, o el store se encarga
  if (props.item.quantity > 1) {
    cartStore.updateQuantity(props.item.id, props.item.quantity - 1)
  }
}
</script>