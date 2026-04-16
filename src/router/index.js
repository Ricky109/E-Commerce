import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Catalogo from '../views/Catalogo.vue'
import DetalleProd from '../views/DetalleProd.vue'
import Carrito from '../views/Carrito.vue'
import Nosotros from '../views/Nosotros.vue'

const routes = [
  { path: '/', component: Inicio },
  { path: '/products', component: Catalogo },
  { path: '/product/:id', component: DetalleProd },
  { path: '/cart', component: Carrito },
  { path: '/about', component: Nosotros}
]

export default createRouter({
  history: createWebHistory(),
  routes,
})