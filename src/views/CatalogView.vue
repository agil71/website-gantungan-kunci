<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import products from '../data/products.json'
import ProductGrid from '../components/ProductGrid.vue'

const route = useRoute()
const router = useRouter()

const kategoriList = computed(() => [...new Set(products.map((product) => product.kategori))])
const selectedKategori = computed(() => route.params.kategori || 'Semua')

const filteredProducts = computed(() => {
  if (selectedKategori.value === 'Semua') return products
  return products.filter((product) => product.kategori === selectedKategori.value)
})

function pilihKategori(kategori) {
  router.push(kategori === 'Semua' ? '/katalog' : `/katalog/${encodeURIComponent(kategori)}`)
}
</script>

<template>
  <div class="catalog-page">
    <section class="page-hero page-hero--catalog">
      <div class="container page-hero-inner">
        <span class="eyebrow">Katalog produk</span>
        <h1>Temukan gantungan kunci favoritmu</h1>
        <p>
          Jelajahi semua produk kami. Pilih kategori untuk mempersempit pencarian,
          lalu klik produk untuk melihat detail dan memesan via WhatsApp.
        </p>
      </div>
    </section>

    <section class="section catalog-section">
      <div class="container">
        <div class="catalog-toolbar">
          <div class="filter-group" role="group" aria-label="Filter kategori produk">
            <button
              v-for="kategori in ['Semua', ...kategoriList]"
              :key="kategori"
              type="button"
              class="filter-pill"
              :class="{ 'is-active': selectedKategori === kategori }"
              :aria-pressed="selectedKategori === kategori"
              @click="pilihKategori(kategori)"
            >
              {{ kategori }}
            </button>
          </div>
          <p class="catalog-count">
            Menampilkan <strong>{{ filteredProducts.length }}</strong> dari {{ products.length }} produk
          </p>
        </div>

        <ProductGrid
          :products="filteredProducts"
          emptyText="Belum ada produk pada kategori ini. Coba pilih kategori lain."
        />
      </div>
    </section>
  </div>
</template>
