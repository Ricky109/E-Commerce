<template>
  <div class="bg-rose-50 min-h-screen">

    <!-- HERO -->
    <section class="relative min-h-screen flex items-center overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1600&q=80"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-rose-900/80 via-rose-900/50 to-transparent" />
      </div>

      <div class="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24">
        <div class="max-w-lg">
          <p class="text-rose-300 font-semibold text-sm tracking-widest uppercase mb-4">
            Pastelería artesanal · Arequipa
          </p>

          <h1 class="text-6xl font-black text-white leading-tight mb-6">
            Sweet<br />
            Moments<br />
            <span class="text-rose-400">Start Here</span>
          </h1>

          <p class="text-white/70 text-lg mb-10 leading-relaxed">
            Tortas artesanales elaboradas con ingredientes frescos,
            diseñadas para hacer especial cada celebración.
          </p>

          <RouterLink
            to="/products"
            class="btn-primary"
          >
            Ver catálogo
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- SOBRE NOSOTROS -->
    <section class="max-w-6xl mx-auto px-6 py-24">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <p class="text-rose-400 font-semibold text-xs tracking-widest uppercase mb-3">
            Nuestra esencia
          </p>

          <h2 class="text-4xl font-black text-rose-900 leading-tight mb-6">
            Sweet Moments<br />
            <span class="text-rose-400">Happen Here</span>
          </h2>

          <p class="text-rose-800/80 leading-relaxed mb-4">
            En Miskikusi creemos que cada torta cuenta una historia.
          </p>

          <RouterLink to="/about" class="btn-outline">
            Conoce más
          </RouterLink>
        </div>

        <div class="relative">
          <div class="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80"
              class="w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- DESTACADOS -->
    <section class="bg-rose-100 py-20">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-14">
          <p class="text-rose-400 text-xs uppercase mb-3">Lo más pedido</p>
          <h2 class="text-4xl font-black text-rose-900">Favoritos</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="product in featured"
            :key="product.id"
            class="card-pro"
          >
            <RouterLink :to="`/product/${product.id}`">
              <img :src="product.image" class="card-img" />
            </RouterLink>

            <div class="p-5">
              <h3 class="font-bold text-rose-900">{{ product.name }}</h3>

              <div class="flex justify-between items-center mt-3">
                <span class="font-black text-lg text-rose-900">
                  S/ {{ product.price.toFixed(2) }}
                </span>

                <button @click="handleAdd(product)" class="btn-small">
                  + Agregar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CATEGORÍAS PRO -->
    <section class="max-w-6xl mx-auto px-6 py-20">
      <div class="text-center mb-12">
        <p class="text-rose-400 text-xs uppercase mb-3">Explora</p>
        <h2 class="text-4xl font-black text-rose-900">Categorías</h2>
      </div>

      <div class="flex flex-wrap justify-center gap-4">

        <RouterLink to="/products" class="cat-pro">
          <svg class="icon-pro" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-width="1.5" d="M12 8v8m-4-4h8M3 12l2-6h14l2 6" />
          </svg>
          Clásicas
        </RouterLink>

        <RouterLink to="/products" class="cat-pro">
          <svg class="icon-pro" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="5" y="5" width="14" height="14" stroke-width="1.5"/>
          </svg>
          Cuadradas
        </RouterLink>

        <RouterLink to="/products" class="cat-pro">
          <svg class="icon-pro" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="3" y="7" width="18" height="10" stroke-width="1.5"/>
          </svg>
          Rectangulares
        </RouterLink>

        <RouterLink to="/products" class="cat-pro">
          <svg class="icon-pro" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-width="1.5" d="M12 21s-7-4.5-7-10a4 4 0 018-1 4 4 0 018 1c0 5.5-7 10-7 10z"/>
          </svg>
          Corazón
        </RouterLink>

        <RouterLink to="/products" class="cat-pro">
          <svg class="icon-pro" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-width="1.5" d="M4 20L20 4" />
          </svg>
          Sin azúcar
        </RouterLink>

      </div>
    </section>

  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
import products from '@/data/products.json'

const cartStore = useCartStore()
const featured = products.slice(0, 3)

function handleAdd(product) {
  cartStore.addItem(product)
}
</script>

<style scoped>

/* BOTONES */
.btn-primary {
  background: linear-gradient(to right, #fb7185, #ec4899);
  color: white;
  padding: 14px 30px;
  border-radius: 999px;
  font-weight: 600;
  transition: 0.3s;
}
.btn-primary:hover {
  transform: scale(1.05);
}

.btn-outline {
  border: 2px solid #fb7185;
  padding: 10px 20px;
  border-radius: 999px;
  color: #881337;
}
.btn-outline:hover {
  background: #fb7185;
  color: white;
}

.btn-small {
  background: #ec4899;
  color: white;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 12px;
}

/* CARDS */
.card-pro {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  transition: 0.3s;
}
.card-pro:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(236,72,153,0.2);
}
.card-img {
  height: 200px;
  width: 100%;
  object-fit: cover;
}

/* CATEGORÍAS */
.cat-pro {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 18px;
  border-radius: 999px;
  border: 1.5px solid #fda4af;
  color: #881337;
  background: white;
  transition: 0.3s;
}
.cat-pro:hover {
  background: linear-gradient(to right, #fb7185, #ec4899);
  color: white;
}

.icon-pro {
  width: 20px;
  height: 20px;
}

</style>