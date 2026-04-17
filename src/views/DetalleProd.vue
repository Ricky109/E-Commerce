<template>
  <div class="bg-white min-h-screen font-sans">

    <!-- Producto no encontrado -->
    <div v-if="!product" class="text-center py-24">
      <p class="text-5xl mb-4">😕</p>
      <h2 class="text-xl font-semibold text-[#2d1a1a] mb-2">Producto no encontrado</h2>
      <RouterLink to="/products" class="text-[#e07a85] underline text-sm">
        Volver al catálogo
      </RouterLink>
    </div>

    <template v-else>
      <!-- DETALLE PRINCIPAL -->
      <section class="max-w-6xl mx-auto px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

          <!-- Imagen -->
          <div class="relative">
            <div class="absolute inset-0 bg-[#fce8e8] rounded-3xl scale-95 z-0" />
            <img
              :src="product.image"
              :alt="product.name"
              class="relative z-10 w-full h-[420px] object-cover rounded-3xl shadow-xl"
            />
            <div class="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm text-[#e07a85] text-xs font-bold px-3 py-1 rounded-full">
              {{ product.category }}
            </div>
          </div>

          <!-- Info -->
          <div class="flex flex-col gap-5 pt-4">
            <p class="text-[#e07a85] font-semibold text-xs tracking-[0.3em] uppercase">
              {{ product.category }}
            </p>
            <h1 class="text-4xl font-black text-[#2d1a1a] leading-tight">{{ product.name }}</h1>
            <p class="text-[#6b4c4c]/70 leading-relaxed">{{ product.description }}</p>

            <div class="flex items-center gap-3 mt-2">
              <p class="text-4xl font-black text-[#e07a85]">S/ {{ product.price.toFixed(2) }}</p>
              <span class="text-xs bg-[#fce8e8] text-[#e07a85] font-bold px-3 py-1 rounded-full">⭐ 4.9</span>
            </div>

            <!-- Feedback -->
            <transition name="fade">
              <div
                v-if="added"
                class="text-sm text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-3 flex items-center gap-2"
              >
                <span>✓</span> ¡Agregado al carrito!
              </div>
            </transition>

            <button
              @click="handleAddToCart"
              class="bg-[#2d1a1a] hover:bg-[#e07a85] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
            >
              + Agregar al carrito
            </button>

            <RouterLink
              to="/products"
              class="text-sm text-[#6b4c4c]/50 hover:text-[#e07a85] transition-colors text-center"
            >
              ← Volver al catálogo
            </RouterLink>
          </div>
        </div>
      </section>

      <!-- RECOMENDADOS -->
      <section class="bg-[#fdf5f5] py-20">
        <div class="max-w-6xl mx-auto px-8">
          <div class="text-center mb-12">
            <p class="text-[#e07a85] font-semibold text-xs tracking-widest uppercase mb-2">También te puede gustar</p>
            <h2 class="text-3xl font-black text-[#2d1a1a]">Otras tortas que amamos</h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div
              v-for="rec in recommended"
              :key="rec.id"
              class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <RouterLink :to="`/product/${rec.id}`">
                <div class="relative overflow-hidden h-52 bg-[#fce8e8]">
                  <img
                    :src="rec.image"
                    :alt="rec.name"
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#e07a85] text-xs font-bold px-3 py-1 rounded-full">
                    {{ rec.category }}
                  </div>
                </div>
              </RouterLink>
              <div class="p-5">
                <h3 class="font-bold text-[#2d1a1a] mb-1">{{ rec.name }}</h3>
                <p class="text-xs text-[#6b4c4c]/50 line-clamp-2 mb-4">{{ rec.description }}</p>
                <div class="flex items-center justify-between">
                  <span class="text-[#e07a85] font-black text-lg">S/ {{ rec.price.toFixed(2) }}</span>
                  <RouterLink
                    :to="`/product/${rec.id}`"
                    class="text-xs font-bold bg-[#fce8e8] hover:bg-[#e07a85] text-[#e07a85] hover:text-white px-4 py-2 rounded-full transition-all duration-200"
                  >
                    Ver más →
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>

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

// 3 recomendados: misma categoría primero, excluyendo el actual
const recommended = computed(() => {
  if (!product.value) return []
  const others = products.filter((p) => String(p.id) !== String(product.value.id))
  const sameCategory = others.filter((p) => p.category === product.value.category)
  const different = others.filter((p) => p.category !== product.value.category)
  return [...sameCategory, ...different].slice(0, 3)
})

const added = ref(false)

function handleAddToCart() {
  if (!product.value) return
  cartStore.addItem(product.value)
  added.value = true
  setTimeout(() => (added.value = false), 2000)
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>