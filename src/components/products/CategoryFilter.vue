<template>
  <div class="flex flex-wrap gap-2">
    <button
      v-for="category in categories"
      :key="category"
      @click="$emit('update:selected', category)"
      :class="[
        'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200',
        selected === category
          ? 'bg-pink-500 text-white'
          : 'bg-white text-gray-600 border border-gray-200 hover:border-pink-400 hover:text-pink-500'
      ]"
    >
      {{ category }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  categories: {
    type: Array,
    required: true
  },
  selected: {
    type: String,
    required: true
  }
})

defineEmits(['update:selected'])
</script>