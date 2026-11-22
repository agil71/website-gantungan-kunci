<script setup>
import ProductCard from './ProductCard.vue'

defineProps({
  products: {
    type: Array,
    default: () => [],
  },
  emptyText: {
    type: String,
    default: 'Produk tidak ditemukan pada kategori ini.',
  },
})
</script>

<template>
  <div v-if="products.length" class="product-grid">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
  <div v-else class="empty-state">
    <div class="empty-state-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4M9 11h4" />
      </svg>
    </div>
    <h3>Belum ada produk</h3>
    <p>{{ emptyText }}</p>
    <RouterLink to="/katalog" class="btn btn-outline">Lihat Semua Produk</RouterLink>
  </div>
</template>
