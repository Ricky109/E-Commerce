<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      scrolled
        ? 'bg-[#3d2314]/95 backdrop-blur-md shadow-xl py-2'
        : 'bg-transparent py-4'
    ]"
  >
    <div class="max-w-6xl mx-auto px-6 flex items-center justify-between">

      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2 group">
        <div class="w-8 h-8 rounded-full bg-[#c9a97a] flex items-center justify-center shadow">
          <span class="text-white text-sm font-black">M</span>
        </div>
        <span class="font-black text-xl tracking-tight text-white">
          miskikusi<span class="text-[#c9a97a]">.</span>
        </span>
      </RouterLink>

      <!-- Links desktop -->
      <ul class="hidden md:flex items-center gap-1">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="px-4 py-2 text-sm font-medium text-white/70 rounded-lg hover:text-white hover:bg-white/10 transition-all duration-200"
            active-class="text-white bg-white/15"
          >
            {{ link.label }}
          </RouterLink>
        </li>

        <!-- Carrito -->
        <li>
          <RouterLink
            to="/cart"
            class="relative flex items-center gap-2 ml-3 px-5 py-2 bg-[#c9a97a] hover:bg-[#b8956a] text-white font-semibold text-sm rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>Carrito</span>
            <span
              v-if="cartStore.totalItems > 0"
              class="absolute -top-1.5 -right-1.5 bg-white text-[#c9a97a] text-xs font-black w-5 h-5 rounded-full flex items-center justify-center shadow"
            >
              {{ cartStore.totalItems }}
            </span>
          </RouterLink>
        </li>
      </ul>

      <!-- Hamburguesa mobile -->
      <button
        @click="menuOpen = !menuOpen"
        class="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors"
      >
        <span :class="['block w-6 h-0.5 bg-white transition-all duration-300', menuOpen ? 'rotate-45 translate-y-2' : '']" />
        <span :class="['block w-6 h-0.5 bg-white transition-all duration-300', menuOpen ? 'opacity-0' : '']" />
        <span :class="['block w-6 h-0.5 bg-white transition-all duration-300', menuOpen ? '-rotate-45 -translate-y-2' : '']" />
      </button>
    </div>

    <!-- Mobile menu -->
    <div :class="['md:hidden overflow-hidden transition-all duration-300', menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0']">
      <ul class="flex flex-col px-6 pb-4 gap-1 mt-2">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            @click="menuOpen = false"
            class="block px-4 py-2.5 text-sm font-medium text-white/80 rounded-xl hover:bg-white/10 transition-colors"
            active-class="bg-white/15 text-white"
          >
            {{ link.label }}
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/cart"
            @click="menuOpen = false"
            class="flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-[#c9a97a] rounded-xl hover:bg-white/10 transition-colors"
          >
            <span>Carrito</span>
            <span v-if="cartStore.totalItems > 0" class="bg-[#c9a97a] text-white text-xs font-black w-5 h-5 rounded-full flex items-center justify-center">
              {{ cartStore.totalItems }}
            </span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
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

function handleScroll() {
  scrolled.value = window.scrollY > 60
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>