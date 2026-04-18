# Miskikusi — Tienda Virtual de Pastelería

Aplicación web de una sola página (SPA) desarrollada como proyecto universitario para el curso de Laboratorio de Tecnologías Emergentes — UCSM, Semestre 2026-I.

## Demo en vivo

[https://miskikusu.onrender.com](https://miskikusu.onrender.com)

---

## Descripción

Miskikusi es una tienda virtual de pastelería que ofrece una variedad de tortas artesanales organizadas en categorías. Permite explorar el catálogo, filtrar productos por categoría y precio, ver el detalle de cada producto y gestionar un carrito de compras.

---

## Funcionalidades

- Página de inicio con banner y productos destacados
- Catálogo completo con filtro por categoría y precio
- Vista de detalle de producto
- Carrito de compras con control de cantidades y cálculo de totales
- Navegación entre vistas sin recarga de página (SPA)
- Diseño responsivo para móvil y escritorio
- Página de información sobre la pastelería

---

## Stack Tecnológico

| Herramienta | Rol |
|---|---|
| Vue.js 3 (Composition API) | Framework principal |
| Vite | Bundler y servidor de desarrollo |
| Vue Router 4 | Navegación entre vistas |
| Pinia | Gestión de estado del carrito |
| Tailwind CSS | Estilos y diseño responsivo |
| JSON local | Fuente de datos del catálogo |

---

## Estructura del Proyecto

src/
├── assets/
├── components/
│   ├── layout/
│   │   ├── NavBar
│   ├── products/
│   │   ├── ProductCard
│   │   ├── ProductList
│   │   ├── CategoryFilter  
│   ├── cart/ 
│   │   ├── CartItem
│   └── common/  
│   │   ├── HeroBanner
├── views/
│   ├── Inicio.vue
│   ├── Catalogo.vue
│   ├── DetalleProd.vue
│   ├── Carrito.vue
│   └── Nosotros.vue
├── stores/
│   └── cart.js
├── data/
│   └── products.json
└── router/
└── index.js

---

## Instalación y uso local

En bash

# Clonar el repositorio
git clone https://github.com/Ricky109/E-Commerce.git

# Entrar a la carpeta
cd miskikusi

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev


La aplicación estará disponible en `http://localhost:5173`


## Autores

| Nombre | Rol |
|---|---|
| Ricardo Charahua Sánchez | Estructura base, router, catálogo, home |
| Dayana Mabel Coaguila Coaguila | Carrito, navbar, detalle de producto, nosotros |

---

## Información Académica

- Universidad: Universidad Católica de Santa María — UCSM
- Programa: Ingeniería de Sistemas
- Curso: Tecnologías Emergentes
- Semestre: 2026-I
