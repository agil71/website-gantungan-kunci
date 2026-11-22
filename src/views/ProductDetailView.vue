<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import products from '../data/products.json'
import ProductGrid from '../components/ProductGrid.vue'
import { buatUrlWhatsApp, formatRupiah, gambarProduk, pesanPesanProduk } from '../utils/helpers.js'

const route = useRoute()

const product = computed(() => products.find((item) => String(item.id) === String(route.params.id)) || null)
const harga = computed(() => (product.value ? formatRupiah(product.value.harga) : ''))
const gambar = computed(() => (product.value ? gambarProduk(product.value) : ''))
const variasi = computed(() => product.value?.variasi || [])

const variasiTerpilih = ref('')

watch(
  product,
  (value) => {
    variasiTerpilih.value = value?.variasi?.[0] || ''
  },
  { immediate: true },
)

const waUrl = computed(() =>
  product.value ? buatUrlWhatsApp(pesanPesanProduk(product.value, variasiTerpilih.value)) : '#',
)

const relatedProducts = computed(() => {
  if (!product.value) return []
  const samaKategori = products.filter(
    (item) => item.kategori === product.value.kategori && item.id !== product.value.id,
  )
  const lainnya = products.filter(
    (item) => item.kategori !== product.value.kategori && item.id !== product.value.id,
  )
  return [...samaKategori, ...lainnya].slice(0, 3)
})
</script>

<template>
  <div class="detail-page">
    <template v-if="product">
      <section class="section detail-section">
        <div class="container">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <RouterLink to="/">Beranda</RouterLink>
            <span aria-hidden="true">/</span>
            <RouterLink to="/katalog">Katalog</RouterLink>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{{ product.nama_produk }}</span>
          </nav>

          <div class="detail-layout">
            <div class="detail-media">
              <img :src="gambar" :alt="`Gantungan kunci ${product.nama_produk}`" fetchpriority="high" />
              <span class="detail-media-badge">{{ product.kategori }}</span>
            </div>

            <div class="detail-info">
              <span class="eyebrow">{{ product.kategori }}</span>
              <h1>{{ product.nama_produk }}</h1>
              <p class="detail-price">{{ harga }}</p>
              <p class="detail-description">{{ product.deskripsi }}</p>

              <div v-if="variasi.length" class="detail-variasi">
                <h2>Pilih Variasi</h2>
                <div class="variasi-options" role="group" aria-label="Pilih variasi produk">
                  <button
                    v-for="item in variasi"
                    :key="item"
                    type="button"
                    class="variasi-option"
                    :class="{ 'is-selected': variasiTerpilih === item }"
                    :aria-pressed="variasiTerpilih === item"
                    @click="variasiTerpilih = item"
                  >
                    {{ item }}
                  </button>
                </div>
              </div>

              <div class="detail-actions">
                <a :href="waUrl" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path d="M12.04 2C6.5 2 2.1 6.4 2.1 11.93c0 1.75.46 3.46 1.33 4.96L2 22l5.26-1.38a9.9 9.9 0 0 0 4.78 1.22c5.54 0 10.04-4.4 10.04-9.93C22.09 6.4 17.58 2 12.04 2Zm5.87 14.03c-.25.69-1.45 1.35-2 1.4-.54.05-1.05.25-3.55-.74a12.7 12.7 0 0 1-4.6-3.67c-.34-.4-1.58-1.85-1.58-4.35 0-2.5 1.31-3.72 1.78-4.23.46-.51 1.01-.64 1.35-.64.33 0 .67 0 .96.02.31.01.72-.12 1.12.96.4.92 1.36 3.17 1.48 3.4.12.23.2.5.04.81-.16.31-.7 1.01-.97 1.31-.24.26-.48.58-.69.87-.23.31-.48.65-.2 1.15.27.5 1.22 2.01 2.63 3.25 1.81 1.61 3.34 2.11 3.82 2.35.48.24.76.2 1.04-.13.28-.32 1.18-1.38 1.5-1.85.31-.47.62-.39 1.04-.23.42.16 2.66 1.25 3.12 1.48.46.23.76.34.87.54.1.19.1 1.1-.15 1.79Z" />
                  </svg>
                  Pesan via WhatsApp
                </a>
                <RouterLink to="/katalog" class="btn btn-outline btn-lg">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M19 12H5M11 18l-6-6 6-6" />
                  </svg>
                  Kembali ke Katalog
                </RouterLink>
              </div>

              <p class="detail-note">
                Pesanan diproses langsung melalui WhatsApp. Pesan otomatis sudah berisi nama produk dan variasi pilihanmu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="section related-section">
        <div class="container">
          <div class="section-header section-header--split">
            <div>
              <span class="eyebrow">Rekomendasi</span>
              <h2 class="section-title">Produk lainnya</h2>
            </div>
            <RouterLink to="/katalog" class="text-link">
              Lihat semua
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </RouterLink>
          </div>
          <ProductGrid :products="relatedProducts" />
        </div>
      </section>
    </template>

    <section v-else class="section not-found-section">
      <div class="container not-found">
        <span class="eyebrow">Produk tidak ditemukan</span>
        <h1>Produk yang kamu cari tidak tersedia</h1>
        <p>Mungkin tautannya sudah berubah. Kembali ke katalog untuk melihat produk lain.</p>
        <RouterLink to="/katalog" class="btn btn-primary">Kembali ke Katalog</RouterLink>
      </div>
    </section>
  </div>
</template>
