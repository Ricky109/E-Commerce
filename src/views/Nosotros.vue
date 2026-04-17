<template>
  <div class="max-w-4xl mx-auto px-4 py-16">

    <!-- Encabezado -->
    <div class="text-center mb-16">
      <p class="text-rose-400 font-semibold text-sm tracking-widest uppercase mb-2">
        Nuestra historia
      </p>
      <h1 class="text-4xl font-bold text-gray-800 mb-4">🎂 Miskikusi</h1>
      <p class="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
        Somos una pastelería artesanal arequipeña apasionada por crear tortas únicas
        que endulzan los momentos más especiales de tu vida.
      </p>
    </div>

    <!-- Descripción -->
    <div class="bg-rose-50 rounded-2xl p-8 mb-8 border border-rose-100">
      <h2 class="text-xl font-bold text-gray-800 mb-3">¿Quiénes somos?</h2>
      <p class="text-gray-600 leading-relaxed">
        Miskikusi nació del amor por la repostería y el deseo de compartir sabores auténticos
        con cada familia. Elaboramos nuestras tortas con ingredientes frescos y de calidad,
        cuidando cada detalle desde la mezcla hasta la decoración final. Tenemos opciones
        para todos: desde tortas clásicas hasta versiones sin azúcar, porque creemos que
        todos merecen disfrutar un buen postre.
      </p>
    </div>

    <!-- Misión y Visión -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-white rounded-2xl p-7 border border-rose-100 shadow-sm">
        <div class="text-3xl mb-3">🎯</div>
        <h2 class="text-lg font-bold text-gray-800 mb-2">Misión</h2>
        <p class="text-gray-500 text-sm leading-relaxed">
          Ofrecer tortas artesanales de alta calidad que expresen cariño y creatividad,
          brindando una experiencia memorable a cada cliente con puntualidad, sabor
          y presentación inigualables.
        </p>
      </div>

      <div class="bg-white rounded-2xl p-7 border border-rose-100 shadow-sm">
        <div class="text-3xl mb-3">🌟</div>
        <h2 class="text-lg font-bold text-gray-800 mb-2">Visión</h2>
        <p class="text-gray-500 text-sm leading-relaxed">
          Convertirnos en la pastelería artesanal de referencia en Arequipa,
          reconocida por su innovación, compromiso con la calidad y el valor
          que otorgamos a cada celebración de nuestros clientes.
        </p>
      </div>
    </div>

    <!-- Valores -->
    <div class="bg-white rounded-2xl p-8 border border-rose-100 shadow-sm mb-8">
      <h2 class="text-xl font-bold text-gray-800 mb-5">Nuestros valores</h2>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div
          v-for="valor in valores"
          :key="valor.label"
          class="flex flex-col items-center text-center gap-2 p-3 rounded-xl bg-rose-50"
        >
          <span class="text-2xl">{{ valor.icon }}</span>
          <span class="text-xs font-semibold text-gray-700">{{ valor.label }}</span>
        </div>
      </div>
    </div>

    <!-- Contacto -->
    <div class="bg-gradient-to-br from-rose-500 to-pink-400 rounded-2xl p-8 text-white">
      <h2 class="text-xl font-bold mb-6">📬 Contáctanos</h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div class="flex items-start gap-3">
          <span class="text-2xl">📍</span>
          <div>
            <p class="font-semibold text-sm">Ubicación</p>
            <p class="text-rose-100 text-sm">Arequipa, Perú</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <span class="text-2xl">📱</span>
          <div>
            <p class="font-semibold text-sm">WhatsApp</p>
            <p class="text-rose-100 text-sm">+51 989690133</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <span class="text-2xl">📸</span>
          <div>
            <p class="font-semibold text-sm">Instagram</p>
            <p class="text-rose-100 text-sm">@miskikusi.pe</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const valores = [
  { icon: '💛', label: 'Amor' },
  { icon: '✨', label: 'Calidad' },
  { icon: '🤝', label: 'Compromiso' },
  { icon: '🌱', label: 'Frescura' },
]
</script>