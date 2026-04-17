<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-400',
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white py-4'
    ]"
  >
    <div class="max-w-6xl mx-auto px-8 flex items-center justify-between">

      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2.5 group">
        <div class="w-9 h-9 rounded-xl bg-[#fce8e8] border-2 border-[#e07a85] flex items-center justify-center shadow-sm">
          <span class="text-[#e07a85] font-black text-sm">M</span>
        </div>
        <div class="leading-none">
          <p class="font-black text-[#2d1a1a] text-lg tracking-tight">Miskikusi</p>
          <p class="text-[#e07a85] text-[10px] font-semibold tracking-widest uppercase"></p>
        </div>
      </RouterLink>

      <!-- Links desktop -->
      <ul class="hidden md:flex items-center gap-1">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="px-4 py-2 text-sm font-semibold text-[#6b4c4c]/70 rounded-xl hover:text-[#2d1a1a] hover:bg-[#fce8e8] transition-all duration-200"
            active-class="text-[#e07a85] bg-[#fce8e8]"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>

      <!-- Derecha: buscar + carrito -->
      <div class="hidden md:flex items-center gap-3">
        <RouterLink
          to="/cart"
          class="relative flex items-center gap-2 bg-[#2d1a1a] hover:bg-[#e07a85] text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span>Carrito</span>
          <span
            v-if="cartStore.totalItems > 0"
            class="absolute -top-1.5 -right-1.5 bg-[#e07a85] text-white text-xs font-black w-5 h-5 rounded-full flex items-center justify-center shadow animate-bounce"
          >
            {{ cartStore.totalItems }}
          </span>
        </RouterLink>
      </div>

      <!-- Hamburguesa mobile -->
      <button
        @click="menuOpen = !menuOpen"
        class="md:hidden flex flex-col gap-1.5 p-2 rounded-xl hover:bg-[#fce8e8] transition-colors"
      >
        <span :class="['block w-6 h-0.5 bg-[#2d1a1a] transition-all duration-300', menuOpen ? 'rotate-45 translate-y-2' : '']" />
        <span :class="['block w-6 h-0.5 bg-[#2d1a1a] transition-all duration-300', menuOpen ? 'opacity-0' : '']" />
        <span :class="['block w-6 h-0.5 bg-[#2d1a1a] transition-all duration-300', menuOpen ? '-rotate-45 -translate-y-2' : '']" />
      </button>
    </div>

    <!-- Mobile menu -->
    <div :class="['md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-[#fce8e8]', menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0']">
      <ul class="flex flex-col px-6 py-4 gap-1">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            @click="menuOpen = false"
            class="block px-4 py-2.5 text-sm font-semibold text-[#6b4c4c] rounded-xl hover:bg-[#fce8e8] transition-colors"
            active-class="bg-[#fce8e8] text-[#e07a85]"
          >
            {{ link.label }}
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/cart"
            @click="menuOpen = false"
            class="flex items-center justify-between px-4 py-2.5 text-sm font-bold text-[#e07a85] rounded-xl hover:bg-[#fce8e8] transition-colors"
          >
            <span>Carrito</span>
            <span v-if="cartStore.totalItems > 0" class="bg-[#e07a85] text-white text-xs font-black w-5 h-5 rounded-full flex items-center justify-center">
              {{ cartStore.totalItems }}
            </span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>

  <!-- Espaciado -->
  <div class="h-20" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
const scrolled = ref(false)
const menuOpen = ref(false)

const links = [
  { to: '/',         label: 'Inicio'   },
  { to: '/products', label: 'Catálogo' },
  { to: '/about',    label: 'Nosotros' },
]

function handleScroll() { scrolled.value = window.scrollY > 50 }
onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>