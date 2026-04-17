<template>
  <div class="bg-[#fffafa] min-h-screen pt-28 pb-20 px-6">
    <div class="max-w-7xl mx-auto">
      
      <header class="mb-16 reveal-content">
        <span class="text-[#e07a85] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block text-center lg:text-left"></span>
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div class="text-center lg:text-left">
            <h1 class="text-6xl md:text-7xl font-black text-[#2d1a1a] tracking-tighter leading-none mb-4">
              Nuestro <span class="text-[#e07a85]">Catálogo.</span>
            </h1>
            <p class="text-[#6b4c4c]/60 font-light text-lg">Selección exclusiva de repostería de vanguardia.</p>
          </div>
          
          <div class="flex justify-center lg:justify-end">
            <div class="bg-white px-8 py-4 rounded-3xl border border-[#fce8e8] shadow-sm flex items-center gap-4">
              <span class="text-4xl font-black text-[#2d1a1a] leading-none">{{ filteredProducts.length }}</span>
              <span class="text-[10px] font-black uppercase tracking-widest text-[#6b4c4c]/40 leading-tight">Piezas<br/>Disponibles</span>
            </div>
          </div>
        </div>
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-12">
        
        <aside class="lg:col-span-1 space-y-10">
          <div class="reveal-content" style="animation-delay: 0.2s">
            <h3 class="text-[11px] font-black uppercase tracking-[0.3em] text-[#2d1a1a] mb-6 flex items-center gap-2">
              <span class="w-2 h-2 bg-[#e07a85] rounded-full"></span> Categoría
            </h3>
            <div class="flex flex-wrap lg:flex-col gap-2">
              <button 
                v-for="cat in categories" 
                :key="cat"
                @click="selectedCategory = cat"
                :class="[
                  'px-6 py-3 rounded-full text-xs font-bold transition-all duration-300 text-left border',
                  selectedCategory === cat 
                    ? 'bg-[#2d1a1a] text-white border-[#2d1a1a] shadow-lg translate-x-2' 
                    : 'bg-white text-[#6b4c4c]/60 border-[#fce8e8] hover:border-[#e07a85] hover:text-[#e07a85]'
                ]"
              >
                {{ cat }}
              </button>
            </div>
          </div>

          <div class="reveal-content" style="animation-delay: 0.4s">
            <h3 class="text-[11px] font-black uppercase tracking-[0.3em] text-[#2d1a1a] mb-6 flex items-center gap-2">
              <span class="w-2 h-2 bg-[#e07a85] rounded-full"></span> Rango de Inversión
            </h3>
            <div class="bg-white p-8 rounded-[2.5rem] border border-[#fce8e8] shadow-sm">
              <div class="flex justify-between items-end mb-6">
                <span class="text-[10px] font-black text-[#6b4c4c]/40 uppercase tracking-widest">Máximo</span>
                <span class="text-2xl font-black text-[#e07a85]">S/ {{ maxPrice }}</span>
              </div>
              <input
                type="range"
                min="60"
                max="180"
                step="10"
                v-model="maxPrice"
                class="w-full h-1.5 bg-[#fce8e8] rounded-lg appearance-none cursor-pointer accent-[#e07a85]"
              />
              <div class="flex justify-between text-[10px] font-bold text-[#6b4c4c]/30 mt-4 uppercase tracking-tighter">
                <span>Min. S/ 60</span>
                <span>Max. S/ 180</span>
              </div>
            </div>
          </div>
        </aside>

        <main class="lg:col-span-3">
          <div v-if="filteredProducts.length > 0">
            <ProductList :products="filteredProducts" />
          </div>
          
          <div v-else class="h-[400px] flex flex-col items-center justify-center text-center bg-white rounded-[4rem] border border-dashed border-[#fce8e8]">
            <div class="w-20 h-20 bg-[#fffafa] rounded-full flex items-center justify-center mb-6">
               <span class="text-2xl opacity-20 text-[#2d1a1a]">?</span>
            </div>
            <p class="text-[#2d1a1a] font-bold tracking-tighter text-xl">No encontramos piezas bajo ese criterio</p>
            <button @click="resetFilters" class="mt-4 text-[#e07a85] text-xs font-black uppercase tracking-widest border-b border-[#e07a85]">Ver todo el catálogo</button>
          </div>
        </main>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import products from '../data/products.json'
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

const resetFilters = () => {
  selectedCategory.value = 'Todas'
  maxPrice.value = 180
}
</script>

<style scoped>
/* Estilo del Slider de Precio para Chrome/Safari */
input[type='range']::-webkit-slider-thumb {
  appearance: none;
  width: 18px;
  height: 18px;
  background: #2d1a1a;
  border: 3px solid #e07a85;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

input[type='range']::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 0 15px rgba(224, 122, 133, 0.4);
}

.reveal-content {
  animation: reveal 1s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes reveal {
  0% { transform: translateY(30px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
</style>