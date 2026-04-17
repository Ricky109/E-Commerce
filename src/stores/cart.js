import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),

  getters: {
    totalItems: (state) =>
      state.items.reduce((sum, item) => sum + item.quantity, 0),

    totalPrice: (state) =>
      state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  },

  actions: {
    addItem(product) {
      const existing = this.items.find((item) => item.id === product.id)
      if (existing) {
        existing.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
    },

    removeItem(id) {
      this.items = this.items.filter((item) => item.id !== id)
    },

    updateQuantity(id, quantity) {
      const item = this.items.find((item) => item.id === id)
      if (!item) return
      if (quantity <= 0) {
        this.removeItem(id)
      } else {
        item.quantity = quantity
      }
    },

    clearCart() {
      this.items = []
    }
  }
})