<template>
  <div class="bg-[#fffafa] min-h-screen font-sans text-[#2d1a1a] selection:bg-[#e07a85] selection:text-white overflow-x-hidden">
    
    <section class="relative h-screen flex items-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute top-[-10%] left-[-10%] w-[60%] h-[80%] bg-[#fce8e8] rounded-full blur-[120px] opacity-60 animate-pulse" />
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="reveal-content">
          <div class="flex items-center gap-4 mb-8">
            <span class="inline-block px-5 py-2 text-[11px] font-black tracking-[0.5em] uppercase bg-white border border-[#e07a85]/10 rounded-full text-[#e07a85] shadow-sm">
              Fundada en 2026
            </span>
            <div class="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-md rounded-full border border-[#fce8e8]">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span class="text-[9px] font-black uppercase tracking-widest text-[#6b4c4c]">Abierto ahora</span>
            </div>
          </div>

          <h1 class="text-7xl md:text-8xl font-black leading-[0.95] mb-8 tracking-tighter">
            Quiénes <br/>
            <span class="text-[#e07a85]">somos.</span>
          </h1>
          
          <div class="space-y-10 max-w-md mb-12">
            <div class="relative pl-6 border-l-2 border-[#e07a85]/30">
              <p class="text-[10px] font-black uppercase tracking-[0.4em] text-[#e07a85] mb-2">Fundadores</p>
              <h2 class="text-2xl font-black text-[#2d1a1a] leading-none tracking-tighter">
                Ricardo Charahua <br/>
                <span class="text-[#6b4c4c]/40 text-xl font-light">&</span> Dayana Coaguila
              </h2>
            </div>

            <div class="space-y-4">
              <p class="text-xl text-[#2d1a1a] font-light leading-tight tracking-tight">
                Miskikusi es la materialización de un sueño compartido: <span class="italic font-serif">redefinir el dulce arequipeño.</span>
              </p>
              <p class="text-sm text-[#6b4c4c]/70 leading-relaxed font-light">
                Desde el corazón de Arequipa, transformamos técnica de vanguardia en recuerdos inolvidables, donde cada pieza es el equilibrio perfecto entre <span class="text-[#e07a85] font-medium">precisión</span> y <span class="text-[#e07a85] font-medium">sentimiento</span>.
              </p>
            </div>
          </div>

          
        </div>

        <div class="relative flex justify-center items-center">
          <div class="absolute w-[120%] h-[120%] border border-[#e07a85]/10 rounded-full animate-[spin_30s_linear_infinite]" />
          <div class="relative w-full max-w-[450px] aspect-[4/5] overflow-hidden rounded-[4rem] lg:rounded-[10rem] border-[12px] border-white shadow-[0_50px_100px_-20px_rgba(224,122,133,0.3)] transition-transform duration-700 hover:scale-[1.02]">
            <img 
              src="https://i.pinimg.com/1200x/53/3a/2c/533a2ce6f50912809275f416c72ec66c.jpg" 
              class="w-full h-full object-cover transform hover:scale-110 transition-transform duration-[2s]"
              alt="Miskikusi Experience"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-12 border-y border-[#fce8e8] py-16">
          <div v-for="stat in stats" :key="stat.label" class="text-center group">
            <p class="text-5xl font-black mb-2 tracking-tighter group-hover:text-[#e07a85] transition-colors">{{ stat.value }}</p>
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-[#6b4c4c]/40">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

   <section class="py-24 bg-[#fffafa]">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div class="relative min-h-[500px] group overflow-hidden rounded-[4rem] bg-[#2d1a1a] p-12 flex flex-col justify-between transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(45,26,26,0.3)]">
          <div class="absolute top-[-20%] right-[-10%] w-64 h-64 bg-[#e07a85]/10 rounded-full blur-[80px] group-hover:bg-[#e07a85]/20 transition-colors duration-700" />
          
          <div class="relative z-10">
            <div class="flex items-center gap-3 mb-12">
              <span class="w-8 h-[1px] bg-[#e07a85]"></span>
              <span class="text-[#e07a85] text-[10px] font-black uppercase tracking-[0.5em]">Nuestro Propósito</span>
            </div>
            <h3 class="text-6xl font-black text-white tracking-tighter uppercase mb-8 leading-none">
              Misión.
            </h3>
          </div>

          <div class="relative z-10">
            <p class="text-2xl md:text-3xl text-white/90 font-light leading-tight tracking-tight max-w-sm transform group-hover:-translate-y-2 transition-transform duration-500">
              Inspirar momentos de <span class="text-[#e07a85] font-medium">conexión humana</span> a través de la alta repostería técnica.
            </p>
            <div class="mt-10 flex items-center gap-4">
              <div class="h-[1px] flex-1 bg-white/10 overflow-hidden">
                <div class="w-full h-full bg-[#e07a85] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-1000"></div>
              </div>
              <span class="text-[10px] text-white/30 font-black uppercase tracking-widest">01</span>
            </div>
          </div>
        </div>

        <div class="relative min-h-[500px] group overflow-hidden rounded-[4rem] bg-white p-12 flex flex-col justify-between border border-[#fce8e8] transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(224,122,133,0.2)]">
          <div class="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-[#fce8e8] rounded-full blur-[80px] opacity-60" />

          <div class="relative z-10">
            <div class="flex items-center gap-3 mb-12">
              <span class="w-8 h-[1px] bg-[#e07a85]"></span>
              <span class="text-[#e07a85] text-[10px] font-black uppercase tracking-[0.5em]">El Horizonte</span>
            </div>
            <h3 class="text-6xl font-black text-[#2d1a1a] tracking-tighter uppercase mb-8 leading-none">
              Visión.
            </h3>
          </div>

          <div class="relative z-10 space-y-8">
            <div class="grid gap-6">
              <div class="flex items-baseline gap-4 group/item">
                <span class="text-[#e07a85] font-black text-xs uppercase tracking-widest">Future</span>
                <p class="text-lg text-[#6b4c4c] font-light italic">Ingeniería gastronómica de vanguardia.</p>
              </div>
              <div class="flex items-baseline gap-4 group/item">
                <span class="text-[#e07a85] font-black text-xs uppercase tracking-widest">Global</span>
                <p class="text-lg text-[#6b4c4c] font-light italic">Arquitectura de sabores sin precedentes.</p>
              </div>
              <div class="flex items-baseline gap-4 group/item">
                <span class="text-[#e07a85] font-black text-xs uppercase tracking-widest">Impact</span>
                <p class="text-lg text-[#6b4c4c] font-light italic">Trascender a través del arte visual.</p>
              </div>
            </div>

            <div class="pt-4 flex items-center gap-4">
              <div class="h-[1px] flex-1 bg-[#fce8e8] overflow-hidden">
                <div class="w-full h-full bg-[#2d1a1a] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-1000"></div>
              </div>
              <span class="text-[10px] text-[#6b4c4c]/30 font-black uppercase tracking-widest">02</span>
            </div>
          </div>
        </div>

      </div>
    </section>




    <section class="py-32 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 class="text-7xl font-black tracking-tighter leading-[0.85]">Nuestra <br/><span class="text-[#e07a85]">filosofía.</span></h2>
          <p class="text-[#6b4c4c]/60 max-w-sm pb-2 text-sm font-medium uppercase tracking-widest">Cuatro pilares que sostienen cada batido y cada entrega.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="valor in valores" :key="valor.label" class="relative aspect-[3/4] rounded-[3.5rem] overflow-hidden group shadow-xl">
            <img :src="valor.img" class="w-full h-full object-cover transition duration-1000 group-hover:scale-110" />
            <div class="absolute inset-0 bg-black/60 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center p-10 text-center">
              <h4 class="text-white text-xl font-black uppercase mb-4 tracking-widest">{{ valor.label }}</h4>
              <p class="text-white/80 text-sm leading-relaxed font-light">{{ valor.desc }}</p>
            </div>
            <div class="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur px-8 py-3 rounded-full shadow-2xl group-hover:opacity-0 transition-opacity">
              <span class="text-[10px] font-black uppercase tracking-[0.3em] text-[#2d1a1a]">{{ valor.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const stats = [
  { label: 'Entregas', value: '250+' },
  { label: 'Recetas', value: '15' },
  { label: 'Rating', value: '4.9★' },
  { label: 'Sedes', value: '01' },
]

const valores = [
  { 
    label: 'Calidad', 
    desc: 'Insumos premium seleccionados de los mejores productores de la región.',
    img: 'https://i.pinimg.com/736x/04/21/60/042160b07a21a20c211d8204de3afbfd.jpg' 
  },
  { 
    label: 'Pasión', 
    desc: 'Cada postre es ejecutado con precisión artística y manos maestras.',
    img: 'https://i.pinimg.com/1200x/3c/97/4c/3c974c77a8dc4354f7fb01813621f4f3.jpg' 
  },
  { 
    label: 'Frescura', 
    desc: 'Horneado técnico diario. Sin conservantes, sabor 100% natural.',
    img: 'https://i.pinimg.com/1200x/30/29/3f/30293f670a7fb51be8ad92b05bf0a566.jpg' 
  },
  { 
    label: 'Innovación', 
    desc: 'Evolucionando el concepto del dulce arequipeño con estética moderna.',
    img: 'https://i.pinimg.com/1200x/41/99/79/419979ae1e03a7e7a6d4b2c44f77d0d7.jpg' 
  },
]
</script>

<style scoped>
.reveal-content {
  animation: reveal 1.5s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes reveal {
  0% { transform: translateY(60px); opacity: 0; filter: blur(10px); }
  100% { transform: translateY(0); opacity: 1; filter: blur(0); }
}

html {
  scroll-behavior: smooth;
}
</style>