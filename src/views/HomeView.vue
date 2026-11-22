<script setup>
import { computed } from 'vue'
import { siteConfig } from '../config/site.js'
import products from '../data/products.json'
import ProductGrid from '../components/ProductGrid.vue'

const featuredProducts = computed(() => {
  const unggulan = products.filter((product) => product.unggulan)
  return (unggulan.length ? unggulan : products).slice(0, 3)
})

const kategoriList = computed(() => [...new Set(products.map((product) => product.kategori))])

const keunggulan = [
  {
    title: 'Desain kreatif',
    desc: 'Bentuk dan motif yang dirancang agar setiap gantungan kunci punya karakter.',
  },
  {
    title: 'Bahan berkualitas',
    desc: 'Material dipilih agar produk nyaman dipakai dan tahan lama.',
  },
  {
    title: 'Bisa custom',
    desc: 'Desain, warna, dan ukuran dapat disesuaikan dengan kebutuhan Anda.',
  },
]
</script>

<template>
  <div class="home-page">
    <section class="hero">
      <div class="container hero-inner">
        <div class="hero-copy">
          <span class="eyebrow">Produk kreatif buatan lokal</span>
          <h1 class="hero-title">
            Gantungan kunci <span>unik</span> untuk setiap cerita
          </h1>
          <p class="hero-desc">
            {{ siteConfig.deskripsiSingkat }} Temukan desain favoritmu atau pesan versi custom sesuai keinginan.
          </p>
          <div class="hero-actions">
            <RouterLink to="/katalog" class="btn btn-primary">
              Lihat Katalog
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </RouterLink>
            <RouterLink to="/kontak" class="btn btn-outline">Hubungi Kami</RouterLink>
          </div>
          <div class="hero-stats">
            <div><strong>{{ products.length }}+</strong><span>Produk</span></div>
            <div><strong>{{ kategoriList.length }}</strong><span>Kategori</span></div>
            <div><strong>Custom</strong><span>Sesuai request</span></div>
          </div>
        </div>

        <div class="hero-visual">
          <div class="hero-shape hero-shape--one" aria-hidden="true"></div>
          <div class="hero-shape hero-shape--two" aria-hidden="true"></div>
          <div class="hero-image-card">
            <img src="/images/hero.svg" alt="Kumpulan gantungan kunci dengan berbagai desain" fetchpriority="high" />
          </div>
          <div class="floating-note floating-note--top">
            <span class="note-dot" aria-hidden="true"></span>
            Desain Custom
          </div>
          <div class="floating-note floating-note--bottom">
            <span class="note-star" aria-hidden="true">★</span>
            Kualitas Pilihan
          </div>
        </div>
      </div>
    </section>

    <section class="section featured-section">
      <div class="container">
        <div class="section-header section-header--split">
          <div>
            <span class="eyebrow">Pilihan kami</span>
            <h2 class="section-title">Produk Unggulan</h2>
            <p class="section-desc">Beberapa desain yang paling diminati pelanggan.</p>
          </div>
          <RouterLink to="/katalog" class="text-link">
            Lihat semua produk
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </RouterLink>
        </div>
        <ProductGrid :products="featuredProducts" />
      </div>
    </section>

    <section class="section category-section">
      <div class="container">
        <div class="section-header section-header--center">
          <span class="eyebrow">Jelajahi</span>
          <h2 class="section-title">Pilih sesuai seleramu</h2>
          <p class="section-desc">Berbagai bahan dan gaya, semuanya bisa dibuat dengan desain sendiri.</p>
        </div>
        <div class="category-cards">
          <RouterLink
            v-for="kategori in kategoriList"
            :key="kategori"
            :to="`/katalog/${encodeURIComponent(kategori)}`"
            class="category-card"
          >
            <span class="category-card-arrow" aria-hidden="true">↗</span>
            <strong>{{ kategori }}</strong>
            <small>Lihat produk</small>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="section about-teaser">
      <div class="container about-teaser-inner">
        <div class="about-teaser-image">
          <img src="/images/about.svg" alt="Ilustrasi proses pembuatan gantungan kunci" loading="lazy" />
        </div>
        <div class="about-teaser-copy">
          <span class="eyebrow">Tentang usaha</span>
          <h2 class="section-title">Detail kecil, kesan besar</h2>
          <p>
            {{ siteConfig.namaUsaha }} berdiri sejak {{ siteConfig.tahunBerdiri }} dengan satu tujuan sederhana:
            membuat gantungan kunci yang tidak hanya berguna, tetapi juga menyenangkan untuk dilihat dan dibawa.
          </p>
          <ul class="check-list">
            <li v-for="item in keunggulan" :key="item.title">
              <span class="check-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m5 13 4 4L19 7" />
                </svg>
              </span>
              <span><strong>{{ item.title }}</strong> — {{ item.desc }}</span>
            </li>
          </ul>
          <RouterLink to="/profil" class="text-link">
            Kenali kami lebih lanjut
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="cta-band">
      <div class="container cta-band-inner">
        <div>
          <span class="eyebrow eyebrow--light">Siap memesan?</span>
          <h2>Wujudkan gantungan kunci impianmu</h2>
          <p>Pilih dari katalog atau ceritakan ide desainmu. Kami siap membantu melalui WhatsApp.</p>
        </div>
        <div class="cta-band-actions">
          <RouterLink to="/katalog" class="btn btn-light">Jelajahi Katalog</RouterLink>
          <RouterLink to="/kontak" class="btn btn-ghost-light">Hubungi Kami</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
