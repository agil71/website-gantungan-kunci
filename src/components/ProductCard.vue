<script setup>
import { computed } from 'vue'
import { formatRupiah, gambarProduk, buatUrlWhatsApp, pesanPesanProduk } from '../utils/helpers.js'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const harga = computed(() => formatRupiah(props.product.harga))
const gambar = computed(() => gambarProduk(props.product))
const waUrl = computed(() => buatUrlWhatsApp(pesanPesanProduk(props.product)))
</script>

<template>
  <article class="product-card">
    <div class="product-card-media">
      <img :src="gambar" :alt="`Gantungan kunci ${product.nama_produk}`" loading="lazy" decoding="async" />
      <span class="product-card-badge">{{ product.kategori }}</span>
    </div>
    <div class="product-card-body">
      <h3 class="product-card-name">{{ product.nama_produk }}</h3>
      <p class="product-card-price">{{ harga }}</p>
      <p class="product-card-desc">{{ product.deskripsi }}</p>
      <div class="product-card-actions">
        <RouterLink :to="`/produk/${product.id}`" class="btn btn-outline product-detail-btn">
          Lihat Detail
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </RouterLink>
        <a :href="waUrl" target="_blank" rel="noopener noreferrer" class="product-wa-btn" :aria-label="`Pesan ${product.nama_produk} via WhatsApp`">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2C6.5 2 2.1 6.4 2.1 11.93c0 1.75.46 3.46 1.33 4.96L2 22l5.26-1.38a9.9 9.9 0 0 0 4.78 1.22c5.54 0 10.04-4.4 10.04-9.93C22.09 6.4 17.58 2 12.04 2Zm5.87 14.03c-.25.69-1.45 1.35-2 1.4-.54.05-1.05.25-3.55-.74a12.7 12.7 0 0 1-4.6-3.67c-.34-.4-1.58-1.85-1.58-4.35 0-2.5 1.31-3.72 1.78-4.23.46-.51 1.01-.64 1.35-.64.33 0 .67 0 .96.02.31.01.72-.12 1.12.96.4.92 1.36 3.17 1.48 3.4.12.23.2.5.04.81-.16.31-.7 1.01-.97 1.31-.24.26-.48.58-.69.87-.23.31-.48.65-.2 1.15.27.5 1.22 2.01 2.63 3.25 1.81 1.61 3.34 2.11 3.82 2.35.48.24.76.2 1.04-.13.28-.32 1.18-1.38 1.5-1.85.31-.47.62-.39 1.04-.23.42.16 2.66 1.25 3.12 1.48.46.23.76.34.87.54.1.19.1 1.1-.15 1.79Z" />
          </svg>
        </a>
      </div>
    </div>
  </article>
</template>
