<template>
  <div class="bg-white min-h-screen font-sans">

    <!-- HERO -->
    <section class="relative bg-[#fce8e8] overflow-hidden min-h-[90vh] flex items-center">

      <!-- Círculo decorativo fondo -->
      <div class="absolute right-0 top-0 w-[700px] h-[700px] bg-[#f9d5d5] rounded-full translate-x-1/3 -translate-y-1/4 z-0" />
      <div class="absolute right-20 bottom-0 w-96 h-96 bg-[#f5c0c0]/40 rounded-full z-0" />

      <div class="relative z-10 max-w-6xl mx-auto px-8 w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-20 pt-32">

        <!-- Texto -->
        <div>
          <p class="text-[#c0717a] font-semibold text-xs tracking-[0.3em] uppercase mb-5">
            Pastelería artesanal · Arequipa
          </p>
          <h1 class="text-6xl font-black text-[#2d1a1a] leading-[1.1] mb-6">
            Tortas<br />
            <span class="text-[#e07a85]">Miskikusi</span><br />
            Bakery
          </h1>
          <p class="text-[#6b4c4c]/70 text-base leading-relaxed mb-10 max-w-sm">
            Elaboradas con amor y los mejores ingredientes frescos.
            Perfectas para cada momento especial de tu vida.
          </p>
          <div class="flex items-center gap-4">
            <RouterLink
              to="/products"
              class="bg-[#2d1a1a] hover:bg-[#e07a85] text-white font-semibold px-8 py-3.5 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Explorar
            </RouterLink>
            <RouterLink
              to="/about"
              class="text-[#2d1a1a] font-semibold text-sm underline underline-offset-4 hover:text-[#e07a85] transition-colors"
            >
              Conoce más →
            </RouterLink>
          </div>

          <!-- Indicadores estilo slider -->
          <div class="flex items-center gap-2 mt-12">
            <span class="w-3 h-3 rounded-full bg-[#2d1a1a]" />
            <span class="w-8 h-3 rounded-full bg-[#e07a85]" />
            <span class="w-3 h-3 rounded-full bg-[#e8c4c8]" />
          </div>
        </div>

        <!-- Imagen torta hero -->
        <div class="relative flex items-center justify-center">
          <!-- Círculo rosa detrás -->
          <div class="absolute w-[420px] h-[420px] bg-[#f5b8be]/50 rounded-full z-0" />
          <!-- Imagen -->
          <img
            src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&q=80"
            alt="Torta destacada"
            class="relative z-10 w-[420px] h-[420px] object-cover rounded-full shadow-2xl border-4 border-white"
          />
          <!-- Badge flotante precio -->
          <div class="absolute top-8 right-0 z-20 bg-white rounded-2xl px-4 py-3 shadow-xl">
            <p class="text-xs text-gray-400 font-medium">Desde</p>
            <p class="text-xl font-black text-[#e07a85]">S/ 80.00</p>
          </div>
          <!-- Badge flotante rating -->
          <div class="absolute bottom-12 left-0 z-20 bg-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2">
            <span class="text-xl">⭐</span>
            <div>
              <p class="text-sm font-black text-[#2d1a1a]">4.9</p>
              <p class="text-xs text-gray-400">+200 pedidos</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CATEGORÍAS -->
    <section class="max-w-6xl mx-auto px-8 py-16">
      <div class="flex items-center justify-between mb-10">
        <div>
          <p class="text-[#e07a85] font-semibold text-xs tracking-widest uppercase mb-1">Explora</p>
          <h2 class="text-3xl font-black text-[#2d1a1a]">Nuestras categorías</h2>
        </div>
        <RouterLink to="/products" class="text-sm text-[#e07a85] font-semibold hover:underline">
          Ver todo →
        </RouterLink>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        <RouterLink
          v-for="cat in categories"
          :key="cat.label"
          to="/products"
          class="group flex flex-col items-center gap-3 bg-[#fce8e8] hover:bg-[#e07a85] rounded-2xl py-6 px-4 transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <div class="w-14 h-14 rounded-full overflow-hidden shadow-md border-2 border-white">
            <img :src="cat.img" :alt="cat.label" class="w-full h-full object-cover" />
          </div>
          <span class="text-xs font-bold text-[#2d1a1a] group-hover:text-white transition-colors text-center">
            {{ cat.label }}
          </span>
        </RouterLink>
      </div>
    </section>

    <!-- PRODUCTOS DESTACADOS -->
    <section class="bg-[#fdf5f5] py-20">
      <div class="max-w-6xl mx-auto px-8">
        <div class="text-center mb-14">
          <p class="text-[#e07a85] font-semibold text-xs tracking-widest uppercase mb-2">Lo más pedido</p>
          <h2 class="text-4xl font-black text-[#2d1a1a]">Favoritos de Miskikusi</h2>
          <p class="text-[#6b4c4c]/60 mt-2">Las tortas que más enamoran a nuestros clientes</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div
            v-for="product in featured"
            :key="product.id"
            class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
          >
            <RouterLink :to="`/product/${product.id}`">
              <div class="relative overflow-hidden h-56 bg-[#fce8e8]">
                <img
                  :src="product.image"
                  :alt="product.name"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#e07a85] text-xs font-bold px-3 py-1 rounded-full">
                  {{ product.category }}
                </div>
              </div>
            </RouterLink>
            <div class="p-5">
              <h3 class="font-bold text-[#2d1a1a] text-base mb-1">{{ product.name }}</h3>
              <p class="text-xs text-gray-400 line-clamp-2 mb-4">{{ product.description }}</p>
              <div class="flex items-center justify-between">
                <span class="text-[#e07a85] font-black text-xl">
                  S/ {{ product.price.toFixed(2) }}
                </span>
                <button
                  @click="handleAdd(product)"
                  :class="[
                    'text-xs font-bold px-4 py-2 rounded-full transition-all duration-200',
                    added === product.id
                      ? 'bg-green-500 text-white scale-95'
                      : 'bg-[#2d1a1a] hover:bg-[#e07a85] text-white hover:scale-105'
                  ]"
                >
                  {{ added === product.id ? '✓ Agregado' : '+ Agregar' }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-14">
          <RouterLink
            to="/products"
            class="inline-block bg-[#e07a85] hover:bg-[#c9606c] text-white font-bold px-10 py-4 rounded-full shadow-lg hover:scale-105 transition-all duration-200"
          >
            Ver todos los productos
          </RouterLink>
        </div>
      </div>
    </section>

 <!-- POR QUÉ ELEGIRNOS -->
<section class="bg-[#fce8e8] py-20">
  <div class="max-w-6xl mx-auto px-8 text-center">

    <p class="text-[#e07a85] font-semibold text-xs tracking-widest uppercase mb-3">
      Nuestra diferencia
    </p>

    <h2 class="text-4xl font-black text-[#2d1a1a] mb-14">
      ¿Por qué elegirnos?
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

      <!-- 1 -->
      <div class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition">
        <img
          src="https://i.pinimg.com/1200x/ab/53/ed/ab53eda40c4acb39b7ec251b1fa5bbaa.jpg"
          class="w-full h-40 object-cover"
        />
        <div class="p-6">
          <h3 class="font-bold text-[#2d1a1a] mb-2">Calidad artesanal</h3>
          <p class="text-sm text-[#6b4c4c]/70">
            Ingredientes frescos y recetas caseras.
          </p>
        </div>
      </div>

      <!-- 2 -->
      <div class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition">
        <img
          src="https://i.pinimg.com/736x/ea/b8/b6/eab8b6b832a69df45e3cfdb545f77982.jpg"
          class="w-full h-40 object-cover"
        />
        <div class="p-6">
          <h3 class="font-bold text-[#2d1a1a] mb-2">Delivery rápido</h3>
          <p class="text-sm text-[#6b4c4c]/70">
            Llegamos en menos de 2 hora.
          </p>
        </div>
      </div>

      <!-- 3 -->
      <div class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition">
        <img
          src="https://i.pinimg.com/1200x/f9/0e/a4/f90ea42ff0b2f4f29b7079ecece3bb5a.jpg"
          class="w-full h-40 object-cover"
        />
        <div class="p-6">
          <h3 class="font-bold text-[#2d1a1a] mb-2">Diseños únicos</h3>
          <p class="text-sm text-[#6b4c4c]/70">
            Tortas personalizadas para ti.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="max-w-7xl mx-auto px-6 py-32">
  <div class="relative overflow-hidden bg-[#2d1a1a] rounded-[4rem] p-12 lg:p-20 shadow-2xl">
    
    <div class="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-[#e07a85]/20 to-transparent pointer-events-none" />
    <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-[#e07a85]/10 rounded-full blur-[100px]" />

    <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      <div>
        <span class="text-[#e07a85] text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">Directo a tu mesa</span>
        <h2 class="text-6xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8">
          ¿Listo para un <br/>
          <span class="text-[#e07a85]">momento Miskikusi?</span>
        </h2>
        
        <div class="flex flex-wrap items-center gap-6 mt-12">
          <a href="https://wa.me/51989690133" target="_blank" 
             class="group relative px-10 py-5 bg-[#e07a85] text-white rounded-full font-bold overflow-hidden transition-all hover:scale-105 shadow-xl shadow-[#e07a85]/20">
            <span class="relative z-10 uppercase tracking-widest text-xs">Pedir por WhatsApp</span>
            <div class="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span class="absolute inset-0 flex items-center justify-center text-[#e07a85] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 uppercase tracking-widest text-xs font-black">¡Escríbenos ya!</span>
          </a>
          
          <div class="flex items-center gap-4">
            <a href="https://instagram.com/miskikusi.pe" target="_blank" 
               class="w-14 h-14 flex items-center justify-center rounded-full border border-white/10 text-white hover:bg-white hover:text-[#2d1a1a] transition-all duration-500">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <span class="text-white/30 text-[10px] font-black uppercase tracking-widest">Follow us</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        <div class="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[3rem] hover:bg-white/10 transition-colors group">
          <p class="text-[#e07a85] text-[10px] font-black uppercase tracking-widest mb-4">Chat Directo</p>
          <p class="text-white text-xl font-light tracking-tight group-hover:text-[#e07a85] transition-colors">
            +51 989 690 133
          </p>
        </div>

        <div class="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[3rem] hover:bg-white/10 transition-colors">
          <p class="text-[#e07a85] text-[10px] font-black uppercase tracking-widest mb-4">Disponibilidad</p>
          <p class="text-white text-xl font-light tracking-tight">
            Lun — Dom <br/>
            <span class="text-white/40 text-sm italic">9 AM — 8 PM</span>
          </p>
        </div>

        <div class="sm:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[3rem] flex items-center justify-between group hover:bg-white/10 transition-colors">
          <div>
            <p class="text-[#e07a85] text-[10px] font-black uppercase tracking-widest mb-2">Presencia</p>
            <p class="text-white text-2xl font-light tracking-tighter italic">Arequipa, Perú</p>
          </div>
          <div class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:border-[#e07a85] transition-all">
            <svg class="w-5 h-5 text-white group-hover:text-[#e07a85]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute bottom-0 left-0 w-full h-1 bg-white/5">
      <div class="w-1/3 h-full bg-[#e07a85] animate-[loading_5s_infinite_linear]" />
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
const featured = products.slice(0, 3)
const added = ref(null)

const categories = [
  { label: 'Clásicas',      img: 'https://i.pinimg.com/736x/8f/9c/35/8f9c359c983169a6bac96bceeda3b16b.jpg'},
  { label: 'Cuadradas',     img: 'https://i.pinimg.com/736x/58/31/94/5831943eda87b4cff42b5096c004dd09.jpg'},
  { label: 'Rectangulares', img: 'https://i.pinimg.com/1200x/2e/cc/74/2ecc741610ce1a70fa950e34df40b3f2.jpg'},
  { label: 'Corazón',       img: 'https://i.pinimg.com/736x/03/8e/e0/038ee0988f5c0e60bd3d9d9f873c4ca6.jpg'},
  { label: 'Sin Azúcar',    img: 'https://i.pinimg.com/736x/44/be/b3/44beb3c0d7453371ad1a1cfddfdc2431.jpg'},
]

function handleAdd(product) {
  cartStore.addItem(product)
  added.value = product.id
  setTimeout(() => (added.value = null), 1500)
}
</script>