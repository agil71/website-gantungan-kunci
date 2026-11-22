<script setup>
import { computed } from 'vue'
import { siteConfig } from '../config/site.js'
import products from '../data/products.json'

const kategoriList = computed(() => [...new Set(products.map((product) => product.kategori))])

const keunggulan = [
  {
    title: 'Desain orisinal',
    desc: 'Setiap motif dibuat dengan ide segar dan perhatian pada detail kecil.',
  },
  {
    title: 'Bahan terpilih',
    desc: 'Kami memilih material yang sesuai agar hasil akhir nyaman dan awet.',
  },
  {
    title: 'Produksi teliti',
    desc: 'Proses pengerjaan dijaga agar setiap produk layak diberikan.',
  },
  {
    title: 'Harga bersahabat',
    desc: 'Kualitas baik dengan harga yang tetap terjangkau untuk berbagai kalangan.',
  },
  {
    title: 'Layanan custom',
    desc: 'Desain khusus untuk hadiah, merchandise acara, maupun identitas brand.',
  },
  {
    title: 'Konsultasi mudah',
    desc: 'Diskusi desain dan pemesanan dilakukan langsung lewat WhatsApp.',
  },
]
</script>

<template>
  <div class="about-page">
    <section class="page-hero">
      <div class="container page-hero-inner">
        <span class="eyebrow">Profil usaha</span>
        <h1>Kenalan lebih dekat dengan {{ siteConfig.namaPanggilan }}</h1>
        <p>{{ siteConfig.deskripsiSingkat }}</p>
      </div>
    </section>

    <section class="section about-story">
      <div class="container about-story-inner">
        <div class="about-story-image">
          <img src="/images/about.svg" alt="Ilustrasi perajin dan hasil gantungan kunci" loading="lazy" />
        </div>
        <div class="about-story-copy">
          <span class="eyebrow">Sejarah & latar belakang</span>
          <h2 class="section-title">Dari hobi kecil menjadi usaha kreatif</h2>
          <p>
            {{ siteConfig.namaUsaha }} mulai dirintis pada {{ siteConfig.tahunBerdiri }}. Awalnya, membuat
            gantungan kunci hanyalah kegiatan sambilan yang dilakukan untuk diri sendiri dan orang terdekat.
            Ketertarikan pada bentuk, warna, dan detail kecil perlahan berkembang menjadi keinginan untuk
            menghasilkan produk yang bisa dinikmati lebih banyak orang.
          </p>
          <p>
            Hingga kini, kami terus mempelajari berbagai kombinasi bahan dan teknik pengerjaan agar setiap desain
            memiliki hasil yang maksimal. Kami percaya bahwa benda sederhana seperti gantungan kunci bisa
            menjadi cara untuk mengekspresikan kepribadian, kenangan, dan cerita.
          </p>
        </div>
      </div>
    </section>

    <section class="section about-values">
      <div class="container">
        <div class="section-header section-header--center">
          <span class="eyebrow">Mengapa memilih kami</span>
          <h2 class="section-title">Keunggulan usaha</h2>
          <p class="section-desc">Nilai yang kami jaga dalam setiap proses pengerjaan.</p>
        </div>
        <div class="value-grid">
          <article v-for="item in keunggulan" :key="item.title" class="value-card">
            <span class="value-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <path d="m5 13 4 4L19 7" />
              </svg>
            </span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section about-products">
      <div class="container about-products-inner">
        <div>
          <span class="eyebrow">Produk yang dijual</span>
          <h2 class="section-title">{{ products.length }} desain dalam {{ kategoriList.length }} kategori</h2>
          <p>
            Kami menyediakan gantungan kunci dari berbagai bahan. Setiap kategori memiliki karakteristik
            tersendiri, sehingga Anda bisa memilih yang paling sesuai dengan kebutuhan.
          </p>
        </div>
        <div class="about-category-list">
          <RouterLink
            v-for="kategori in kategoriList"
            :key="kategori"
            :to="`/katalog/${encodeURIComponent(kategori)}`"
            class="about-category-item"
          >
            <span>{{ kategori }}</span>
            <span aria-hidden="true">↗</span>
          </RouterLink>
        </div>
      </div>
      <div class="container">
        <RouterLink to="/katalog" class="btn btn-primary">Lihat Katalog Produk</RouterLink>
      </div>
    </section>
  </div>
</template>
